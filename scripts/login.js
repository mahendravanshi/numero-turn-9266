import nav from "./nav.js"
import footer from "./footer.js"

let mainFooter = document.getElementById("footer");
let mainNav = document.getElementById("nav")

mainNav.innerHTML = nav;
mainFooter.innerHTML = footer;

let signArr = JSON.parse(localStorage.getItem("signup"))||[];


let form = document.getElementById("login");

let check = document.getElementById("check");
let password = document.getElementById("password")
check.addEventListener("click",show)

function show(){

    if(password.type=="password"){
        password.type="text"
    }
    else{
        password.type="password";
    }
}


form.addEventListener("submit",formSubmit);


function formSubmit(){
    event.preventDefault();

    let email = form.email.value;
    let pass = form.password.value;

    let isSign = false;
    for(let i=0;i<signArr.length;i++){

        let e = signArr[i].email;
        let p = signArr[i].pass;
        if(e==email&&p==pass){
            isSign = true
            break;
        }

    }

    if(isSign){
        alert("Succesfully logged in");
        window.location.href = "index.html";
        
    }
    else{
        alert("Invalid or Wrong Credentials")
    }
   
    

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