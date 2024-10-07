const urlParam=window.location.search

const params= new URLSearchParams(urlParam);
//urlimdeki parametre değerim 
const urlid=params.get("id");
const outlet=document.getElementById("outlet");

document.addEventListener("DOMContentLoaded", async()=>{

    const respons= await fetch("./db.json");
    const data = await respons.json();
    
   const product= data.menu.find((item)=>item.id==urlid); //ürün info 

   if(!product){
    failRender();
   }else{
renderDetail(product);
   }
})


const renderDetail=(product)=>{
outlet.innerHTML=`
<div class="d-flex justify-content-between fs-6">
<a href="/">
          <img width="35px"  src="/images/home.png" />
        </a>

        <p>anasayfa / ${product.category} / ${product.title.toLowerCase()}</p>
      </div>

      <h1 class="text-center my-4">${product.title}</h1>

      <img
        src="${product.img}"
        style="max-height: 300px;"
        class="rounded object-fit-cover shadow"
      />

      <h4 class="mt-4">
        <span>Ürünün Kategorisi: </span>
        <span class="text-success">${product.category}</span>
      </h4>

      <h4 class="mt-4">
        <span>Ürünün Fiyatı: </span>
        <span class="text-success">${(product.price*30).toFixed(2)}₺</span>
      </h4>

      <p class="lead">
        ${product.desc}
      </p>

      </div>
      `
}



const failRender=()=>{
    outlet.innerHTML=`
    <div class="d-flex flex-column vh-100 ">
   
    <img class="img-fluid" src="/images/404.png" style="width:400px; height:200px; margin-left:200px;margin-top:100px;">
     <h5 class="text-center">Üzgünüz Aradığınız Ürün Bulunamadı </h5>
    <a class="text-center" href="/">Anasayfaya Dön </a>
    </div>
    
    `
}
