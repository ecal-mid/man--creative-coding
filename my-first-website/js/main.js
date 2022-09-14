// "() => {}" same as "function() {}"

window.onload = () => { // anonymous function
    addAnimationTrigger()
}

window.onclick = () => {
    let imageContainer = document.querySelector('#imageContainer');
    let elem = document.createElement("img");
    elem.src = "./assets/image-17.jpg";            // image.src = "IMAGE URL/PATH"
    imageContainer.appendChild(elem);

    window.scrollTo(0, document.body.scrollHeight);
}

// same as
// window.addEventListener('load', () => {
//     addAnimationTrigger()
// })

function addAnimationTrigger() {
    const elem = document.querySelector('.margins.smallArticle.shadow')
    // console.log(elem);
    // const elem = document.querySelector('#specialArticle');

    elem.onclick = () => {
        elem.classList.remove("turningAnimation");
        setTimeout(() => {
            console.log('add class');
            elem.classList.add("turningAnimation");
        });
        console.log('remove class');
    }
}

