let tot = JSON.parse(localStorage.getItem("totalamount"));
console.log('to:', tot)
document.getElementById("price").textContent="Total To Pay" +" "+tot;
function submit(){
    let name=document.getElementById("name").value;
    let card=document.getElementById("cardNumber").value;
    // let date=document.getElementById("date").value;
    let cvv=document.getElementById("cvv").value;

    if(name==""){
        alert("plaese enter name");
    }
   else if(card.length!=16){
        alert("please enter a valid cardNumber");
    }
    else if(cvv.length!=3){
        alert("please enter a valid cvv number");
    }
    else{

        window.location.href="/otp";
    }
    
}