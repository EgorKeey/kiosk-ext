var hbtntxt = localStorage.getItem("savedhbt");
chrome.runtime.onMessage.addListener
((request, sender, sendResponse)=>
    {
        if (request.action === "addButton"){
            fetch('/json/config.json')
.then(response =>{
    if(!response.ok){
        throw new Error('Network is not answer');
    }
    return response.json();
})
.then(data => {
    const btn = 
    document.createElement('button');
    btn.innerText=hbtntxt.value;
    for (const[key,value] of Object.entries(data.styles)){
        btn.style[key]=value;
    }
    document.body.appendChild(btn);});
}})

