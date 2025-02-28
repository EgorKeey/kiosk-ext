var extracheck = document.getElementById("enablexbtn");
var hider = document.getElementById("hideonhp");
var accepter = document.getElementById("acceptbtn");

onPageLoad()

extracheck?.addEventListener("change", function(){
  console.log(extracheck.checked);
  if (extracheck.checked){
    addNewButton();
  }
  else{
    return;
  }
  savedCheckBox();
});


function checkboxIs(){
  if (extracheck.checked){
    addNewButton();
  }
  else{
    return;
}
};

function onPageLoad(){
  extracheck.checked=localStorage.getItem("savedcheckbox")
}

function savedCheckBox(){
  localStorage.setItem("savedcheckbox", extracheck.checked);
}

function addNewButton(){
  let div = document.createElement('div');
  div.className = "backbtn";
  div.innerHTML = "<button type=\"button\" id=\"bbtn\">Я кнопка</button>";
  document.body.append(div);
}

function hideHomePage(){
  if (!hideonhp.target.checked){
    acceptbtn.style.visibility='visible';
    return;
  }
  acceptbtn.style.visibility='hidden';
}

  $('.backbtn').click(function(){
  ;
  });
  