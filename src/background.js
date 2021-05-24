const createBackground = () => {
    let div = document.createElement('div')
    let img = document.createElement('img')
    div.id = 'homeImageContainer'
    img.src = '../dist/images/backgroundForSplashPage.jpg'
    img.id = 'homeImage'
    div.appendChild(img)
    document.querySelector('#content').appendChild(div)
}

export {createBackground}