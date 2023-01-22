
import nav from "./nav.js"
import footer from "./footer.js"

let mainFooter = document.getElementById("footer");
let mainNav = document.getElementById("nav")

mainNav.innerHTML = nav;
mainFooter.innerHTML = footer;

let img = document.createElement("img");
img.setAttribute("class","loader");

let topScroll = document.getElementById("topScroll");
topScroll.addEventListener("click",()=>{
    event.preventDefault();
    window.scroll(0,0);
})

let cartArr = (JSON.parse(localStorage.getItem("trend-cart-key"))) ||[];
// console.log(cartArr)
let navCount = document.getElementById("cart-show-nav")
navCount.innerText= cartArr.length;


let filterPrice = document.getElementById("filter-price");

let topSearch = document.getElementById("topSearch");
let form = document.querySelector("form");
let total = document.querySelector("#total");




let fetchedArr = [];

let container1 = document.getElementById("container")
let url = "https://numero-backend.vercel.app/kids?";
let url2 = "https://numero-backend.vercel.app/kids?_sort=price&_order=asc";
let url3 = "https://numero-backend.vercel.app/kids?_sort=price&_order=desc";

let isLoader = true;


fetchData(url);




filterPrice.addEventListener("change",filterPriceFun);

function filterPriceFun(){

    if(topSearch.value!=""){
       
        if(filterPrice.value==""){
            fetchData(url)
        }

        if(filterPrice.value=="asc"){
            let url2 = `https://numero-backend.vercel.app/kids?_sort=price&_order=asc&q=${topSearch.value}`
            console.log("INSIDE")
            fetchData(url2)
        }
        if(filterPrice.value=="desc"){
            let url3 = `https://numero-backend.vercel.app/kids?_sort=price&_order=desc&q=${topSearch.value}`

            fetchData(url3)

        }

    }

    else{

        console.log("inside else ")
        if(filterPrice.value==""){
            fetchData(url)
        }

        if(filterPrice.value=="asc"){
            let url2 = "https://numero-backend.vercel.app/kids?_sort=price&_order=asc";
            fetchData(url2)

        }

        if(filterPrice.value=="desc"){
            let url3 = "https://numero-backend.vercel.app/kids?_sort=price&_order=desc";
            console.log("descending");
            fetchData(url3)

        }
     }


}

form.addEventListener("submit",formSubmit);

function formSubmit(){
    event.preventDefault();
    let x = topSearch.value;

    let url = `https://numero-backend.vercel.app/kids?q=${x}`;
    fetchData(url)


}




async function fetchData(url){

    try {
        if(isLoader){
        
            // img.src = "https://img.freepik.com/free-icon/waiting_318-541180.jpg?size=338&ext=jpg&ga=GA1.1.1919601102.1674298651&semt=sph"
            img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVLETmYH1vvT-g6wLKLiX2qRw-laLp1c9DeQ&usqp=CAU"
            container1.append(img)
            // container1.innerText = "fetching"
        }
        let res = await fetch(url);
    
        let data = await res.json();
    
        
    
        fetchedArr = data;
        
        isLoader = false;
        if(!isLoader){
    
            displayData(data);
        }
    } catch (error) {
        console.log(error)
    }
}



function displayData(data){
   
    container1.innerHTML = null;

    data.forEach((el,i)=>{
 
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.img;

        let title1 = document.createElement("h4");
        title1.innerText = el.title1;

        let title2 = document.createElement("p");
        title2.innerText = el.title2;

        let price = document.createElement("p");
        price.innerText = el.price;

        let add = document.createElement("button");
        add.innerText = "Add to Cart"
        // add_to_cart

        add.addEventListener("click",()=>{
            
            if(checkData(el)){
                alert("Product already in cart");
            }

            else{
                cartArr.push({...el,quantity:1});
                // console.log(cartArr)
                navCount.innerText = cartArr.length;
                 
                localStorage.setItem("trend-cart-key",JSON.stringify(cartArr))
                alert("Product added to cart")
            }
             
        })


        div.append(img,title1,title2,price,add);
        container.append(div)


        total.innerText = data.length;



    })
}


function checkData(el){

    for(let i=0;i<cartArr.length;i++){
        if(cartArr[i].title1==el.title1&&cartArr[i].price==el.price){
            // console.log(el)
            return true
        }
    }

    return false;
}














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