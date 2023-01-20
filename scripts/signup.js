import nav from "./nav.js"
import footer from "./footer.js"

let mainFooter = document.getElementById("footer");
let mainNav = document.getElementById("nav")

mainNav.innerHTML = nav;
mainFooter.innerHTML = footer;

let signArr = JSON.parse(localStorage.getItem("signup"))||[];


let form = document.getElementById("signup");

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



form.addEventListener("submit",formSubmit)

function formSubmit(){

    event.preventDefault();

    let fname = form.fname.value;
    let lname = form.lname.value;
    let email = form.email.value;
    let pass = form.password.value;


    let obj = {
        email:email,
        pass:pass
    }

    signArr.push(obj);

    localStorage.setItem("signup",JSON.stringify(signArr))

    alert("Successfully signed in now  login to proceed ")
   window.location.href = "login.html";


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