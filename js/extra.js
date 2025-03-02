var extracheck = document.getElementById("enablexbtns");
var hider = document.getElementById("hideonhp");
var accepter = document.getElementById("acceptbtn");

onPageLoad()

extracheck?.addEventListener("change", function(){
  if (extracheck.checked){
    addNewButton();
  }
  else{
    return;
  }
  savedCheckBox();
});

function onPageLoad(){
  extracheck.checked=localStorage.getItem("savedcheckbox")
}

function savedCheckBox(){
  localStorage.setItem("savedcheckbox", extracheck);
}

function addNewButton(){
  let br = document.createElement('br');
  let div = document.createElement('div');
  div.className = "backbtn";
  div.innerHTML = "<button type=\"button\" id=\"bbtn\">Я кнопка</button>";
  document.body.append(br);
  document.body.append(div);
}

function hideHomePage(){
  if (!hideonhp.target.checked){
    acceptbtn.style.visibility='visible';
    return;
  }
  acceptbtn.style.visibility='hidden';
}

  