function switchTW(ids,swn){
    var cmp = document.getElementById(ids);
    var div =cmp.querySelector('#'+swn);
    if(div.dataset.out==0){
        div.dataset.out= "1";
    }else{
        div.dataset.out= "0";
    }
}


function FNC_AND(cmp){
    var div = document.getElementById(cmp);
    var s1 = div.querySelector('#S1');
    var s2 = div.querySelector('#S2');
    var out= div.querySelector('#out1');

    var tabla = document.getElementById("Tand");
    for (var i = 0; i < tabla.rows.length; i++) {
    tabla.rows[i].style = ""; }  
    var fila = tabla.rows[(Number(s1.dataset.out)*2) + Number(s2.dataset.out)+1];
    fila.style.backgroundColor = "#FD6F1D";


    if(s1.dataset.out==1 && s2.dataset.out==1){
        out.className="led on";
    }else{
        out.className="led off";
    }
}

function FNC_OR(cmp){
    var div = document.getElementById(cmp);
    var s1 = div.querySelector('#S1');
    var s2 = div.querySelector('#S2');
    var out= div.querySelector('#out1');
   
    var tabla = document.getElementById("Tor");
    for (var i = 0; i < tabla.rows.length; i++) {
    tabla.rows[i].style = ""; }  
    var fila = tabla.rows[(Number(s1.dataset.out)*2) + Number(s2.dataset.out)+1];
    fila.style.backgroundColor = "#FD6F1D";


    if(s1.dataset.out==1 || s2.dataset.out==1){
        out.className="led on";
    }else{
        out.className="led off";
    }

}

function FNC_NOT(cmp){
    var div = document.getElementById(cmp);
    var s1 = div.querySelector('#S1');
    var out= div.querySelector('#out1');

    var tabla = document.getElementById("Tnot");
    for (var i = 0; i < tabla.rows.length; i++) {
    tabla.rows[i].style = ""; }  
    var fila = tabla.rows[ Number(s1.dataset.out)+1];
    fila.style.backgroundColor = "#FD6F1D";


    if(s1.dataset.out!=1){
        out.className="led on";
    }else{
        out.className="led off";
    }

}

function FNC_IF(cmp){
    var div = document.getElementById(cmp);
    var s1 = div.querySelector('#S1');
    var out= div.querySelector('#out1');

    var tabla = document.getElementById("Tif");
    for (var i = 0; i < tabla.rows.length; i++) {
    tabla.rows[i].style = ""; }  
    var fila = tabla.rows[ Number(s1.dataset.out)+1];
    fila.style.backgroundColor = "#FD6F1D";


    if(s1.dataset.out!=1){
        out.className="led off"; 
    }else{
       out.className="led on";
    }

}

function FNC_NAND(cmp){
    var div = document.getElementById(cmp);
    var s1 = div.querySelector('#S1');
    var s2 = div.querySelector('#S2');
    var out= div.querySelector('#out1');

    var tabla = document.getElementById("Tnand");
    for (var i = 0; i < tabla.rows.length; i++) {
    tabla.rows[i].style = ""; }  
    var fila = tabla.rows[(Number(s1.dataset.out)*2) + Number(s2.dataset.out)+1];
    fila.style.backgroundColor = "#FD6F1D";


    if(s1.dataset.out==1 && s2.dataset.out==1){
         out.className="led off";
    }else{
        out.className="led on";
    }
}

function FNC_NOR(cmp){
    var div = document.getElementById(cmp);
    var s1 = div.querySelector('#S1');
    var s2 = div.querySelector('#S2');
    var out= div.querySelector('#out1');

    var tabla = document.getElementById("Tnor");
    for (var i = 0; i < tabla.rows.length; i++) {
    tabla.rows[i].style = ""; }  
    var fila = tabla.rows[(Number(s1.dataset.out)*2) + Number(s2.dataset.out)+1];
    fila.style.backgroundColor = "#FD6F1D";


    if(s1.dataset.out==1 || s2.dataset.out==1){
        out.className="led off";
    }else{
        out.className="led on";
    }

}

function FNC_XOR(cmp){
var div = document.getElementById(cmp);
var s1 = div.querySelector('#S1');
    var s2 = div.querySelector('#S2');
    var out= div.querySelector('#out1');
    var o1= s1.dataset.out;
    var o2= s2.dataset.out;

    var tabla = document.getElementById("Txor");
    for (var i = 0; i < tabla.rows.length; i++) {
    tabla.rows[i].style = ""; }  
    var fila = tabla.rows[(Number(s1.dataset.out)*2) + Number(s2.dataset.out)+1];
    fila.style.backgroundColor = "#FD6F1D";


    if((o1==1 && o2!=1) || (o1!=1 && o2==1) ){
        out.className="led on";
    }else{
        out.className="led off";
    }
}

function FNC_XNOR(cmp){
var div = document.getElementById(cmp);
var s1 = div.querySelector('#S1');
    var s2 = div.querySelector('#S2');
    var out= div.querySelector('#out1');
    var o1= s1.dataset.out;
    var o2= s2.dataset.out;

    var tabla = document.getElementById("Txnor");
    for (var i = 0; i < tabla.rows.length; i++) {
    tabla.rows[i].style = ""; }  
    var fila = tabla.rows[(Number(s1.dataset.out)*2) + Number(s2.dataset.out)+1];
    fila.style.backgroundColor = "#FD6F1D";


    if((o1==1 && o2==1) || ((o1!=1 && o2!=1)) ){
        out.className="led on";
    }else{
        out.className="led off";
    }
}