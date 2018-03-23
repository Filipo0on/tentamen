// JavaScript för att implementera kraven A-E.

$(document).ready(function(){


output = $('#products');
cart = $('#cart');



   i = 1;

   //antal i cart

    antal0 = 0;
    antal1 = 0;
    antal2 = 0;
    antal3 = 0;
    antal4 = 0;
    antal5 = 0;
    antal6 = 0;
    antal7 = 0;
    antal8 = 0;

    //antal i lager

    stock0 = Math.floor((Math.random() *10) +1);
    stock1 = Math.floor((Math.random() *10) +1);
    stock2 = Math.floor((Math.random() *10) +1);
    stock3 = Math.floor((Math.random() *10) +1);
    stock4 = Math.floor((Math.random() *10) +1);
    stock5 = Math.floor((Math.random() *10) +1);
    stock6 = Math.floor((Math.random() *10) +1);
    stock7 = Math.floor((Math.random() *10) +1);



    $.get('http://demo.edument.se/api/products', function(data) {

      $.each(data, function(i, test) {
            output.append('<h2>'+test.Name+'</h2>');
            output.append('<img src="'+test.Image+'">');
            output.append('<p>Price:  $'+test.Price+'</p>');
            output.append('<p id="stock">Stock: '+stock0+'</p>');
            output.append('<p>'+test.Description+'</p>');
            output.append('<button class="addtocart'+[i]+'">Add to Cart</button>');
      });
/*
      $('#av').on('click', function () {


          $('.addtocart0').prop('disabled', true);


      });
*/

function outofstock () {

    if(stock0 === 0) {
        $('.addtocart0').prop('disabled', true);
        $('.addtocart1').prop('disabled', true);
        $('.addtocart2').prop('disabled', true);
        $('.addtocart3').prop('disabled', true);
        $('.addtocart4').prop('disabled', true);
        $('.addtocart5').prop('disabled', true);
        $('.addtocart6').prop('disabled', true);
        $('.addtocart7').prop('disabled', true);

    }

}




   function calculateprice () {
        //pris för enskilld produkt
        price0 = data[0].Price;
        price1 = data[1].Price;
        price2 = data[2].Price;
        price3 = data[3].Price;
        price4 = data[4].Price;
        price5 = data[5].Price;
        price6 = data[6].Price;
        price7 = data[7].Price;

        //totalpris för enskilld produkt

        totalprice0 = price0*antal0;
        totalprice1 = price0*antal1;
        totalprice2 = price0*antal2;
        totalprice3 = price0*antal3;
        totalprice4 = price0*antal4;
        totalprice5 = price0*antal5;
        totalprice6 = price0*antal6;
        totalprice7 = price0*antal7;


        //grandtotal price


    grandtotal = totalprice0 + totalprice1 + totalprice2 + totalprice3 + totalprice4 + totalprice5
        + totalprice6 + totalprice7;
$('#totalen').remove();
    $(cart).append('<h2 id="totalen">Grandtotal:  $'+grandtotal+'</h2>')

    }



        $('#toggleproducts').click(function () {
            $(output).show();
            $(cart).hide();
        });
        $('#togglecart').click(function () {
            $(output).hide();
            $(cart).show();
          calculateprice();

        });





        //add to cart



     //1

$('.addtocart0').on('click', function(){

    if(antal0=== 0){
        antal0++;
        stock0--;
        cart.append('<h3 id="prdkt0">Name: '+data[0].Name+'</h3>');
        $('#prdkt0').append('<p id="antal">'+antal0+'</p>');
        outofstock();

}
else{
        $('#antal').remove();
        antal0++;
        stock0--;
        $('#prdkt0').append('<p id="antal">'+antal0+'</p>');
        outofstock();
    }

});

  //2

        $('.addtocart1').on('click', function(){

            if(antal1=== 0){
                antal1++;
                stock0--;
                cart.append('<h3 id="prdkt1">Name: '+data[1].Name+'</h3>');
                $('#prdkt1').append('<p id="antal1">'+antal1+'</p>');
                outofstock();
            }
            else{
                $('#antal1').remove();
                antal1++;
                stock0--;
                $('#prdkt1').append('<p id="antal1">'+antal1+'</p>');
                outofstock();
            }
        });

        //3
        $('.addtocart2').on('click', function(){

            if(antal2=== 0){
                antal2++;
                stock0--;
                cart.append('<h3 id="prdkt2">Name: '+data[2].Name+'</h3>');
                $('#prdkt2').append('<p id="antal2">'+antal2+'</p>');
                outofstock();
            }
            else{
                $('#antal2').remove();
                antal2++;
                stock0--;
                $('#prdkt2').append('<p id="antal2">'+antal2+'</p>');
                outofstock();
            }
        });
//4
        $('.addtocart3').on('click', function(){

            if(antal3=== 0){
                antal3++;
                stock0--;
                cart.append('<h3 id="prdkt3">Name: '+data[3].Name+'</h3>');
                $('#prdkt3').append('<p id="antal3">'+antal3+'</p>');
                outofstock();
            }
            else{
                $('#antal3').remove();
                antal3++;
                stock0--;
                $('#prdkt3').append('<p id="antal3">'+antal3+'</p>');
                outofstock();
            }
        });
//5
        $('.addtocart4').on('click', function(){

            if(antal4=== 0){
                antal4++;
                stock0--;
                cart.append('<h3 id="prdkt4">Name: '+data[4].Name+'</h3>');
                $('#prdkt4').append('<p id="antal4">'+antal4+'</p>');
                outofstock();
            }
            else{
                $('#antal4').remove();
                antal4++;
                stock0--;
                $('#prdkt4').append('<p id="antal4">'+antal4+'</p>');
                outofstock();
            }
        });
//6
        $('.addtocart5').on('click', function(){

            if(antal5=== 0){
                antal5++;
                stock0--;
                cart.append('<h3 id="prdkt5">Name: '+data[5].Name+'</h3>');
                $('#prdkt5').append('<p id="antal5">'+antal5+'</p>');
                outofstock();
            }
            else{
                $('#antal5').remove();
                antal5++;
                stock0--;
                $('#prdkt5').append('<p id="antal5">'+antal5+'</p>');
                outofstock();
            }
        });
//7
        $('.addtocart6').on('click', function(){

            if(antal6=== 0){
                antal6++;
                stock0--;
                cart.append('<h3 id="prdkt6">Name: '+data[6].Name+'</h3>');
                $('#prdkt6').append('<p id="antal6">'+antal6+'</p>');
                outofstock();
            }
            else{
                $('#antal6').remove();
                antal6++;
                stock0--;
                $('#prdkt6').append('<p id="antal6">'+antal6+'</p>');
                outofstock();
            }
        });
//8
        $('.addtocart7').on('click', function(){

            if(antal7=== 0){
                antal7++;
                stock0--;
                cart.append('<h3 id="prdkt7">Name: '+data[7].Name+'</h3>');
                $('#prdkt7').append('<p id="antal7">'+antal7+'</p>');
                outofstock();
            }
            else{
                $('#antal7').remove();
                antal7++;
                stock0--;
                $('#prdkt7').append('<p id="antal7">'+antal7+'</p>');
                outofstock();
            }
        });







        $("#post").click(function () {

            let obj0 = {Name: "Marna Pink Piggy Steamer" , count: antal0};
            let obj1 = {Name: "Salmon Fish Sushi Pillow" , count: antal1};
            let obj2 = {Name: "The Bobcat Mullet" , count: antal2};
            let obj3 = {Name: "Handitaur Centaur Hand Finger Puppet Set" , count: antal3};
            let obj4 = {Name: "Finger Hands Finger Puppets" , count: antal4};
            let obj5 = {Name: "Barbarian Knit Beanie Octopus" , count: antal5};
            let obj6 = {Name: "Pet Costume Afro Curly Wig" , count: antal6};
            let obj7 = {Name: "Bigfoot the Giant Yeti Statue" , count: antal7};

            function cleancart() {
                $('#cart h3').remove();
                antal0 = 0;
                antal1 = 0;
                antal2 = 0;
                antal3 = 0;
                antal4 = 0;
                antal5 = 0;
                antal6 = 0;
                antal7 = 0;
                antal8 = 0;
                orders = [];
            }


            orders = [];

            if(antal0 > 0) {
                orders.push(obj0);
            }
            if(antal1 > 0) {
                orders.push(obj1);
            }
            if(antal2 > 0) {
                orders.push(obj2);
            }
            if(antal3 > 0) {
                orders.push(obj3);
            }
            if(antal4 > 0) {
                orders.push(obj4);
            }
            if(antal5 > 0) {
                orders.push(obj5);
            }
            if(antal6 > 0) {
                orders.push(obj6);
            }
            if(antal7 > 0) {
                orders.push(obj7);
            }


            $.post("http://localhost:3000/orders",
                {
                  orders
                });

             cleancart();
             alert("Your order has been sent, and your cart is clean! Thank you for buying in our store!")
        });



    });




});
