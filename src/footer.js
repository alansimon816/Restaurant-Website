const createFooter = () => {
    let f = document.createElement('footer')
    let copyright = document.createElement('div')
    let address = document.createElement('div')
    copyright.innerHTML = "Nuovo Vesuvio © 2021"
    address.innerHTML = "123 Ridge Rd, Lyndhurst, NJ 07071"
    f.appendChild(copyright)
    f.appendChild(address)
    document.querySelector('#content').appendChild(f)
}

export { createFooter }