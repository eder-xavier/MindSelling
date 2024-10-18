// Define a data e hora de início da oferta (18/10/2024 às 18:30)
const offerStartTime = new Date('2024-10-18T18:30:00').getTime();

// Define o tempo da oferta (48 horas em milissegundos)
const offerDuration = 48 * 60 * 60 * 1000;  // 48 horas

// Calcula o momento final da oferta (tempo inicial + duração da oferta)
const offerEndTime = offerStartTime + offerDuration;

// Função que atualiza o cronômetro
function updateTimer() {
    const now = new Date().getTime();
    const timeLeft = offerEndTime - now;

    if (timeLeft > 0) {
        // Cálculos de horas, minutos e segundos
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Atualiza o display do cronômetro
        document.getElementById('countdown').innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else {
        // Quando a oferta expirar
        document.getElementById('countdown').innerHTML = "Oferta Expirada!";
    }
}

// Atualiza o cronômetro a cada 1 segundo
setInterval(updateTimer, 1000);

// Inicia o cronômetro na primeira execução
updateTimer();
