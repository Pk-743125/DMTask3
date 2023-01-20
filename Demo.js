//EXAMINE THE DOCUMENT OBJECT
// console.dir(document);
console.log(document.title);
document.title =  'My Shoping Bag';
console.log(document.all);
console.log(document.all[10]);
document.all[10].textContent  = 'Shoping List'

//GET ELEMENT BY ID
//console.log(document.getElementById("header-title"));
var headertitle = document.getElementById("header-title");
var header = document.getElementById('main-header')
//console.log(headertitle);
//headertitle.textContent = 'product list'
header.style.borderBottom = 'solid 10px #000'




//GET ELEMENT BY CLASS NAME
var items = document.getElementsByClassName("title")
console.log(items);
console.log(items[0]);
items[0].textContent = 'Add Products';
items[0].style.fontWeight = 'bold';
items[1].textContent = 'Products';

var pro = document.getElementsByClassName("list-group-item")
console.log(pro);
console.log(pro[0]);
pro[0].textContent = 'Rice';
pro[0].style.fontWeight = 'bold';

pro[1].textContent = 'Wheat';
pro[1].style.fontWeight = 'bold';


pro[2].textContent = 'Daal';
pro[2].style.fontWeight = 'bold';


pro[3].textContent = 'Masala';
pro[3].style.fontWeight = 'bold';

for(var i=0 ; i<pro.length ; i++){
    pro[i].style.backgroundColor = '#f4f4f4';
}

//GET ELEMENT BY TAG NAME
//var li = document.getElementsByTagName("li")
//console.log(li);
//console.log(li[0]);
//li[0].textContent = 'Salt';
//li[0].style.fontWeight = 'bold';
//li[2].textContent = 'Flour';

//QUERYSELECTOR//
//var header = document.querySelector('#main-header');
//header.style.borderBottom = 'solid 4px #ccc' ;

//var input = document.querySelector('input');
//input.value = 'Hello';

var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";

//QUERY SELECTOR ALL
//var titles = document.querySelectorAll('.title');
//console.log(titles);
//titles[1].textContent = "Hii" ;

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
for(var i = 0 ; i<odd.length ; i++){
    odd[i].style.backgroundColor = 'pink' ;
    even[i].style.backgroundColor = '#ccc' ;

}




