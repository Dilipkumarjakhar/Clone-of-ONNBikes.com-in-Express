document.getElementById("payment").addEventListener("click",showPaymentPage);

    function showPaymentPage(){
        window.location.href='payment page.html';
    }
    let date=JSON.parse(localStorage.getItem("antim"))

   
   


	

    let insuresubmitflag=false;

    let bikedata=JSON.parse(localStorage.getItem("bikedata"));
    console.log(bikedata)

    let brand=document.createElement("h4")
    brand.innerHTML=bikedata.brand.toUpperCase();


    let model=document.createElement("h3")
    model.innerHTML=bikedata.model.toUpperCase();

    let image=document.createElement("img")
    image.src=bikedata.imageurl;

    let pickup=document.createElement("h5")
    pickup.innerHTML="PICKUP & RETURN LOCATION"

    let pickupadd=document.createElement("p")
    pickupadd.innerHTML="Munni Reddy Complex, Varthur Main Road, Opposite Nadhini Wines, Silver Springs Layout, Kundalahalli, Bengaluru - 560066"

    let div=document.createElement("div")

    let p=document.createElement("p")
    p.innerHTML="Late return first two hours of delay ₹100"

    let extradetails=document.createElement("h5")
    extradetails.innerHTML=`75 Km/hr || 406 Kms free || Excess ₹${bikedata.excessFee}/Km`
    div.append(p,extradetails)

    let latefine=document.createElement("h6")
    latefine.innerHTML="₹ 8 per hour after first two hours of delay"

    document.getElementById("left-child").append(brand,model,image,pickup,pickupadd,div,latefine)



    document.getElementById("startdate").innerHTML=date[0]
    document.getElementById("enddate").innerHTML=date[1]

    document.getElementById("price").innerHTML=bikedata.price*date[2]

    document.getElementById("totalamount").innerHTML=bikedata.price*date[2]


    let totalamount=bikedata.price*date[2]
    localStorage.setItem("totalamount",totalamount)

   
    



    function insure()
    {
        let btn=document.getElementById("insuresubmit")
        if(insuresubmitflag==false)
        {
            btn.classList.add('active')
            insuresubmitflag=true;
            document.getElementById("insuremoney").innerHTML="₹19"
            document.getElementById("totalamount").innerHTML=bikedata.price*date[2] +19
            totalamount=bikedata.price*date[2]+19
            localStorage.setItem("totalamount",totalamount)


        }
        else
        {
            btn.classList.remove('active')
            insuresubmitflag=false;
            document.getElementById("insuremoney").innerHTML=null
            document.getElementById("totalamount").innerHTML=bikedata.price*date[2]
            totalamount=bikedata.price*date[2]
            localStorage.setItem("totalamount",totalamount)

        }
        
    }

    function activatepayment()
    {
        let inp=document.getElementById("tcvalue")

        if(inp.checked==true)
        {
            document.querySelector("#buttonpayment").classList.add('activebutton')
            document.getElementById("buttonpayment").innerText=`PAYMENT ${totalamount}`
            
        }
        else
        {
            document.querySelector("#buttonpayment").classList.remove('activebutton')
        }
    }