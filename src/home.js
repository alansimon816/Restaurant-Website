import { createHeader } from './tabs'
import { createFooter } from './footer'

const createDescription = () => {
    let description = document.createElement('p')
    description.id = 'description'
    description.textContent = 
    `Come on down for a taste of vintage Italian cuisine! Vesuvio's is a world
    reknowned, five-star restaurant. We offer a wide variety of popular
    Italian dishes that are served to perfection, but we really pride ourselves 
    in serving Italian delicacies that are hard to come by. Whether you opt for
    a classic margarita pizza or some home-grown Mazzamurru, you are in for a 
    treat. No one does fine Italian cuisine better than we do.`
    document.querySelector('#content').appendChild(description)
}

const createHomePage = () => {
    createHeader()
    let div = document.querySelector('#content')
    let h1 = document.createElement('h1')
    let h2 = document.createElement('h2')
    h1.innerHTML = "Nouvo Vesuvio"
    div.appendChild(h1)
    h2.innerHTML = "Italian delicacies served to you on a silver platter."
    div.appendChild(h2)
    createDescription()
    createFooter() 
}

export {createHomePage};