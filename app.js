const collapsibleHeader = document.querySelectorAll('.collapsible__header')

collapsibleHeader.forEach(item=>{
    item.addEventListener('click',()=>{
        const collapsible = item.parentElement;
        collapsible.classList.toggle('collapsible--hidden')
    })
})


/* NAV TOGGLE */

const navToggler = document.querySelector('.nav__toggler')
const navList = document.querySelector('.nav')

navToggler.addEventListener('click',()=>{
    navList.classList.toggle('nav--expanded');
})

collapsibleHeader.forEach(item=>{
    co
    item.addEventListener('click',()=>{
        const collapsible = item.parentElement;
        collapsible.classList.toggle('collapsible--hidden')
    })
})
