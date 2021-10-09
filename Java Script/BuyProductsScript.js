

//Arrays used
let hotelPrices = [19, 19, 120, 206, 75, 33, 28, 35, 200, 15, 20, 30];
let hotelNames = ["Paved-path", "King Room", "Villa Arali", "Moonstone Villa", "Kikili beach", "Banyan Camp", "Girankiththa Eco", "Mercedes Lodge", "Maxporter trunk", "Pack Organizer", "Multi tool", "Neck Pillow"];
let cartPrices = [];

//Array initializing
for(let i=0; i<12; i++)
{
    cartPrices[i] = 0;
}

//clear cart function
function clearCart()
{
    for(let i=0; i<12; i++)
    {
        let displayNull = "price" + (i);
        document.getElementById(displayNull).innerHTML = "";
        document.getElementById("totalbill").innerHTML = "Your cart is empty";
        cartPrices[i] = 0;
    }
}

//getting the selected quantity from drop downs
function getSelectedValue(selectList)
{
    return selectList[selectList.selectedIndex].value;
}

//item 0
function checkOptions0(formData)
{
    let selectedOption = getSelectedValue(formData.datecount0);
    let i=0;
    let displayParaId = "price" + (i);
    alert("Booking added to the cart!  "+" For "+selectedOption+" nights");
    if(selectedOption==="1")
    {
        document.getElementById(displayParaId).innerHTML = "Booking charge for : "+ hotelNames[i] +"<br>  Booking price  :  $"+hotelPrices[i] + "<br>" + selectedOption+" Night";
        cartPrices[i] = (hotelPrices[i]);
    }
    else if(selectedOption==="2")
    {
        document.getElementById(displayParaId).innerHTML = "Booking charge for : "+ hotelNames[i] +"<br>  Booking price  :  $"+hotelPrices[i]*2 + "<br>" + selectedOption+" Nights";
        cartPrices[i] = (hotelPrices[i]*2);
    }
    else if(selectedOption==="3")
    {
        document.getElementById(displayParaId).innerHTML = "Booking charge for : "+ hotelNames[i] +"<br>  Booking price  :  $"+hotelPrices[i]*3 + "<br>" + selectedOption+" Nights";
        cartPrices[i] = (hotelPrices[i]*3);
    }
    else if(selectedOption==="4")
    {
        document.getElementById(displayParaId).innerHTML = "Booking charge for : "+ hotelNames[i] +"<br>  Booking price  :  $"+hotelPrices[i]*4 + "<br>" + selectedOption+" Nights";
        cartPrices[i] = (hotelPrices[i]*4);
    }
}

//item 1
function checkOptions1(formData)
{
    let selectedOption = getSelectedValue(formData.datecount1);
    let i=1;
    let displayParaId = "price" + (i);
    alert("Booking added to the cart!  "+" For "+selectedOption+" nights");
    if(selectedOption==="1")
    {
        document.getElementById(displayParaId).innerHTML = "Booking charge for : "+ hotelNames[i] +"<br>  Booking price  :  $"+hotelPrices[i] + "<br>" + selectedOption+" Night";
        cartPrices[i] = (hotelPrices[i]);
    }
    else if(selectedOption==="2")
    {
        document.getElementById(displayParaId).innerHTML = "Booking charge for : "+ hotelNames[i] +"<br>  Booking price  :  $"+hotelPrices[i]*2 + "<br>" + selectedOption+" Nights";
        cartPrices[i] = (hotelPrices[i]*2);
    }
    else if(selectedOption==="3")
    {
        document.getElementById(displayParaId).innerHTML = "Booking charge for : "+ hotelNames[i] +"<br>  Booking price  :  $"+hotelPrices[i]*3 + "<br>" + selectedOption+" Nights";
        cartPrices[i] = (hotelPrices[i]*3);
    }
    else if(selectedOption==="4")
    {
        document.getElementById(displayParaId).innerHTML = "Booking charge for : "+ hotelNames[i] +"<br>  Booking price  :  $"+hotelPrices[i]*4 + "<br>" + selectedOption+" Nights";
        cartPrices[i] = (hotelPrices[i]*4);
    }
}

//item 2
function checkOptions2(formData){
    let selectedOption = getSelectedValue(formData.datecount2);
    let i=2;
    let displayParaId = "price" + (i);
    alert("Booking added to the cart!  "+" For "+selectedOption+" nights");
    if(selectedOption==="1")
    {
        document.getElementById(displayParaId).innerHTML = "Booking charge for : "+ hotelNames[i] +"<br>  Booking price  :  $"+hotelPrices[i] + "<br>" + selectedOption+" Night";
        cartPrices[i] = (hotelPrices[i]);
    }
    else if(selectedOption==="2")
    {
        document.getElementById(displayParaId).innerHTML = "Booking charge for : "+ hotelNames[i] +"<br>  Booking price  :  $"+hotelPrices[i]*2 + "<br>" + selectedOption+" Nights";
        cartPrices[i] = (hotelPrices[i]*2);
    }
    else if(selectedOption==="3")
    {
        document.getElementById(displayParaId).innerHTML = "Booking charge for : "+ hotelNames[i] +"<br>  Booking price  :  $"+hotelPrices[i]*3 + "<br>" + selectedOption+" Nights";
        cartPrices[i] = (hotelPrices[i]*3);
    }
    else if(selectedOption==="4")
    {
        document.getElementById(displayParaId).innerHTML = "Booking charge for : "+ hotelNames[i] +"<br>  Booking price  :  $"+hotelPrices[i]*4 + "<br>" + selectedOption+" Nights";
        cartPrices[i] = (hotelPrices[i]*4);
    }
}

//item 3
function checkOptions3(formData)
{
    let selectedOption = getSelectedValue(formData.datecount3);
    let i=3;
    let displayParaId = "price" + (i);
    alert("Booking added to the cart!  "+" For "+selectedOption+" nights");
    if(selectedOption==="1")
    {
        document.getElementById(displayParaId).innerHTML = "Booking charge for : "+ hotelNames[i] +"<br>  Booking price  :  $"+hotelPrices[i] + "<br>" + selectedOption+" Night";
        cartPrices[i] = (hotelPrices[i]);
    }
    else if(selectedOption==="2")
    {
        document.getElementById(displayParaId).innerHTML = "Booking charge for : "+ hotelNames[i] +"<br>  Booking price  :  $"+hotelPrices[i]*2 + "<br>" + selectedOption+" Nights";
        cartPrices[i] = (hotelPrices[i]*2);
    }
    else if(selectedOption==="3")
    {
        document.getElementById(displayParaId).innerHTML = "Booking charge for : "+ hotelNames[i] +"<br>  Booking price  :  $"+hotelPrices[i]*3 + "<br>" + selectedOption+" Nights";
        cartPrices[i] = (hotelPrices[i]*3);
    }
    else if(selectedOption==="4")
    {
        document.getElementById(displayParaId).innerHTML = "Booking charge for : "+ hotelNames[i] +"<br>  Booking price  :  $"+hotelPrices[i]*4 + "<br>" + selectedOption+" Nights";
        cartPrices[i] = (hotelPrices[i]*4);
    }
}

//item 4
function checkOptions4(formData)
{
    let selectedOption = getSelectedValue(formData.datecount4);
    let i=4;
    let displayParaId = "price" + (i);
    alert("Booking added to the cart!  "+" For "+selectedOption+" nights");
    if(selectedOption==="1")
    {
        document.getElementById(displayParaId).innerHTML = "Booking charge for : "+ hotelNames[i] +"<br>  Booking price  :  $"+hotelPrices[i] + "<br>" + selectedOption+" Night";
        cartPrices[i] = (hotelPrices[i]);
    }
    else if(selectedOption==="2")
    {
        document.getElementById(displayParaId).innerHTML = "Booking charge for : "+ hotelNames[i] +"<br>  Booking price  :  $"+hotelPrices[i]*2 + "<br>" + selectedOption+" Nights";
        cartPrices[i] = (hotelPrices[i]*2);
    }
    else if(selectedOption==="3")
    {
        document.getElementById(displayParaId).innerHTML = "Booking charge for : "+ hotelNames[i] +"<br>  Booking price  :  $"+hotelPrices[i]*3 + "<br>" + selectedOption+" Nights";
        cartPrices[i] = (hotelPrices[i]*3);
    }
    else if(selectedOption==="4")
    {
        document.getElementById(displayParaId).innerHTML = "Booking charge for : "+ hotelNames[i] +"<br>  Booking price  :  $"+hotelPrices[i]*4 + "<br>" + selectedOption+" Nights";
        cartPrices[i] = (hotelPrices[i]*4);
    }
}

//item 5
function checkOptions5(formData){
    let selectedOption = getSelectedValue(formData.datecount5);
    let i=5;
    let displayParaId = "price" + (i);
    alert("Booking added to the cart!  "+" For "+selectedOption+" nights");
    if(selectedOption==="1")
    {
        document.getElementById(displayParaId).innerHTML = "Booking charge for : "+ hotelNames[i] +"<br>  Booking price  :  $"+hotelPrices[i] + "<br>" + selectedOption+" Night";
        cartPrices[i] = (hotelPrices[i]);
    }
    else if(selectedOption==="2")
    {
        document.getElementById(displayParaId).innerHTML = "Booking charge for : "+ hotelNames[i] +"<br>  Booking price  :  $"+hotelPrices[i]*2 + "<br>" + selectedOption+" Nights";
        cartPrices[i] = (hotelPrices[i]*2);
    }
    else if(selectedOption==="3")
    {
        document.getElementById(displayParaId).innerHTML = "Booking charge for : "+ hotelNames[i] +"<br>  Booking price  :  $"+hotelPrices[i]*3 + "<br>" + selectedOption+" Nights";
        cartPrices[i] = (hotelPrices[i]*3);
    }
    else if(selectedOption==="4")
    {
        document.getElementById(displayParaId).innerHTML = "Booking charge for : "+ hotelNames[i] +"<br>  Booking price  :  $"+hotelPrices[i]*4 + "<br>" + selectedOption+" Nights";
        cartPrices[i] = (hotelPrices[i]*4);
    }
}

//item 6
function checkOptions6(formData)
{
    let selectedOption = getSelectedValue(formData.datecount6);
    let i=6;
    let displayParaId = "price" + (i);
    alert("Booking added to the cart!  "+" For "+selectedOption+" nights");
    if(selectedOption==="1")
    {
        document.getElementById(displayParaId).innerHTML = "Booking charge for : "+ hotelNames[i] +"<br>  Booking price  :  $"+hotelPrices[i] + "<br>" + selectedOption+" Night";
        cartPrices[i] = (hotelPrices[i]);
    }
    else if(selectedOption==="2")
    {
        document.getElementById(displayParaId).innerHTML = "Booking charge for : "+ hotelNames[i] +"<br>  Booking price  :  $"+hotelPrices[i]*2 + "<br>" + selectedOption+" Nights";
        cartPrices[i] = (hotelPrices[i]*2);
    }
    else if(selectedOption==="3")
    {
        document.getElementById(displayParaId).innerHTML = "Booking charge for : "+ hotelNames[i] +"<br>  Booking price  :  $"+hotelPrices[i]*3 + "<br>" + selectedOption+" Nights";
        cartPrices[i] = (hotelPrices[i]*3);
    }
    else if(selectedOption==="4")
    {
        document.getElementById(displayParaId).innerHTML = "Booking charge for : "+ hotelNames[i] +"<br>  Booking price  :  $"+hotelPrices[i]*4 + "<br>" + selectedOption+" Nights";
        cartPrices[i] = (hotelPrices[i]*4);
    }
}

//item 7
function checkOptions7(formData)
{
    let selectedOption = getSelectedValue(formData.datecount7);
    let i=7;
    let displayParaId = "price" + (i);
    alert("Booking added to the cart!  "+" For "+selectedOption+" nights");
    if(selectedOption==="1")
    {
        document.getElementById(displayParaId).innerHTML = "Booking charge for : "+ hotelNames[i] +"<br>  Booking price  :  $"+hotelPrices[i] + "<br>" + selectedOption+" Night";
        cartPrices[i] = (hotelPrices[i]);
    }
    else if(selectedOption==="2")
    {
        document.getElementById(displayParaId).innerHTML = "Booking charge for : "+ hotelNames[i] +"<br>  Booking price  :  $"+hotelPrices[i]*2 + "<br>" + selectedOption+" Nights";
        cartPrices[i] = (hotelPrices[i]*2);
    }
    else if(selectedOption==="3")
    {
        document.getElementById(displayParaId).innerHTML = "Booking charge for : "+ hotelNames[i] +"<br>  Booking price  :  $"+hotelPrices[i]*3 + "<br>" + selectedOption+" Nights";
        cartPrices[i] = (hotelPrices[i]*3);
    }
    else if(selectedOption==="4")
    {
        document.getElementById(displayParaId).innerHTML = "Booking charge for : "+ hotelNames[i] +"<br>  Booking price  :  $"+hotelPrices[i]*4 + "<br>" + selectedOption+" Nights";
        cartPrices[i] = (hotelPrices[i]*4);
    }
}

//item 8
function checkOptions8(formData)
{
    let selectedOption = getSelectedValue(formData.datecount8);
    let i=8;
    let displayParaId = "price" + (i);
    alert("Item added to the cart!    "+selectedOption+" Item(s)");
    if(selectedOption==="1")
    {
        document.getElementById(displayParaId).innerHTML = "Item name : "+ hotelNames[i] +"<br>  Price  :  $"+hotelPrices[i] + "<br> Quantity : " + selectedOption;
        cartPrices[i] = (hotelPrices[i]);
    }
    else if(selectedOption==="2")
    {
        document.getElementById(displayParaId).innerHTML = "Item name : "+ hotelNames[i] +"<br>  Price  :  $"+hotelPrices[i]*2 + "<br> Quantity : " + selectedOption;
        cartPrices[i] = (hotelPrices[i]*2);
    }
    else if(selectedOption==="3")
    {
        document.getElementById(displayParaId).innerHTML =  "Item name : "+ hotelNames[i] +"<br>  Price  :  $"+hotelPrices[i]*3 + "<br> Quantity : " + selectedOption;
        cartPrices[i] = (hotelPrices[i]*3);
    }
    else if(selectedOption==="4")
    {
        document.getElementById(displayParaId).innerHTML =  "Item name : "+ hotelNames[i] +"<br>  Price  :  $"+hotelPrices[i]*4 + "<br> Quantity : " + selectedOption;
        cartPrices[i] = (hotelPrices[i]*4);
    }
}

//item 9
function checkOptions9(formData){
    let selectedOption = getSelectedValue(formData.datecount9);
    let i=9;
    let displayParaId = "price" + (i);
    alert("Item added to the cart!    "+selectedOption+" Item(s)");
    if(selectedOption==="1")
    {
        document.getElementById(displayParaId).innerHTML = "Item name : "+ hotelNames[i] +"<br>  Price  :  $"+hotelPrices[i] + "<br> Quantity : " + selectedOption;
        cartPrices[i] = (hotelPrices[i]);
    }
    else if(selectedOption==="2")
    {
        document.getElementById(displayParaId).innerHTML = "Item name : "+ hotelNames[i] +"<br>  Price  :  $"+hotelPrices[i]*2 + "<br> Quantity : " + selectedOption;
        cartPrices[i] = (hotelPrices[i]*2);
    }
    else if(selectedOption==="3")
    {
        document.getElementById(displayParaId).innerHTML =  "Item name : "+ hotelNames[i] +"<br>  Price  :  $"+hotelPrices[i]*3 + "<br> Quantity : " + selectedOption;
        cartPrices[i] = (hotelPrices[i]*3);
    }
    else if(selectedOption==="4")
    {
        document.getElementById(displayParaId).innerHTML =  "Item name : "+ hotelNames[i] +"<br>  Price  :  $"+hotelPrices[i]*4 + "<br> Quantity : " + selectedOption;
        cartPrices[i] = (hotelPrices[i]*4);
    }
}

//item 10
function checkOptions10(formData)
{
    let selectedOption = getSelectedValue(formData.datecount10);
    let i=10;
    let displayParaId = "price" + (i);
    alert("Item added to the cart!    "+selectedOption+" Item(s)");
    if(selectedOption==="1")
    {
        document.getElementById(displayParaId).innerHTML = "Item name : "+ hotelNames[i] +"<br>  Price  :  $"+hotelPrices[i] + "<br> Quantity : " + selectedOption;
        cartPrices[i] = (hotelPrices[i]);
    }
    else if(selectedOption==="2")
    {
        document.getElementById(displayParaId).innerHTML = "Item name : "+ hotelNames[i] +"<br>  Price  :  $"+hotelPrices[i]*2 + "<br> Quantity : " + selectedOption;
        cartPrices[i] = (hotelPrices[i]*2);
    }
    else if(selectedOption==="3")
    {
        document.getElementById(displayParaId).innerHTML =  "Item name : "+ hotelNames[i] +"<br>  Price  :  $"+hotelPrices[i]*3 + "<br> Quantity : " + selectedOption;
        cartPrices[i] = (hotelPrices[i]*3);
    }
    else if(selectedOption==="4")
    {
        document.getElementById(displayParaId).innerHTML =  "Item name : "+ hotelNames[i] +"<br>  Price  :  $"+hotelPrices[i]*4 + "<br> Quantity : " + selectedOption;
        cartPrices[i] = (hotelPrices[i]*4);
    }
}

//item 11
function checkOptions11(formData)
{
    let selectedOption = getSelectedValue(formData.datecount11);
    let i=11;
    let displayParaId = "price" + (i);
    alert("Item added to the cart!    "+selectedOption+" Item(s)");
    if(selectedOption==="1")
    {
        document.getElementById(displayParaId).innerHTML = "Item name : "+ hotelNames[i] +"<br>  Price  :  $"+hotelPrices[i] + "<br> Quantity : " + selectedOption;
        cartPrices[i] = (hotelPrices[i]);
    }
    else if(selectedOption==="2")
    {
        document.getElementById(displayParaId).innerHTML = "Item name : "+ hotelNames[i] +"<br>  Price  :  $"+hotelPrices[i]*2 + "<br> Quantity : " + selectedOption;
        cartPrices[i] = (hotelPrices[i]*2);
    }
    else if(selectedOption==="3")
    {
        document.getElementById(displayParaId).innerHTML =  "Item name : "+ hotelNames[i] +"<br>  Price  :  $"+hotelPrices[i]*3 + "<br> Quantity : " + selectedOption;
        cartPrices[i] = (hotelPrices[i]*3);
    }
    else if(selectedOption==="4")
    {
        document.getElementById(displayParaId).innerHTML =  "Item name : "+ hotelNames[i] +"<br>  Price  :  $"+hotelPrices[i]*4 + "<br> Quantity : " + selectedOption;
        cartPrices[i] = (hotelPrices[i]*4);
    }
}

//Calculating the total bill
function totalBill()
{
    let total=0;
    for(let i=0; i<cartPrices.length; i++)
    {
        total = total + cartPrices[i];
    }
    if(total===0)
    {
        document.getElementById("totalbill").innerHTML = "Your cart is empty";
        alert("Your cart is empty!");
    }
    else
    {
        document.getElementById("totalbill").innerHTML = "Total Bill  :  $" + total;
        document.getElementById("yourCart").innerHTML = "Invoice";
    }
}


//Validating and getting personal details
function personalDetails()
{
    let x = document.forms["personal"]["fname"].value;
    let y = document.forms["personal"]["contact"].value;
    let z = document.forms["personal"]["mail"].value;
    if(x === "")
    {
        alert("Please enter your full name !");
    }
    else if(y === "")
    {
        alert("Please enter your contact details !");
    }
    else if(z === "")
    {
        alert("Please enter your email address !");
    }
    else
    {
        document.getElementById("name").innerHTML = "NAME : " + document.getElementById("fname").value;
        document.getElementById("mycontact").innerHTML = "CONTACT : " + document.getElementById("contact").value;
        document.getElementById("email").innerHTML = "EMAIL : " + document.getElementById("mail").value;
    }
}

