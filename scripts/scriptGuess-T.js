document.querySelectorAll('.letter').forEach((letter)=>{
    letter.addEventListener('click', (e)=>{
        console.log(e.target.innerHTML)
        
    if ((e.target.innerHTML) === 'T') {
        alert('Yay! You got it right!')
        return
    }else{
        alert('Try again!')
    }
})
    })