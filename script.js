
let button = document.querySelector('.startButton')

button = addEventListener('click', (target)=>{
    document.querySelector('button')
    console.log('yay')
})

let nextButton = document.querySelector('.nextButton')

nextButton = addEventListener('click', (target)=>{
    document.querySelector('nextButton')
    console.log('yay')
})

document.querySelectorAll('.letter').forEach((letter)=>{
    letter.addEventListener('click', (e)=>{
        console.log(e.target.innerHTML)
        
    })
})

