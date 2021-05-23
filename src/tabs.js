import { createHomePage } from './home'

const createHeader = () => {
    let header = document.createElement('header')
    let home = document.createElement('div')
    let menu = document.createElement('div')
    let order = document.createElement('div')
    let contact = document.createElement('div')
    let tabs = [home, menu, order, contact]

    home.innerHTML = "Home"
    menu.innerHTML = "Menu"
    order.innerHTML = "Order"
    contact.innerHTML = "Contact"

    tabs.forEach(elem => {
        elem.setAttribute('ID', `${elem.innerHTML}`)
        elem.setAttribute('class', 'tabs')
        elem.addEventListener('mouseover', illuminate)
        elem.addEventListener('mouseout', dim)
    })

    header.append(home, menu, order, contact)
    document.querySelector('#content').appendChild(header)
}

function illuminate(e) {
    let target = e.target;
    target.style.textShadow = 
    '1px 1px 2px black, 0 0 25px yellow, 0 0 5px goldenrod'
}

function dim(e) {
    let target = e.target;
    target.style.removeProperty('text-shadow') 
}

export { createHeader }