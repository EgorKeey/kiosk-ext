const acceptBtn = document.getElementById('acceptbtn');
var homebutton = document.createElement('button');
homeid = document.getElementById("homepage")
hbtntxt = document.getElementById("homebtntext");
let address;
onPageLoad();


acceptBtn.addEventListener('click', function() {
  if (homeid.value == ''){
    savehp();
    return;
  }
  updateAddress();
  savehp();
  createHomeButton();
});

function load(x)
    {
        document.location.href = x;
    }

  function updateAddress(){
    homeid.value = homeid.value;
    hbtntxt.value = hbtntxt.value;
    address = homeid.value;
  }

  function onPageLoad(){
    homeid.value=localStorage.getItem("savedhp");
    hbtntxt.value=localStorage.getItem("savedhbt");
  }

  function savehp(){
    localStorage.setItem("savedhp", homeid.value);
    localStorage.setItem("savedhbt", hbtntxt.value);
  }

  function createHomeButton(){
    homebutton.innerText = hbtntxt.value;
    homebutton.style.position = 'fixed';
    homebutton.style.bottom = '20px';
    homebutton.style.right = '20px';
    homebutton.style.zIndex = '1000';
    homebutton.style.padding = '10px';

    localStorage.setItem('homeButtonData', JSON.stringify({
      text: homebutton.innerText,
      styles:{
        position: homebutton.style.position,
        bottom: homebutton.style.bottom,
        right: homebutton.style.right,
        zIndex: homebutton.style.zIndex,
        padding: homebutton.style.padding
      }
    }));
    document.body.appendChild(homebutton);
  }

  homebutton.addEventListener('click', ()=>{
    load(address)
  });