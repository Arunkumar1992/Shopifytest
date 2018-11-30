function ZrefTrack(){
    var cemail= "{{customer.email}}"; 
    var orderprice = "{{ total_price | money_without_currency }}";
    var orderid = "{{ order_number }}";
    alert ("cemail :: " + cemail + "orderprice :: " + orderprice + "orderid :: " + orderid);
}
