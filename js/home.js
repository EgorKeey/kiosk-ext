const acceptBtn = document.getElementById('acceptbtn');
var btn = document.createElement('button');
homeid = document.getElementById('homepage')
hbtntxt = document.getElementById('homebtntext');
const enablehbcheck = document.getElementById('enablehb');
const isChecked = localStorage.getItem('checkboxState') === 'true'
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
        window.location.href = x;
    }

  function updateAddress(){
    homeid.value = homeid.value;
    hbtntxt.value = hbtntxt.value;
    address = homeid.value;
  }

  function onPageLoad(){
    homeid.value=localStorage.getItem("savedhp");
    hbtntxt.value=localStorage.getItem("savedhbt");
    enablehbcheck.checked = isChecked;
    if(enablehbcheck.checked){
      createHomeButton();
    }
  }

  enablehbcheck.addEventListener('change',function(){
    localStorage.setItem('checkboxState',enablehbcheck.checked);
  });

  function savehp(){
    localStorage.setItem("savedhp", homeid.value);
    localStorage.setItem("savedhbt", hbtntxt.value);
    localStorage.setItem("savedhb",btn);
  }

  function createHomeButton(){
    fetch('/json/config.json')
.then(response =>{
    if(!response.ok){
        throw new Error('Network is not answer');
    }
    return response.json();
})
.then(data => {
    btn.innerText=hbtntxt.value;
    for (const[key,value] of Object.entries(data.styles)){
        btn.style[key]=value;
    }
    document.body.appendChild(btn);});
    localStorage.setItem("savedhb",btn);
  }

  btn.addEventListener('click', ()=>{
    load(address)
  });