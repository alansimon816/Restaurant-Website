import { createHeader } from './tabs'

const createHomePage = () => {
    createHeader()
    let div = document.querySelector('#content')
    let h1 = document.createElement('h1')
    let h2 = document.createElement('h2')
    h1.innerHTML = "Nouvo Vesuvio"
    div.appendChild(h1)
    h2.innerHTML = "Italian delicacies served to you on a silver platter."
    div.appendChild(h2)
}

export {createHomePage};