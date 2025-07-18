window.addEventListener('scroll', scrolls);
function scrolls() {
    let scrolls = document.querySelectorAll('.scrolls')
    for (let i = 0; i < scrolls.length; i++) {
        let winheight =window.innerHeight;
        let scrollstop = scrolls[i].getClientRects().top;
        let scrollspoint = 150;
        if (scrollstop < winheight - scrollspoint) {
            scrolls[i].classList.add('active')
        }
        else{
            scrolls[i].classList.remove('active')

        }
    }
}