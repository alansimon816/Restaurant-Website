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

const createImage = () => {
    let div = document.createElement('div')
    let img = document.createElement('img')
    div.id = 'homeImageContainer'
    img.src = '../dist/images/backgroundForSplashPage.jpg'
    img.id = 'homeImage'
    div.className = 'fill'
    div.appendChild(img)
    document.querySelector('#content').appendChild(div)
}

const createReviews = () => {
    let reviews = document.createElement('div')
    let review1 = document.createElement('p')
    let review2 = document.createElement('p')

    reviews.id = 'reviews'
    review1.id = 'review1'
    review2.id = 'review2'
    review1.innerHTML = 
    `★	★	★	★	★	<br>
    Vesuvio's blew me away with their rich, layered lasagna. I've never had
    anything like it! I highly recommend this restaurant to anyone that wants
    the finest Italian dining experience possible on the East Coast!<br>
    - Emily Bentega via Yelp, 2021`
    review2.innerHTML =
    `★	★	★	★	★<br>
    I love Vesuvio's sliced gabagool as an appetizer. It always tastes fresh
    and my family loves it! It pairs very well with the large selection of 
    fancy wines they have available. Oh, and do yourself a favor and try their
    Rosemary Mushroom Risotto... It's to die for!<br>
                                            - Ken M via Google Reviews, 2021`
    reviews.append(review1, review2)
    document.querySelector('#content').appendChild(reviews) 

}

const createLogos = () => {
    let logos = document.createElement('div')
    let grubHubImg = document.createElement('img')
    let grubHub = document.createElement('a')
    let uberEatsImg = document.createElement('img')
    let uberEats = document.createElement('a')
    let doorDashImg = document.createElement('img')
    let doorDash = document.createElement('a')

    grubHub.href = 'https://www.grubhub.com/'
    uberEats.href = 'https://www.ubereats.com/'
    doorDash.href = 'https://www.doordash.com/'
    logos.id = 'logos'
    grubHub.id = 'grubhub'
    uberEats.id = 'ubereats'
    doorDash.id = 'doordash'
    grubHubImg.id = 'grubhub-img'
    uberEatsImg.id = 'ubereats-img'
    doorDashImg.id = 'doordash-img'
    grubHubImg.src = '../dist/images/grubHub.jpg'
    uberEatsImg.src = '../dist/images/uberEats.png'
    doorDashImg.src = '../dist/images/doorDash.jpg'
    grubHub.appendChild(grubHubImg)
    uberEats.appendChild(uberEatsImg)
    doorDash.appendChild(doorDashImg)
    logos.append(grubHub, uberEats, doorDash)
    document.querySelector('#content').appendChild(logos)
}

const createHomePage = () => { 
    createHeader()
    createImage()
    let div = document.querySelector('#content')
    let h1 = document.createElement('h1')
    let h2 = document.createElement('h2')
    h1.innerHTML = "Nouvo Vesuvio"
    div.appendChild(h1)
    h2.innerHTML = "Italian delicacies served to you on a silver platter."
    div.appendChild(h2)
    createDescription()
    createReviews()
    createLogos()
    createFooter() 
}

export {createHomePage};