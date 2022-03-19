    var minutos = document.getElementById('min')
    var segundos = document.getElementById('seg')
    var resultado = document.getElementById('res')
    
    var cronometroSeg;

    var minutoAtual;
    var segundoAtual;

    var interval;

    for(var i = 0; i <= 60; i++) {
        minutos.innerHTML+= '<option value="'+i+'">'+i+'</option>';
    }
    for(var i = 1; i <= 60; i++) {
        segundos.innerHTML+= '<option value="'+i+'">'+i+'</option>';
    }
    
    function cronometrar() {
        minutoAtual = minutos.value;
        segundoAtual = segundos.value;

        resultado.innerHTML = `${minutoAtual} : ${segundoAtual}`

        interval = setInterval(function(){

            segundoAtual--;
            if (segundoAtual <= 0) {
                if (minutoAtual > 0) {
                    minutoAtual--;
                    segundoAtual = 59;
                } else {
                    alert('Acabou!')
                    clearInterval(interval);
                }
            }

            resultado.innerHTML = `${minutoAtual} : ${segundoAtual}`
        } ,1000);
    }
