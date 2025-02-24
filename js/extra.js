const extracheck = document.getElementById("enablexbtn");
const extracheck = document.getElementById("hideonhp");
const extracheck = document.getElementById("acceptbtn");

if(enablexbtn.checked!=true)
{
  return;
}


function addNewButton(){
  if (!extracheck.target.checked){
    return;
  }
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
