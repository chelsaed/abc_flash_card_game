document.querySelectorAll('.letter').forEach((letter)=>{
    letter.addEventListener('click', (e)=>{
        console.log(e.target.innerHTML)
        
    if ((e.target.innerHTML) === 'A') {
        alert('Yay! You got it right!')
        return
    }else{
        alert('Try again!')
    }
})
    })
    



    

// let guess = document.querySelector('.letter2')
// guess.addEventListener('click', ()=> {
    
 
// function guess() {
//     HTMLDivElement.onclick
//         if (document.contains=="letter2".innerHTML)= "Correct!")
//     }
// 