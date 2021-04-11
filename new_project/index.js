// get the menu first using DOM
const menu = document.getElementById('real-menu')
// pick the anchor
const changeMenu = document.getElementById('menu')
// it will listen to an eventlistener
// as I click it should display
menu.addEventListener('click', ()=>{
    menu.style.display === 'block'
    if(menu.style.display === 'block'){
       
    }else{
        changeMenu.style.display === 'none'
    }
})
//  all the anchor elements
