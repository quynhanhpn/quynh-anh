var email_list= ['abc@gmail.com',"abcd@gmail.com"];
var password_list = ["123",'456'];

localStorage.setItem("email_list",JSON.stringify(email_list));
localStorage.setItem("password_list",JSON.stringify(password_list));
let form_register = document.querySelector("#form-register");
let register_buttom = document.querySelector("#register_buttom");

function register (){
    let email = document.querySelector("#email").value;
   let password = document.querySelector("#password").value;   

   let email_list = localStorage.getItem("email_list");
   email_list = JSON.parse(email_list);
   let password_list = localStorage.getItem("password_list" );
   password_list = JSON.parse(password_list);

   for( key of email_list) {
       if (email == email_list[key]) {
           alert( "email da ton tai");
           return
       }
       else{
           email_list.push(email);
           console.log(email_list);
           password_list.push(password);
           localStorage.setItem("email_list",JSON.stringify(email_list));
           localStorage.setItem("password_list",JSON.stringify(password_list));
           alert("dang ki thanh cong")
           break
       }
   }
   }
form_register.addEventListener("submit", function(event) {
   event.preventDefault();
   register()
})

function login(){
    var email = document.querySelector(".email").value;
    var password = document.querySelector(".password").value;
    var email_list = localStorage.getItem("email_list");
    email_list = JSON.parse(email_list);

    let password_list = localStorage.getItem("password_list");
    password_list = JSON.parse(password_list);
    
    for(key of email_list){
        if(email == email_list[key] && password == password_list[key]){
            alert("dang nhap thanh cong");
            break
        }
        else{
            alert("dang nhap khong thanh cong");
            break
        }
    }
}

    var form_login = document.querySelector("#form-login");
console.log(form_login);
if(form_login !== ''){
   form_login.addEventListener("submit", function (event){
   event.preventDefault();
   login()
})
}