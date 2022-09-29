function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERROR] Verify the year and try again')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'Male'
            if (idade >= 0 && idade < 10){
                // kid
                img.setAttribute('src', 'foto-baby-boy.png')
            } else if ( idade < 18){
                // jovem
                img.setAttribute('src', 'foto-teen-boy.png')
            } else if (idade < 55){
                //adulto
                img.setAttribute('src', 'foto-adult-male.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-elderly-man.png')
            }

        } else if (fsex[1].checked){
            genero = 'Female'
            if (idade >= 0 && idade < 10){
                // kid
                img.setAttribute('src', 'foto-baby-girl.png')
            } else if ( idade < 18){
                // jovem
                img.setAttribute('src','foto-teen-girl.png')
            } else if (idade < 55){
               //adulto
                img.setAttribute('src','foto-adult-female.png') 
            } else {
                img.setAttribute('src','foto-elderly-woman.png')
                //idoso
            }

        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `We've detected a ${genero} who is ${idade} years old.`
        res.appendChild(img)
    }

}