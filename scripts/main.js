import { renderCard } from "./ui.js";
let data;

window.addEventListener("DOMContentLoaded",()=>{
    fetchApi().then(()=> renderCard(data.menu));

});


// api isteği

const fetchApi= async ()=>{
    const response= await fetch("./db.json");
    data= await response.json();
    
};

const btns= document.querySelectorAll("#buttons input");

btns.forEach((btn)=>{
btn.addEventListener("change",()=>{
    if(btn.id=="all"){
        renderCard(data.menu);
    }else{
        const newarray= data.menu.filter((item)=>item.category==btn.id);
        renderCard(newarray);
    }
});
})








