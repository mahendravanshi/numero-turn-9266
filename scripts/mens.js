
import nav from "./nav.js"
import footer from "./footer.js"

let mainFooter = document.getElementById("footer");
let mainNav = document.getElementById("nav")

mainNav.innerHTML = nav;
mainFooter.innerHTML = footer;


let cartArr = (JSON.parse(localStorage.getItem("cartLS"))) ||[];
console.log(cartArr)

let topSearch = document.getElementById("topSearch");
let form = document.querySelector("form");
let total = document.querySelector("#total");




let fetchedArr = [];

let container1 = document.getElementById("container")
let url = "http://localhost:8080/mens?";
let url2 = "http://localhost:8080/mens?_sort=price&_order=asc";
let url3 = "http://localhost:8080/mens?_sort=price&_order=desc";

fetchData(url);



let filterPrice = document.getElementById("filter-price");

filterPrice.addEventListener("change",filterPriceFun);

function filterPriceFun(){

    if(topSearch.value!=""){
     
        
          
        
    

                if(filterPrice.value==""){
                    fetchData(url)
                }

                if(filterPrice.value=="asc"){
                    let url2 = `http://localhost:8080/mens?_sort=price&_order=asc&q=${topSearch.value}`
                    console.log("INSIDE")
                    fetchData(url2)
                }
                if(filterPrice.value=="desc"){
                    let url3 = `http://localhost:8080/mens?_sort=price&_order=desc&q=${topSearch.value}`

                    fetchData(url3)

                }

    }

    else{

        if(filterPrice.value==""){
            fetchData(url)
        }

        if(filterPrice.value=="asc"){
            let url2 = "http://localhost:8080/mens?_sort=price&_order=asc";
            fetchData(url2)

        }

        if(filterPrice.value=="desc"){
            let url3 = "http://localhost:8080/mens?_sort=price&_order=desc";
            fetchData(url3)
        }
    }

}

form.addEventListener("submit",formSubmit);

function formSubmit(){
    event.preventDefault();
    let x = topSearch.value;

    let url = `http://localhost:8080/mens?q=${x}`;
    fetchData(url)


}




async function fetchData(url){

    let res = await fetch(url);

    let data = await res.json();

    // console.log(data)

    fetchedArr = data;

    displayData(data);
}



function displayData(data){
   
    container1.innerHTML = null;

    data.forEach((el,i)=>{
 
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.img1;

        let title1 = document.createElement("h4");
        title1.innerText = el.title;

        let title2 = document.createElement("p");
        title2.innerText = el.title2;

        let price = document.createElement("p");
        price.innerText = el.price;

        let obj = {
            img:el.img1,
            title1:el.title,
            title2:el.title2,
            price:+(el.price),

        }

        let add = document.createElement("button");
        add.innerText = "Add to Cart"
        // add_to_cart

        

        add.addEventListener("click",()=>{
            
            if(checkData(obj)){
                alert("Product already in cart");
            }

            else{
                cartArr.push({...obj,quantity:1});
                // console.log(cartArr)

                localStorage.setItem("cartLS",JSON.stringify(cartArr))
                alert("Product added to cart")
            }
             
        })








        div.append(img,title1,title2,price,add);
        container.append(div)


        total.innerText = data.length;


    })
}


function checkData(obj){

    for(let i=0;i<cartArr.length;i++){
        if(cartArr[i].title1==obj.title1&&cartArr[i].price==obj.price){
            // console.log(obj)
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