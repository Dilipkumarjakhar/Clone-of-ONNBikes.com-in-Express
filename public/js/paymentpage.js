let tot=JSON.parse(localStorage.getItem("totalamount"));
    console.log('tot:', tot)
    // let to=[];
  document.getElementById("totalprice").textContent ="₹"+tot;
  document.getElementById("totalprice1").textContent ="₹"+tot;
  document.getElementById("totalprice2").textContent ="₹"+tot;

    let dat=JSON.parse(localStorage.getItem("antim"));
    console.log('dat:', dat)

    document.getElementById("std").textContent =dat[0];
    document.getElementById("endd").textContent =dat[1];

    let bt=JSON.parse(localStorage.getItem("bikedata"));
    console.log('bt:', bt)
document.getElementById("ct").textContent=bt.brand+" "+bt.model;
    function paytm(){
        // alert("");
       let a= prompt("Enter Mobile Number");
         if (a.length == '10') {
            window.location.href = "/otp"

        } else {
             alert("Please Enter a Mobile Number")
         }
    }
    function phonepe(){
        // alert("");
       let a= prompt("Enter Mobile number")
         if (a.length == '10') {
            window.location.href = "/otp"

        } else {
             alert("Please Enter a Mobile Number")
         }
    }
    function mobiKwik(){
        // alert("");
      let a= prompt("Enter Mobile  Number")
    //   console.log('a:', a)
      if(a.length=='10'){
          window.location.href="/otp"

      }
      else{
          alert("Please Enter a Mobile Number")
      }
    }
    document.getElementById("button").addEventListener("click", UPI);
    function UPI(){
        let ip=document.getElementById("upi").value;

        if(ip.length<10){
            alert("Please enter a valid upi")
        }
        else{
            window.location.href="/otp";
        }
    }
    function paycc(){
        // to.push(tot)
       
        window.location.href="/paycc";
    }