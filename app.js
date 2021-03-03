function updateObject() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1').then(res => res.json()).then(
        res => {
            let spaceObject = res[0];
            let title = document.getElementById('image-title')
            let desc = document.getElementById('image-desc')
            let image = document.getElementById('image')

            title.innerText = spaceObject.title;
            desc.innerText = spaceObject.explanation;
            image.src = spaceObject.hdurl;
        }
    )
}

document.getElementById("new-button").addEventListener('click', updateObject)

window.onload = updateObject;