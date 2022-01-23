function otp(){
    document.getElementById("li").textContent="Otp sent Successfuly"
    document.getElementById("li").textContent="please enter otp 12345"
    document.getElementById("li").style.display="inline-block"
   

 }
 function sub(){
         let otp=document.getElementById("input").value;

         if(otp!=12345){
             alert("please Enter a valid otp?")
         }
         else{
             window.location.href='/thanks';
         }
 }