document.querySelectorAll('.letter').forEach((letter)=>{
    letter.addEventListener('click', (e)=>{
        console.log(e.target.innerHTML)
        
    if ((e.target.innerHTML) === 'K') {
        alert('Yay! You got it right!')
        return
    }else{
        alert('Try again!')
    }
})
    })