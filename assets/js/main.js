function calcular(){
    //Calculo de tempo
    ptime = 20
    etime = 0

    // Seleção de poção
    switch($('#enchant').val()){
        default:
            alert('Poção não encontrada')
            break
        case '1':
            $('#potion').html('poção de velocidade')
            $('#time').html('tempo da poção: 3:00 minutos')
            ptime = ptime + 20
            etime = 180
            break
        case '2':
            $('#potion').html('poção de lentidão')
            $('#time').html('tempo da poção: 1:30 minutos')
            ptime = ptime + 20
            etime = 90
            break
        case '3':
            $('#potion').html('poção de salto')
            $('#time').html('tempo da poção: 3:00 minutos')
            ptime = ptime + 20
            etime = 180
            break
        case '4':
            $('#potion').html('poção de força')
            $('#time').html('tempo da poção: 3:00 minutos')
            ptime = ptime + 20
            etime = 180
            break
        case '5':
            $('#potion').html('poção de cura')
            $('#time').html('tempo da poção: instantâneo')
            ptime = ptime + 20
            break
        case '6':
            $('#potion').html('poção de dano')
            $('#time').html('tempo da poção: instantâneo')
            ptime = ptime + 20
            break
        case '7':
            $('#potion').html('poção de veneno')
            $('#time').html('tempo da poção: 0:45 segundos')
            ptime = ptime + 20
            etime = 45
            break
        case '8':
            $('#potion').html('poção de regeneração')
            $('#time').html('tempo da poção: 0:45 segundos')
            ptime = ptime + 20
            etime = 45
            break
        case '9':
            $('#potion').html('poção de resistência ao fogo')
            $('#time').html('tempo da poção: 3:00 minutos')
            ptime = ptime + 20
            etime = 180
            break
        case '10':
            $('#potion').html('poção de respiração aquática')
            $('#time').html('tempo da poção: 3:00 minutos')
            ptime = ptime + 20
            etime = 180
            break
        case '11':
            $('#potion').html('poção de visão noturna')
            $('#time').html('tempo da poção: 3:00 minutos')
            ptime = ptime + 20
            etime = 180
            break
        case '12':
            $('#potion').html('poção de invisibilidade')
            $('#time').html('tempo da poção: 3:00 minutos')
            ptime = ptime + 20
            etime = 180
            break
        case '13':
            $('#potion').html('poção do mestre tartaruga')
            $('#time').html('tempo da poção: 0:20 segundos')
            ptime = ptime + 20
            etime = 20
            break
        case '14':
            $('#potion').html('poção de queda lenta')
            $('#time').html('tempo da poção: 1:30 minutos')
            ptime = ptime + 20
            etime = 90
            break
        case '15':
            $('#potion').html('poção de fraqueza')
            $('#time').html('tempo da poção: 1:30 minutos')
            ptime = ptime + 20
            etime = 90
            break
    }

    let potion = $('#enchant').val();

    switch($('#upgrade').val()){
        default: 
            alert('Melhoria não encontrada')
            break
        case '1':
            $('#b2-upgrade').html('sem melhorias')
            break
        case '2':
            $('#b2-upgrade').html('maior duração')

            if(potion == 5 || potion == 6){
                $('#time').html('não suporta a melhoria de tempo')
                break
            }
            else if(potion == 1 || potion == 3 || potion == 4 || potion == 9 || potion == 10 || potion == 11 || potion == 12){
                $('#time').html('tempo da poção: 8:00 minutos')
                ptime = ptime + 20
                etime = 480
                break
            }
            else if(potion == 2 || potion == 14 || potion == 15){
                $('#time').html('tempo da poção: 4:00 minutos')
                ptime = ptime + 20
                etime = 240
                break
            }
            else if(potion == 7 || potion == 8){
                $('#time').html('tempo da poção: 1:30 minutos')
                ptime = ptime + 20
                etime = 180
                break
            }
            else if(potion = 13){
                $('#time').html('tempo da poção: 0:40 segundos')
                ptime = ptime + 20
                etime = 40
                break
            }
            break
        case '3':
            $('#b2-upgrade').html('nível ii')

            if(potion == 9 || potion == 10 || potion == 11 || potion == 12 || potion == 14 || potion == 15){
                $('#time').html('não suporta a melhoria de nível')
                break
            }
            else if(potion == 1 || potion == 3 || potion == 5){
                $('#time').html('tempo da poção: 1:30 minutos')
                ptime = ptime + 20
                etime = 180
                break
            }
            else if(potion == 2 || potion == 13){
                $('#time').html('tempo da poção: 0:20 segundos')
                ptime = ptime + 20
                etime = 20
                break
            }
            else if(potion == 7){
                $('#time').html('tempo da poção: 0:21 segundos')
                ptime = ptime + 20
                etime = 21
                break
            }
            else if(potion == 8){
                $('#time').html('tempo da poção: 0:22 segundos')
                ptime = ptime + 20
                etime = 22
                break
            }
            break
    }

    switch($('#mode').val()){
        default: 
            alert('Melhoria não encontrada')
            break
        case '1':
            $('#b2-upgrade').html('sem melhorias ii')
            break
        case '2':
            $('#b2-upgrade').html('arremessável')
            ptime = ptime + 20
            break
        case '3':
            $('#b2-upgrade').html('prolongada')
            ptime = ptime + 20
            break
    }

    let qnt = $('#b1-qnt').val()
    let etime2 = etime * qnt
    let etime3 = fmtMSS(etime2)
    $('#b2-qnt').html(`quantiade: ${qnt}`)
    $('#ptime').html(`tempo de preparo ${ptime} segundos`)
    $('#etime').html(`duração de efeitos: ${etime3} minutos`)

    function fmtMSS(s){ return( s - ( s %= 60 )) / 60 + (9 < s? ':': ':0') + s ;}
}