/*eslint-env jquery*/
/*jslint browser: true*/
/*global $, jQuery*/

var window = window;
$( function () {
    alert("oie");
    var tamanho = $(window).width();
    tamanho /= 1366;
    tamanho *= 30;
    $("nav").css("font-size",tamanho+"px");
})