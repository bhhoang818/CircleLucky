window.onload = (() => {
    loadingPage();
    showCore();
});
const showCore = () => {
    var x = document.getElementById("core");
    var o = document.querySelector('.show-pass');
    o.addEventListener('click', event => {
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    });
}
const loadingPage = () => {
    var preload = document.querySelector('#loading-container');
    preload.classList.add('preload-finish');
}