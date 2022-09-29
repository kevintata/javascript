function count(){
    let start = document.getElementById('txt1')
    let end = document.getElementById('txt2')
    let steps = document.getElementById('txt3')
    let res = document.getElementById('res')

    if (start.value.length == 0 || end.value.length == 0 || steps.value.length == 0){
        // window.alert('[ERROR] ')
        res.innerHTML = 'Impossible to count.'
    } else {
        res.innerHTML = 'Counting... <br>'
        let s = Number(start.value)
        let e = Number(end.value)
        let st = Number(steps.value)

        if (st <= 0 ){
            window.alert('Invalid, Considering 1 STEP')
            st = 1
        }

            
        if (s < e){
            //Counting forwards
            for(let c = s; c <= e; c += st){
                res.innerHTML += `${c} \u{1F449}`
            }
           
        }else {
            //Counting backwords
            for(let c = s; c >= e; c -= st){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}