import { createBackground } from './background'
import { createHeader } from './tabs'
import { createFooter } from './footer'

const createContactInformation = () => {
    let div = document.createElement('div')
    let contactInfo = document.createElement('p')
    contactInfo.id = 'contact'
    contactInfo.innerHTML =
    `<b>Phone</b>(201) 515-4954<br>
     <b>Email</b>ArtieBucco@NuovoVesuvios.com<br><br>
     <b>Hours of Operation</b><br>
     Monday 12pm-9pm<br>
     Tuesday 12pm-9pm<br>
     Wednesday 12pm-8pm<br>
     Thursday 12pm-9pm<br>
     Friday 12pm-11pm<br>
     Saturday 12pm-11pm<br>
     Sunday 12pm-6pm`
    div.id = 'contactContainer'
    div.appendChild(contactInfo)
    document.querySelector('#content').appendChild(div)
}

// const createHours = () => {
//     let div = document.createElement('div')
// }

const createContactPage = () => {
    createHeader()
    createBackground()
    createContactInformation()
    createFooter()
}

export { createContactPage }