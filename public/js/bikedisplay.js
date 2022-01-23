let data;
getdata();
async function getdata()
{
    let response=await fetch("/bike")
    data=await response.json();
    console.log(data)
    displaydata(data)
}
console.log(data)



let brand=[];
let brandnewdata=[];

let vehicletype=[];
let vehicletypedata=[];

let closebtn=document.querySelector(".close-btn")
let popup=document.querySelector("#popup")

let date=JSON.parse(localStorage.getItem("antim"));

function displaydata(data)
{
    data.map((item)=>
    {
        
        let div=document.createElement("div");

        let img=document.createElement("img");
        img.src=item.imageurl;

        let bikename=document.createElement("h5");
        bikename.innerHTML=`${item.brand} ${item.model}`

        let excess=document.createElement("p");
        excess.innerHTML=`Free-300Kms &nbsp;&nbsp;&nbsp;Excess ₹${item.excessFee}/Km`

        let innerdiv=document.createElement("div");

        let price=document.createElement("h3");
        price.innerHTML=`₹${item.price*date[2]}`

        let button=document.createElement("button");
        button.innerText="BOOK NOW"
		button.addEventListener("click",()=>
		{
			getpopup(item)
		})

        innerdiv.append(price,button);

        div.append(img,bikename,excess,innerdiv)
        document.getElementById("bikediv").append(div)

    })
}


let bikeCheckboxes=document.querySelectorAll(".brand")



bikeCheckboxes.forEach((checkbox)=>
{
	checkbox.addEventListener('change',()=>
    {
        brand=Array.from(bikeCheckboxes).filter(i=> i.checked).map(i => i.value)

        displayfilteredbrand(brand);
    })
})


function displayfilteredbrand(brand)
{
	document.getElementById("bikediv").innerHTML=null

	if(brand.length==0)
	{
		displaydata(data)
	}
	for(let i=0;i<brand.length;i++)
	{
		let item=brand[i];

		brandnewdata=data.filter((ele)=>
		{
			return ele.brand==item;
		})

		displaydata(brandnewdata)
		
	}
	
}

let vehicletypecheckboxes=document.querySelectorAll(".vehicletype");


vehicletypecheckboxes.forEach((checkbox)=>
{
	checkbox.addEventListener('change',()=>
    {
        vehicletype=Array.from(vehicletypecheckboxes).filter(i=> i.checked).map(i => i.value)

        displayfilteredtype(vehicletype);
    })
})


function displayfilteredtype(vehicletype)
{
	
	document.getElementById("bikediv").innerHTML=null

    if(vehicletype.length==0)
	{
		displaydata(data)
	}
	
	
		for(let i=0;i<vehicletype.length;i++)
		{
			
		let item=vehicletype[i];

		vehicletypedata=data.filter((ele)=>
		{
			return ele.type==item;
		})

		displaydata(vehicletypedata)
		}
	
}

function removecheck()
{
	console.log("hello")

	
}

let itemid;
function getpopup(item)
{ 
	localStorage.setItem("bikedata",JSON.stringify(item));
	itemid=item._id;
	console.log(itemid)
	
	
	
	
	popup.classList.add('active');
}


closebtn.addEventListener("click",()=>
{
	popup.classList.remove('active')
})

function gotodetails()
{
	let link=`/bikedetails/${itemid}`
	window.location.href=link;


	
}


	