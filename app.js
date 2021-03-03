function updateObject() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=lTE751UXmg73sa2nd1kAQwZyznTxgkMCaH6gbsW8&count=1').then(res => res.json()).then(
        res => {
            let spaceObject = res[0];
            let title = document.getElementById('image-title')
            let desc = document.getElementById('image-desc')
            let image = document.getElementById('image')

            title.innerText = spaceObject.title;
            desc.innerText = spaceObject.explanation;
            image.src = spaceObject.hdurl;
            image.alt = spaceObject.title;
        }
    )
}

document.getElementById("new-button").addEventListener('click', updateObject)

window.onload = updateObject;