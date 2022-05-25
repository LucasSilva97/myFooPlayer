var videoClipe = document.getElementById("videoClipe");

//Essa função consiste em avançar 10 segundos do vídeo
function avancarTempoVideo() {
    videoClipe.currentTime += 10;
}

//Essa função consiste em regressar 10 segundos do vídeo
function retornarTempoVideo() {
    videoClipe.currentTime -= 10;
}


//Função de iniciar o vídeo
//Deve disparar as sub-tarefas de neon 
function iniciarVideo() {
    videoClipe.play();

    setInterval(pulsarNeon, 1700);
    setInterval(pulsarTitulo, 1000);

    function pulsarNeon() {
        let luzNeon = document.getElementById("luzNeon");

        luzNeon.classList.toggle("neonVisivel");
    }

    function pulsarTitulo() {
        let nomeMusica = document.getElementById("nomeDaMusica");
        nomeMusica.classList.toggle("nomeMusicaNeon");
    }
}

//Função de pausar o vídeo
function pausarVideo() {
    videoClipe.pause();
}

//Função de stop do vídeo
function pararVideo() {
    videoClipe.currentTime = 0;
    videoClipe.pause();
}

//função de barra de progresso
function progressoLoop() {
    let progresso = document.getElementById("progresso");
    setInterval(function() {
        progresso.value = Math.round((videoClipe.currentTime / videoClipe.duration) * 100);
    }, 100);
}

progressoLoop();