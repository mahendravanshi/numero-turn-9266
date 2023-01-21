import nav from "./nav.js"
import footer from "./footer.js"

let mainFooter = document.getElementById("footer");
let mainNav = document.getElementById("nav")

mainNav.innerHTML = nav;
mainFooter.innerHTML = footer;

let container = document.getElementById("cart-container");
let totalLength = document.getElementById("total-length");
let total = document.getElementById("totalPrice")











let cartArr = (JSON.parse(localStorage.getItem("cartLS"))) ||[];
let checkArr = JSON.parse(localStorage.getItem("check-form"))||[];

// console.log(cartArr)


displayData(cartArr);


function displayData(data){
    container.innerHTML = null;

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


        let inc = document.createElement("button");
        inc.innerText= "+";

        let quantity = document.createElement("span");
        quantity.innerText = el.quantity;

        let dec = document.createElement("button");
        dec.innerText= "-";

        inc.addEventListener("click",()=>{
           el.quantity++;
           localStorage.setItem("cartLS",JSON.stringify(cartArr));
           displayData(cartArr);
        })

        dec.addEventListener("click",()=>{
           if(el.quantity>1){
             el.quantity--;
           localStorage.setItem("cartLS",JSON.stringify(cartArr));
           displayData(cartArr);
             
           }
        })

        let del = document.createElement("button");
        del.innerText = "Remove"
        // add_to_cart

        

        del.addEventListener("click",()=>{
            
            cartArr = cartArr.filter((element,index)=>{
                if(el.title1!=element.title1&&el.price!=element.price){
                    return true;
                }
                else{
                    return false
                }
            })

            localStorage.setItem("cartLS",JSON.stringify(cartArr))
            displayData(cartArr);
            window.location.reload();
             
        })

        let div1 = document.createElement("div");

              div1.setAttribute("class","rem");
              div1.append(dec,quantity,inc,del)

        div.append(img,title1,title2,price,div1);
        container.append(div)


        totalLength.innerText = cartArr.length;
        let x  = cartArr.reduce((acc,el)=>{
            return acc+(el.quantity*el.price);
            
       },0)

       total.innerText = x.toFixed(1)


    })



}

let x = checkArr[checkArr.length-1].data;
console.log(x);

let form = document.getElementById("cform");
form.addEventListener("submit",formData)


function formData(){

    event.preventDefault();

    let obj = {
        data:`Dear ${form.fname.value} your order will be delivered to your address : ${form.address.value} , ${form.state.value},${form.pin.value} within 5-6 working days.`
    }

    checkArr.push(obj);

    localStorage.setItem("check-form",JSON.stringify(checkArr));



    window.location.href = "checkout.html"



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