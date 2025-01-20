function soltarConfetes() {
    for (let i = 0; i < 10; i++) {  // 10 "linhas" de confetes caindo
        confetti({
            particleCount: 100,         // Menos partículas para uma chuva mais suave
            spread: 360,                 // Controle menor de espalhamento
            origin: { x: (i * 0.1) + 0.05, y: 0 }, // Confetes vindo de diferentes pontos no topo
            scalar: 2.4,                // Ajuste o tamanho das partículas
            angle: 90,                  // Confetes caem verticalmente
            gravity: 1.5,               // Aumenta a gravidade para uma queda mais rápida
            ticks: 500                  // Aumenta o número de ticks para durar mais tempo
        });
    }
}

    function confirmarPresenca() {
        const nome = document.getElementById('nome').value.trim();
        const confirmacao = document.getElementById('confirmacao');

        if (nome) {
            confirmacao.textContent = `Obrigado, ${nome}! Sua presença foi confirmada. Não se esqueça em! 📅 Data: 08/02/2025 | ⏰ Horário: 18:00`;
            soltarConfetes();
        } else {
            confirmacao.textContent = "Por favor, digite seu nome para confirmar.";
        }
    }


    let contagemConvidados = 0; // Variável para contar as confirmações

    function confirmarPresenca() {
        const nome = document.getElementById('nome').value.trim();
        const confirmacao = document.getElementById('confirmacao');
        const webhookUrl = "https://discord.com/api/webhooks/1329108325157175347/lu_7q7FFSPzbDQhdQjLTWKW0oFbAVtAa1aYByJAyjNjI5-MGgX7butOm_hbhAzE-xawS"; // Substitua pelo seu webhook real

        if (nome) {
            confirmacao.innerHTML = "Obrigado, " + nome + "! Sua presença foi confirmada. Mal posso esperar para te ver!";
            soltarConfetes();

            contagemConvidados++; // Incrementa o contador de convidados

            // Enviar o nome e o número total de confirmações para o webhook do Discord
            fetch(webhookUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ content: `**${contagemConvidados}:** ${nome}` })
            })
                .then(response => {
                    if (response.ok) {
                        console.log("Presença confirmada no Discord");
                    } else {
                        console.error("Erro ao enviar para o Discord");
                    }
                })
                .catch(error => console.error("Erro na solicitação: ", error));
        } else {
            confirmacao.innerHTML = "Por favor, digite seu nome para confirmar.";
        }
    }

    window.onload = soltarConfetes;