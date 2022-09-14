// "() => {}" same as "function() {}"

window.onload = () => { // anonymous function
    addAnimationTrigger()
}

// same as
// window.addEventListener('load', () => {
//     addAnimationTrigger()
// })

function addAnimationTrigger() {
    const elem = document.querySelector('.margins.smallArticle.shadow')
    console.log(elem);
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

