import { createBackground } from './background'
import { createHeader } from './tabs'
import { createFooter } from './footer'

const createMenu = () => {
    let menu = document.createElement('img')
    menu.src = 'images/menu.jpg'
    menu.alt = 'picture of the menu'
    menu.id = 'menu'
    document.querySelector('#content').appendChild(menu)
}

const createMenuPage = () => {
    createHeader()
    createBackground()
    createMenu()
    createFooter()
}

export { createMenuPage }