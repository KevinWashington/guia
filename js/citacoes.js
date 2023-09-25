/*eslint-env jquery*/
/*jslint browser: true*/
/*global $, jQuery*/

var titulo = [ 'Um autor',
               'Dois autores',
               'Três autores',
               'Mais de três autores',
               'Coincidência de sobrenomes de autores',
               'Diversos documentos de um mesmo autor e mesmo ano',
               'Diversos documentos da mesma autoria em anos diferentes',
               'Diversos documentos de vários autores',
               'Obras sem indicação de autoria ou responsabilidade',
               'Obras sem indicação de autoria ou responsabilidade e iniciada por artigo',
               'Supressões, interpolações, comentários, ênfase ou destaques em Citações Diretas'
              ]

var casos  = [false,false,false,false,false,false,false,false,false,false,false];

var corpo = function(nome){
    "use strict";
    var i = Number(nome.substring(8))-13;
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

$("#citacoes13").click(function () { corpo('citacoes13'); });
$("#citacoes14").click(function () { corpo('citacoes14'); });
$("#citacoes15").click(function () { corpo('citacoes15'); });
$("#citacoes16").click(function () { corpo('citacoes16'); });
$("#citacoes17").click(function () { corpo('citacoes17'); });
$("#citacoes18").click(function () { corpo('citacoes18'); });
$("#citacoes19").click(function () { corpo('citacoes19'); });
$("#citacoes20").click(function () { corpo('citacoes20'); });
$("#citacoes21").click(function () { corpo('citacoes21'); });
$("#citacoes22").click(function () { corpo('citacoes22'); });
$("#citacoes23").click(function () { corpo('citacoes23'); });