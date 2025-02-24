const homeBtn = document.getElementById('acceptbtn');
homeid = document.getElementById("homepage")
let address;
onPageLoad();


homeBtn.addEventListener('click', function() {
  if (homeid.value == ''){
    savehp();
    return;
  }
  updateAddress();
  savehp();
  load(address);
});

function load(x)
    {
        document.location.href = x;
    }

  function updateAddress(){
    homeid.value = homeid.value;
    address = homeid.value;
  }

  function onPageLoad(){
    homeid.value=localStorage.getItem("savedhp")
  }

  function savehp(){
    localStorage.setItem("savedhp", homeid.value);
  }
