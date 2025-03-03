const homeButtonData = JSON.parse(localStorage.getItem('homeButtonData'));
var homebutton = document.createElement('button');
    homebutton.innerText = homeButtonData.text;
    document.body.appendChild(homebutton);
    homebutton.style.position = homeButtonData.style.position;
    homebutton.style.bottom = homeButtonData.style.bottom;
    homebutton.style.right = homeButtonData.style.right;
    homebutton.style.zIndex = homeButtonData.style.zIndex;
    homebutton.style.padding = homeButtonData.style.padding;

document.body.appendChild(homebutton);
