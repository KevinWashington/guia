/*eslint-env jquery*/
/*jslint browser: true*/
/*global $, jQuery*/

//Pega os nomes dos Títulos para colocar no HTML
var titulo = [
                ['form','Formatação Gráfica'],
                ['numPro','Numeração Progressiva'],
                ['cita','Citações'],
                ['notaRoda','Notas de Rodapé'],
                ['estrut','Estrutura'],
                ['resm','Resumo'],
                ['refe','Referências'],
                ['monog','Monografia'],
                ['correspondencia','Correspondência'],
                ['pubPer','Publicação Periódica'],
                ['doc','Documento Jurídico'],
                ['civilCar','Documentos civis e de cartórios'],
                ['docAud','Documento audiovisual'],
                ['iconografico','Iconográfico'],
                ['cartografico','Cartográfico'],
                ['patentes','Patentes'],
                ['cEletronico','Obras consultadas em meio eletrônico'],
                ['cEspeciais','Casos especiais']
              ];

//Cria as variáveis para verificar se a div está aberta ou fechada dos títulos
var casosTitulo  = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];

//Função que cria os corpos dos títulos
var corpoTopico = function(nome){
    "use strict";
    for(var j = 0;j<titulo.length;j++){
        if(titulo[j][0] === nome){
            var i = j;
            break;
        }
    }
    if(casosTitulo[i] === false){
        casosTitulo[i] = true;
        $("#"+nome+"D").fadeIn();
        $("#"+nome).html(titulo[i][1]);
        $("<i class=\"fa fa-angle-up\" aria-hidden=\"true\" style=\"float:right;padding:0px 0px 0px 0px;\"></i>").appendTo("#"+nome);
    } else if(casosTitulo[i] == true) {
        $("#"+nome+"D").fadeOut();
        $("#"+nome).html(titulo[i][1]);
        $("<i class=\"fa fa-angle-down\" aria-hidden=\"true\" style=\"float:right;padding:0px 0px 0px 0px;\"></i>").appendTo("#"+nome);
        casosTitulo[i] = false;
    }
}

//Chama a função que cria corpo de cada título
$("#form").click( function () {corpoTopico('form')} );
$("#numPro").click( function () {corpoTopico('numPro')} );
$("#cita").click( function () {corpoTopico('cita')} );
$("#notaRoda").click( function () {corpoTopico('notaRoda')} );
$("#estrut").click( function () {corpoTopico('estrut')} );
$("#resm").click( function () {corpoTopico('resm')} );
$("#refe").click( function () {corpoTopico('refe')} );
$("#monog").click( function () {corpoTopico('monog')} );
$("#correspondencia").click( function () {corpoTopico('correspondencia')} );
$("#pubPer").click( function () {corpoTopico('pubPer')} );
$("#doc").click( function () {corpoTopico('doc')} );
$("#civilCar").click( function () {corpoTopico('civilCar')} );
$("#docAud").click( function () {corpoTopico('docAud')} );
$("#iconografico").click(function() {corpoTopico('iconografico')} );
$("#cartografico").click(function() {corpoTopico('cartografico')} );
$("#patentes").click(function() {corpoTopico('patentes')} );
$("#cEletronico").click(function() {corpoTopico('cEletronico')} );
$("#cEspeciais").click(function() {corpoTopico('cEspeciais')} );