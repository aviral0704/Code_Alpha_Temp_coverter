let celciusInput = document.querySelector('#celcius > input') 
let FahrenhietInput = document.querySelector('#Fahrenhiet > input') 
let KelvinInput = document.querySelector('#Kelvin > input') 

let btn = document.querySelector('.button button')

function roundnumber(number){
    return Math.round(number*100)/100
}

celciusInput.addEventListener('input', function(){
    let ctemp = parseFloat(celciusInput.value)
    let ftemp = (ctemp*(9/5)) + 32
    let ktemp = ctemp + 273.15

    FahrenhietInput.value = roundnumber(ftemp)
    KelvinInput.value = roundnumber(ktemp)
})

FahrenhietInput.addEventListener('input', function(){
    let ftemp = parseFloat(FahrenhietInput.value)
    let ctemp = (ftemp - 32) * (5/9)
    let ktemp = (ftemp - 32) * (5/9) + 273.15

    celciusInput.value = roundnumber(ctemp)
    KelvinInput.value = roundnumber(ktemp)
})

KelvinInput.addEventListener('input', function(){
    let ktemp = parseFloat(KelvinInput.value)
    let ftemp =  (ktemp - 273.15) * 9/5 + 32
    let ctemp =  ktemp - 273.15

    FahrenhietInput.value = roundnumber(ftemp)
   celciusInput.value = roundnumber(ctemp)
})

btn.addEventListener('click',()=>{
     celciusInput.value = ""
     FahrenhietInput.value = ""
     KelvinInput.value = ""         

})
