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
    createFooter() 
}

export {createHomePage};