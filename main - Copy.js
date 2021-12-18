function loadjson(file,callback){
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){ 
        if(xhr.readyState===4 && xhr.status=="200"){
            callback(xhr.responseText);
        }
    }; 
    xhr.send(null);
} 
loadjson("data.json",function(text){
    var r =JSON.parse(text); 
    console.log(r); 
    display(r.cards)
}) 

function display(mb){ 
    var deck=document.querySelector(".card-deck")
console.log(deck) 

for(var i in mb){
    // console.log(mb[i].name) 
    var caddiv=document.createElement("div")
    caddiv.classList.add("card")
    var cadimg=document.createElement("img")
    console.log(cadimg)
    cadimg.src=mb[i].img
    // console.log(cadimg) 
    deck.appendChild(cadimg) 
    deck.appendChild(caddiv) 


    var Cname=document.createElement("h2") 
    Cname.textContent=mb[i].name;
    caddiv.appendChild(Cname)

var Cprice=document.createElement("h2")
Cprice.textContent=m[i].price; 
caddiv.appendChild(Cprice)  



}


}