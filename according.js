let a=document.querySelectorAll('a')

a.forEach(el=>{
    el.addEventListener('click',function(event){
        event.preventDefault()
        getData(el.textContent)
    })
})

function getData(el){
    let p=document.querySelectorAll('p')
    for(let i=0; i<p.length; i++){
        if(el==='paris'){
        p[0].classList.toggle('active')
        }
        else if(el==='jepang'){
            p[1].classList.toggle('active')
        }
        else{
            p[2].classList.toggle('active')
        }
    }
  
}