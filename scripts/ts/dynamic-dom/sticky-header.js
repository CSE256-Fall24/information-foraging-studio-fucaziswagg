

export function stickyHeader() {
    window.onscroll = function() { changeSticky()};

    var header = document.getElementById("main-menu-container");
    var offset = header.offsetTop;
    var topBanner = document.getElementById('mturk-top-banner');
    var topBannerHeight = topBanner.offsetHeight;
       
    function changeSticky() {
        if (window.pageYOffset > offset) {
            header.classList.add('sticky');
            header.style.top = topBannerHeight + 'px';
        }
        else {
            header.classList.remove('sticky');
            header.style.top = 0;
        }
    }
    
}