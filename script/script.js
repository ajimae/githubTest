let i = 0;
let grand_total = 0;

function addItem() {
    let name = document.getElementById('item-name').value;
    let qty = document.getElementById('item-quty').value;
    let price = document.getElementById('item-price').value;
    let sub_total = price * qty;
    ++i;
    
    document.getElementById('dashboard').innerHTML += '<tr id="item-'+(i)+'"><td id="sn">'+i+'</td><td>'+name+'</td><td>'+qty+'</td><td id="sub-total-'+i+'">'+(sub_total)+'</td><td><input type="button" id="btn-rm-'+(i)+'" value="Remove" onClick=removeItem("btn-rm-'+i+'")></td></tr>';
    
    grand_total += sub_total;
    document.getElementById('grand-total').innerHTML = "₦"+grand_total+".00";
    
    document.getElementById('item-name').value = "";
    document.getElementById('item-quty').value = "";
    document.getElementById('item-price').value = "";
};


function removeItem(id) {
    
    let index = id.split("-")[2];
    let subTotal = document.getElementById('sub-total-'+index).innerHTML;
    //console.log(subTotal);
    grand_total -= subTotal;
    console.log(grand_total);
    total_price = grand_total;
    //console.log(total_price);
    document.getElementById('grand-total').innerHTML = "₦"+total_price+".00";
    
    let btn = document.getElementById(id);
    let item = document.getElementById("item-"+index);
    if(item === item.parentNode.lastChild) --i;
    item.parentNode.removeChild(item);
    
 
}




































