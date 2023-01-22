
import nav from "./nav.js"
import footer from "./footer.js"

let queryArr = JSON.parse(localStorage.getItem("query-data"))||[];


let mainFooter = document.getElementById("footer");
let mainNav = document.getElementById("nav")

mainNav.innerHTML = nav;
mainFooter.innerHTML = footer;



// scroll click

let topScroll = document.getElementById("topScroll");
topScroll.addEventListener("click",()=>{
    event.preventDefault();
    window.scroll(0,0);
})

// 
let topSearch = document.getElementById("topSearch");

 
let formQuery = document.querySelector("form");

formQuery.addEventListener("submit",formSubmitQuery);

function formSubmitQuery(){
    event.preventDefault();
    
    let x = {
        query:topSearch.value
    }

    queryArr.push(x);
    localStorage.setItem("query-data",JSON.stringify(queryArr));
    
    window.location.href = "all.html";
}





let cartArr = JSON.parse(localStorage.getItem("trend-cart-key"))||[];
let navCount = document.getElementById("cart-show-nav")

navCount.innerText = cartArr.length;


let container1 = document.querySelector("#container1");
let container2 = document.querySelector("#shop-by-img");
let container3 = document.querySelector("#shop-by-bottom");
let container4 = document.querySelector("#camping-gear");
let container5 = document.querySelector("#exp-cont");
let container6 = document.querySelector("#foot-cont");
let container7 = document.querySelector("#insta-img");
let container8 = document.querySelector("#instaBottom");
let container9 = document.querySelector("#top-brands-div");



let imgArr1 = [
    {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/blt150f1f4a20849850/63c1af3a3431f93ff7f796db/011723_SeizeTheFreeze_Hero_Desktop.jpg?format=pjpg&auto=webp"},
    {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/blt841ddbf5cff952ee/63c6c25b184b72418acdccc2/012423_SeizetheFreeze_HP_03.jpg?format=pjpg&amp;auto=webp&quot"},
    {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/bltc4e25b209e6bfbf4/63c6c25b2cbcfb0454a2b8c5/012423_SeizetheFreeze_HP_03-02.jpg?format=pjpg&auto=webp"},
    {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/blt1d9641f03f54c9ab/63c6c25be97936109ef2bbb5/012423_SeizetheFreeze_HP_07.jpg?format=pjpg&auto=webp"},
    {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/bltec84c0ffa1ec796d/63acacacd517181f0137ce67/122522_HugeClearanceEvent_HP_03.jpg?format=pjpg&auto=webp"}
]

let shopByArr = [
   
    {img:"https://cdn-icons-png.flaticon.com/128/2530/2530005.png",
    text:"SNOW"},
    {img:"https://cdn-icons-png.flaticon.com/128/2491/2491921.png",
    text:"TRAVEL"},
    {img:"https://cdn-icons-png.flaticon.com/128/7247/7247515.png",
    text:"PADDLE"},
    {img:"https://cdn-icons-png.flaticon.com/128/71/71468.png",
    text:"CLIMB"},
    {img:"https://cdn-icons-png.flaticon.com/128/94/94203.png",
    text:"CYCLE"},
]

let shopByBottom = [
    {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/blt13b1e3a031b25dd7/63c6c25b4977081097259e24/012423_SeizetheFreeze_HP_13.jpg?format=pjpg&auto=webp"},
    {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/blt9650c77a5cae5620/63c6c25b08b84c3d9e4c97a7/012423_SeizetheFreeze_HP_13-05.jpg?format=pjpg&auto=webp"},
    {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/blte9464b509027d693/63c6c25cbe10fd14ecb45d6e/012423_SeizetheFreeze_HP_13-06.jpg?format=pjpg&auto=webp"},
]

let campingGear = [
    {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/bltbc78379b9de128d8/63c6c263e192c22e8677196e/012423_SeizetheFreeze_HP_23.jpg?format=pjpg&auto=webp"},
    {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/bltcdc05d36f5f8a31d/63c6c263adb01e2e7b05298c/012423_SeizetheFreeze_HP_26.jpg?format=pjpg&auto=webp"},
    {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/blt3288f446e9f9390b/63c6c263eeda2410c17f4416/012423_SeizetheFreeze_HP_27.jpg?format=pjpg&auto=webp"},
    {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/blt600ddc8ce0206f03/63c6c2639deb3f643ee45f3a/012423_SeizetheFreeze_HP_29.jpg?format=pjpg&auto=webp"}

]

let exp = [
     {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/bltd0e7aba1548eca26/63923ebdbd8730261b83dd0a/121222_HolidaySale_HP_21.jpg?format=pjpg&auto=webp"},
     {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/blta6ad5910f58881f5/623b8816fac4b208fa18846d/032922_MudSeasonMarkdowns_HP_38.jpg?format=pjpg&auto=webp"},
     {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/blt7822756497ee02ed/62606cf47e7b344b253501c1/042622_SpringIntoAdventure_HP_18.jpg?format=pjpg&auto=webp"},
     {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/blt814697382805a42f/62606cf42777714c51b3186c/042622_SpringIntoAdventure_HP_18-06.jpg?format=pjpg&auto=webp"},
     {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/blt4350c72f06ca7aef/63c6c2632cbcfb0454a2b8cb/012423_SeizetheFreeze_HP_37.jpg?format=pjpg&auto=webp"},
     {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/blt3db709ceeb344663/63923ebe7358a234e671e72b/121222_HolidaySale_HP_27.jpg?format=pjpg&auto=webp"},
     {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/blt158515b04ab47a16/623b8817714afc639a7b24a8/032922_MudSeasonMarkdowns_HP_50.jpg?format=pjpg&auto=webp"},
     {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/blt7e8d1eebd0f3c7ff/63923ebec08ef0300c43dbff/121222_HolidaySale_HP_30.jpg?format=pjpg&auto=webp"}
]


let footTerrain = [
    {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/blt05194eae8a64bd21/623b8816e6c8cf4de6f6de10/032922_MudSeasonMarkdowns_HP_57.jpg?format=pjpg&auto=webp"},
    {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/bltb6bebeb3a0bf9671/623b8817fac4b208fa188471/032922_MudSeasonMarkdowns_HP_59.jpg?format=pjpg&auto=webp"},
    {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/blt246c0c75a33ae3d6/623b881d159fc76504c1793c/032922_MudSeasonMarkdowns_HP_60.jpg?format=pjpg&auto=webp"},
    {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/bltf20fc75e723406e5/623b881d714afc639a7b24ac/032922_MudSeasonMarkdowns_HP_62.jpg?format=pjpg&auto=webp"},
    {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/bltfdc82abe260205c0/636296ed9e5b454a7a9eb8ce/110122_BlackFriday_HP_40.jpg?format=pjpg&auto=webp"},
    {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/blt72773666d000f28e/6061d8d10aa89f0eda2772fa/03XX21_NewSeasonSale_HP_42.jpg?format=pjpg&auto=webp"},
    {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/blt2fb359b53e97c3be/623b881e12562208fd9bed85/032922_MudSeasonMarkdowns_HP_69.jpg?format=pjpg&auto=webp"},
    {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/blt9dfeac846c07f8c4/6061d93a0aa89f0eda2772fe/03XX21_NewSeasonSale_HP_45.jpg?format=pjpg&auto=webp"}
]

let instaFollow = [
    {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/bltd420475dd3246267/5ec4394b3a450a58554b6169/EMS_Insta_Logo.jpg?format=pjpg&auto=webp"}
]

let instaBottom = [
    {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/bltb51c87ba00f9737e/63c6c26a21560710c8e88ddb/012423_SeizetheFreeze_HP_59.jpg?format=pjpg&auto=webp"},
    {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/blta93513155f6b66c8/63c6c26aadb01e2e7b052990/012423_SeizetheFreeze_HP_55.jpg?format=pjpg&auto=webp"},
    {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/blt3ca3f79419ec084e/63c6c26ae6cd4a7779d9f654/012423_SeizetheFreeze_HP_43.jpg?format=pjpg&auto=webp"},
    {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/blt19552930aded693f/63c6c2641bb5c94c86d1ce5b/012423_SeizetheFreeze_HP_41-14.jpg?format=pjpg&auto=webp"},
    {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/blt7cd176f36a94072c/63c6c2641779f2026027cb17/012423_SeizetheFreeze_HP_41.jpg?format=pjpg&auto=webp"},
    {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/blt68d7040349fc3b5c/63c6c263cb2b29167d2e54d9/012423_SeizetheFreeze_HP_41-15.jpg?format=pjpg&auto=webp"},
    {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/blt27618af649d3c89a/63c6c25b48ef12105ee3a4b8/011723_SeizeTheFreeze_HP_57.jpg?format=pjpg&auto=webp"},
    {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/blt2e7ac6e4daefaa23/63c6c25b1bb5c94c86d1ce57/011723_SeizeTheFreeze_HP_56.jpg?format=pjpg&auto=webp"}
]

let topBrands = [
    {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/blte1d73c4776030eb9/5e7010ec81bc8343ad1622f2/EMS.png?format=pjpg&auto=webp"},
    {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/blt61e61f7e1fa536c9/5e7010ec6bd5c76d2ce01e47/The_North_Face.png?format=pjpg&auto=webp"},
    {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/blt8b36f1bef2998054/5e7010ec23ff3341c4f5a254/Thule.png?format=pjpg&auto=webp"},
    {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/blt24c0f3726d22ee61/5e7010ec7b615942b99e75a4/SmartWool.png?format=pjpg&auto=webp"},
    {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/blt9782f2364fa467fa/5e7010ec84d2f56d32c68796/Marmot.png?format=pjpg&auto=webp"},
    {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/blt1267d28d9a9726e2/5e7010ec3ed79e6484b30c92/Black_Diamond.png?format=pjpg&auto=webp"},
    {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/blt1a30980bff21a296/5e7010f30aa80a6c6b7d7439/Osprey.png?format=pjpg&auto=webp"},
    {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/bltc5b58ea04f309f94/5e7010f3d56aa8647901fcc3/Merrell.png?format=pjpg&auto=webp"},
    {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/blt392a181a8a877167/5e7010ecbfb1c042abc0c33f/Petzl.png?format=pjpg&auto=webp"},
    {img:"https://images.contentstack.io/v3/assets/blt7841d2a593726d96/blte49658b4fea69fdc/5f760ecce69fa40ef31815d0/TopBrands_Yeti_600x300.png?format=pjpg&auto=webp"}



]






fetchContainer1(imgArr1);
fetchContainer2(shopByArr);
fetchContainer3(shopByBottom)
fetchContainer4(campingGear)
fetchContainer5(exp);
fetchContainer6(footTerrain);
fetchContainer7(instaFollow);
fetchContainer8(instaBottom,container8);
fetchContainer8(topBrands,container9);  //container9


function fetchContainer8(data,container){

    container.innerHTML =null;
    data.forEach(el=>{
       let div = document.createElement("div");

       let img = document.createElement("img");
       img.src = el.img;

       div.append(img);

       container.append(div)
    })
}
function fetchContainer7(data){

    container7.innerHTML =null;
    data.forEach(el=>{

       let img = document.createElement("img");
       img.src = el.img;

       

       container7.append(img)
    })
}
function fetchContainer6(data){

    container6.innerHTML =null;
    data.forEach(el=>{
       let div = document.createElement("div");

       let img = document.createElement("img");
       img.src = el.img;

       div.append(img);

       container6.append(div)
    })
}

function fetchContainer5(data){

    container5.innerHTML =null;
    data.forEach(el=>{
       let div = document.createElement("div");

       let img = document.createElement("img");
       img.src = el.img;

       div.append(img);

       container5.append(div)
    })
}



function fetchContainer4(data){

     container4.innerHTML =null;
     data.forEach(el=>{
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.img;

        div.append(img);

        container4.append(div)
     })
}


function fetchContainer3(data){
    container3.innerHTML = null;
    data.forEach(el=>{
        let div = document.createElement("div");
        

        let img = document.createElement("img");
        img.src=  el.img;

        div.append(img);

        container3.append(div)
    })
}


function fetchContainer2(data){
      container2.innerHTML = null;
    data.forEach(el=>{
         let div = document.createElement("div");
         let img = document.createElement("img");
         img.src = el.img;

         let title = document.createElement("p");
         title.innerText = el.text;

         div.append(img,title);
         container2.append(div);


    })
}



function fetchContainer1(data){
    container1.innerHTML = null;

    data.forEach((el)=>{

        let div = document.createElement("div");

        let img = document.createElement("img");

        img.src = el.img;

        div.append(img);
        container1.append(div);
    })
}


// mens,womens,kids click link


let menCLik = document.querySelector("#shop-by-bottom>div:nth-child(1)")
let womenCLik = document.querySelector("#shop-by-bottom>div:nth-child(2)")
let kidsCLik = document.querySelector("#shop-by-bottom>div:nth-child(3)")

menCLik.addEventListener("click",()=>{
    window.location.href = "mens.html";
})
womenCLik.addEventListener("click",()=>{
    window.location.href = "womens.html";
})
kidsCLik.addEventListener("click",()=>{
    window.location.href = "kids.html";
})






// navbar one"

let logoNav = document.getElementById("logoImg");
let cartNav = document.getElementById("nav-cart");
let signNav = document.getElementById("nav-account");



logoNav.addEventListener("click",()=>{
   window.location.href = "index.html"
})

cartNav.addEventListener("click",()=>{
    window.location.href = "cart.html"
})


signNav.addEventListener("click",()=>{
    window.location.href = "signup.html"
})


