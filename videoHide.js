const nav = document.querySelector(".nav"); 
const video = document.querySelector(".video"); 
const hideContainer = document.querySelector(".hide-container"); 

hideContainer.style.top = parseInt(getStyle(nav, "height", "height")) + parseInt(getStyle(video, "height", "height")) + 'px';


function getStyle(elem, cssprop, cssprop2) {

    //IE
    if (elem.currentStyle) {
        return elem.currentStyle[cssprop];

        //다른 브라우저    
    } else if (document.defaultView && document.defaultView.getComputedStyle) {
        return document.defaultView.getComputedStyle(elem, null).getPropertyValue(cssprop2);

        //대비책    
    } else {
        return null;
    }
}

window.addEventListener('resize', function() {
    hideContainer.style.top = parseInt(getStyle(nav, "height", "height")) + parseInt(getStyle(video, "height", "height")) + 'px';
});