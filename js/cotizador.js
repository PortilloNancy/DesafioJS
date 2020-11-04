

var pase_dia = document.getElementById('pase_dia');
var pase_completo = document.getElementById('pase_completo');
var pase_dosdias = document.getElementById('pase_dosdias');
var calcular = document.getElementById('calcular');
var lista_productos = document.getElementById('lista-productos');
var dia = document.getElementById('dia');
var completo = document.getElementById('completo');
var dosdias = document.getElementById('dosdias');
var suma_total = document.getElementById('suma-total');

calcular.addEventListener('click',function(){
    subtotal_pase_dia = 30*pase_dia.value;
    subtotal_completo = 50*pase_completo.value;
    subtotal_pase_dosdias = 45*pase_dosdias.value;

    if(pase_dia.value==1){
        dia.textContent = pase_dia.value+' Boleto pase por dia---------- $'+ subtotal_pase_dia;
    }else if (pase_dia.value>1){
        dia.textContent = pase_dia.value+' Boletos pase por dia---------- $'+ subtotal_pase_dia;
    }
    if(pase_completo.value==1){
        completo.textContent = pase_completo.value+' Boleto pase completo--------- $'+ subtotal_completo;
    }else if (pase_completo.value>1){
        completo.textContent = pase_completo.value+' Boletos pase completo--------- $'+ subtotal_completo;
    }
    if(pase_dosdias.value==1){
        dosdias.textContent = pase_dosdias.value+' Boleto pase completo--------- $'+ subtotal_pase_dosdias;
    }else if (pase_dosdias.value>1){
        dosdias.textContent = pase_dosdias.value+' Boletos pase completo--------- $'+ subtotal_pase_dosdias;
    }
    total = subtotal_pase_dia+subtotal_pase_dosdias+subtotal_completo;
    suma_total.textContent = total;

    
    
    
});
