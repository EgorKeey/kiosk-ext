var extracheck = document.getElementById("enablexbtns");
var hider = document.getElementById("hideonhp");
var accepter = document.getElementById("acceptbtn");

onPageLoad()

extracheck?.addEventListener("change", function(){
  if (extracheck.checked){
    addNewButtonSettings();
  }
  else{
    return;
  }
  // updateCheckbox();
  // savedCheckBox();
});

function updateCheckbox(){

}

function onPageLoad(){
  
}

function savedCheckBox(){
  localStorage.setItem("savedcheckbox", extracheck);
}

function addNewButtonSettings(){
  let br = document.createElement('br');
  let div = document.createElement('div');
  div.className = "backbtn";
  div.innerHTML = "<h2>Настройка кнопки</h2><button type=\"button\" id=\"bbtn\">Я кнопка</button>";
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

  