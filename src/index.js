import { createHomePage } from './home'

createHomePage()

const setClickListeners = () => {
    document.querySelector('#Home').addEventListener('click', loadContent)
    document.querySelector('#Menu').addEventListener('click', loadContent)
    document.querySelector('#Order').addEventListener('click', loadContent)
    document.querySelector('#Contact').addEventListener('click', loadContent)
}

const loadContent = (e) => {
    wipeContent()
    if (e.target.id == 'Home') {
        createHomePage()
    } else if (e.target.id == 'Menu') {
        //createMenuPage()
    } else if (e.target.id == 'Order') {
        //createOrderPage()
    } else if (e.target.id == 'Contact') {
        //createContactPage()
    }
    setClickListeners()
}

setClickListeners()

const wipeContent = () => {
    let content = document.querySelector('#content')
    content.innerHTML = ''
}