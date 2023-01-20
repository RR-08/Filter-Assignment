
function createMenu(name,category,calories,junk){
    let MenuItem={
        name:name,
        category:category,
        calories:calories,
        junk:junk
    }
    return MenuItem;
}
function preload(){
    Burger=loadImage('img/Burger.jpg');
}
let i1=createMenu("Burger","Snacks",400,"Junk");
let i2=createMenu("Salad","Breakfast",40,"Not Junk");
let i3=createMenu("Pasta","Snacks",180,"Junk");
let i4=createMenu("Pizza","Snacks",500,"Junk");
let i5=createMenu("Veggies","Breakfast",140,"Not Junk");

let array=[i1,i2,i3,i4,i5];
var html$='';

for(var key in array){

 html$+='<div class="box" id='+array[key].name+'>'+'<img src="img/'+array[key].name+'.jpg">'+'<div class="info">'+'<p>'+array[key].name+'</p>'+'<p>'+array[key].category+'</p>'+'<p>'+array[key].calories+'</p>'+'<p>'+array[key].junk+'</p>'+'</div>'+'</div>';
}

document.getElementById("boxes").innerHTML = html$;

function cal(){

var cal_array=array.filter(function(item){
    return item.calories>400;
});
var html$='';
for(var i in cal_array){

 html$+='<div class="box" id='+cal_array[i].name+'>'+'<img src="img/'+cal_array[i].name+'.jpg">'+'<div class="info">'+'<p>'+cal_array[i].name+'</p>'+'<p>'+cal_array[i].category+'</p>'+'<p>'+cal_array[i].calories+'</p>'+'<p>'+cal_array[i].junk+'</p>'+'</div>'+'</div>';
}
// console.log(html$);

document.getElementById("boxes").innerHTML = html$;
}


function showjunk(){

var cal_array=array.filter(function(item){
    return item.junk=="Junk";
});
var html$='';
for(var i in cal_array){

 html$+='<div class="box" id='+cal_array[i].name+'>'+'<img src="img/'+cal_array[i].name+'.jpg">'+'<div class="info">'+'<p>'+cal_array[i].name+'</p>'+'<p>'+cal_array[i].category+'</p>'+'<p>'+cal_array[i].calories+'</p>'+'<p>'+cal_array[i].junk+'</p>'+'</div>'+'</div>';
}
document.getElementById("boxes").innerHTML = html$;
}

function showall(){

var html$='';
for(var i in array){

 html$+='<div class="box" id='+array[i].name+'>'+'<img src="img/'+array[i].name+'.jpg">'+'<div class="info">'+'<p>'+array[i].name+'</p>'+'<p>'+array[i].category+'</p>'+'<p>'+array[i].calories+'</p>'+'<p>'+array[i].junk+'</p>'+'</div>'+'</div>';
}
document.getElementById("boxes").innerHTML = html$;
// location.reload();
}

function breakfast(){
    var cal_array=array.filter(function(item){
    return item.category=="Breakfast";
});
var html$='';
for(var i in cal_array){

 html$+='<div class="box" id='+cal_array[i].name+'>'+'<img src="img/'+cal_array[i].name+'.jpg">'+'<div class="info">'+'<p>'+cal_array[i].name+'</p>'+'<p>'+cal_array[i].category+'</p>'+'<p>'+cal_array[i].calories+'</p>'+'<p>'+cal_array[i].junk+'</p>'+'</div>'+'</div>';
}
// console.log(html$);

document.getElementById("boxes").innerHTML = html$;
}

document.getElementById('jun').onclick=showjunk;
document.getElementById('all').onclick=showall;
document.getElementById('cal_40').onclick=cal;
document.getElementById('Breakfast').onclick=breakfast;

