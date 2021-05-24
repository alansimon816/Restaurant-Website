import { createHeader } from './tabs'
import { createFooter } from './footer'

const createOrderPage = () => {
    createHeader()
    createPlaceholder()
    createFooter()
}

const createPlaceholder = () => {
    let div = document.createElement('div')
    let img = document.createElement('img')
    let p = document.createElement('p')
    p.innerHTML = `Coming Soon!`
    img.src = 'images/artie.jpg'
    img.id = 'artie'
    div.id = 'order-placeholder-container'
    div.append(img)
    div.append(p)
    document.querySelector('#content').append(div)
}


export { createOrderPage }