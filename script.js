let transSumEl = document.getElementById('currency')
let mountEl = document.getElementById('mount')
let sumEl = document.getElementById('sum')
let resultEl = document.getElementById('result')


const sumCurrent = () => {
    let transSum = parseFloat(transSumEl.value)
    let mount = parseFloat(mountEl.value)
    
    let resEl = transSum * mount
    
    let audio = new Audio 
    audio.src = "drop.mp3"
    audio.play(audio)

    resultEl.innerHTML = 'Total amount:' + resEl.toFixed(2)+ "som"
    resultEl.style.color = "red"
    console.log(resEl)
}

sumEl.addEventListener('click', sumCurrent)


// let a = '23'
// let b = '42'
// console.log(parselFloat(a)+parselFloat(b))
// console.log(parselFloat(a))

