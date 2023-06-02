let left = document.getElementById('left')
let right = document.getElementById('right')
let card = document.getElementById('card')
let i = 2


const imgs = ['img/pic1.jpg','img/pic2.jpg','img/pic3.jpg']
const uls = ['<li>мощность:0</li><li>габариты:0</li><li>цена:0</li>',
'<li>мощность:20</li><li>габариты:40</li><li>цена:60</li>','<li>мощность:30</li><li>габариты:50</li><li>цена:70</li>']
const h2s = ['Mustang','Ferrari','Lamborghini']

function f(i){
    card.innerHTML='<div>'+
    '<h2>'+h2s[i]+'</h2>'+
'</div>'+
'<div>'+
'<img src='+imgs[i]+' width="400px">' +
'</div>'+
'<div>'+
'<ul>'+uls[i]+
'</ul>'+
'</div>'
console.log(i)
    
}

left.onclick=function(){
    i--
    if(i<0){i=2}
    f(i)
}

right.onclick=function(){
    i++
    if(i==3){i=0}
    f(i)
}
