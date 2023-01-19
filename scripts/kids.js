
let topSearch = document.getElementById("topSearch");
let form = document.querySelector("form");



let fetchedArr = [];

let container1 = document.getElementById("container")
let url = "http://localhost:8080/kids?";
let url2 = "http://localhost:8080/kids?_sort=price&_order=asc";
let url3 = "http://localhost:8080/kids?_sort=price&_order=desc";
fetchData(url);



let filterPrice = document.getElementById("filter-price");

filterPrice.addEventListener("change",filterPriceFun);

function filterPriceFun(){

    if(filterPrice.value==""){
        fetchData(url)
    }

    if(filterPrice.value=="asc"){
        fetchData(url2)
    }
    if(filterPrice.value=="desc"){
        fetchData(url3)
    }

}

form.addEventListener("submit",formSubmit);

function formSubmit(){
    event.preventDefault();
    let x = topSearch.value;

    let url = `http://localhost:8080/kids?q=${x}`;
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
        img.src = el.img;

        let title = document.createElement("p");
        title.innerText = el.title1;

        let title2 = document.createElement("p");
        title2.innerText = el.title2;

        let price = document.createElement("p");
        price.innerText = el.price;

        let add_to_cart = document.createElement("button");
        add_to_cart.innerText = "Add to Cart"
        // add_to_cart


        div.append(img,title,title2,price,add_to_cart);
        container.append(div)


    })
}