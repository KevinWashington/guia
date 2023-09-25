/*eslint-env jquery*/
/*jslint browser: true*/
/*global $, jQuery*/
var titulo = [
  "Idem - mesmo autor - id.",
  "Ibidem - na mesma obra - ibid.",
  "Opus citatum, opere citato – obra citada – op. cit.",
  "Passim – aqui e ali, em diversas passagens – passim",
  "Loco citato – no lugar citado – loc. cit.",
  "Confira, confronte – Cf.",
  "Seguinte ou que se segue – et seq.",
  "Ref."
];
var casos  = [false,false,false,false,false,false,false,false];

var corpo = function(nome){
    "use strict";
    var i = Number(nome.substring(5))-1;
    if(casos[i] === false){
        casos[i] = true;
        $("#"+nome+"D").fadeIn();
        $("#"+nome).html(titulo[i]);
        $("<i class=\"fa fa-angle-up\" aria-hidden=\"true\" style=\"float:right;padding:0px 10px 0px 0px;\"></i>").appendTo("#"+nome);
    } else if(casos[i] == true) {
        $("#"+nome+"D").fadeOut();
        $("#"+nome).html(titulo[i]);
        $("<i class=\"fa fa-angle-down\" aria-hidden=\"true\" style=\"float:right;padding:0px 10px 0px 0px;\"></i>").appendTo("#"+nome);
        casos[i] = false;
    }   
}

$("#casos1").click(function () { corpo('casos1'); });
$("#casos2").click(function () { corpo('casos2'); });
$("#casos3").click(function () { corpo('casos3'); });
$("#casos4").click(function () { corpo('casos4'); });
$("#casos5").click(function () { corpo('casos5'); });
$("#casos6").click(function () { corpo('casos6'); });
$("#casos7").click(function () { corpo('casos7'); });
$("#casos8").click(function () { corpo("casos8"); });