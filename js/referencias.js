    /*eslint-env jquery*/
    /*jslint browser: true*/
    /*global $, jQuery*/

    var window = window;

$.urlParam = function (name) {
    "use strict";
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    } else {
        return decodeURI(results[1]) || 0;
    }
};

//Pega os nomes dos Títulos para colocar no HTML
var titulo = [
                ['monog','Monografia'],
                ['correspondencia','Correspondência'],
                ['pubPer','Publicação Periódica'],
                ['trabCSC','Trabalhos apresentados em Congresso, Simpósio, Conferência e outros eventos'],
                ['teseDTCC','Trabalhos acadêmicos (tese, dissertação, TCC e outros)'],
                ['doc','Documento Jurídico'],
                ['civilCar','Documentos civis e de cartórios'],
                ['docAud','Documento audiovisual'],
                ['iconografico', 'Documento iconográfico'],
                ['cartografico','Documento cartográfico'],
                ['patentes','Patentes'],
                ['cEletronico','Obras consultadas em meio eletrônico'],
                ['cEspeciais', 'Casos especiais']
              ];
//Pega os nomes dos subtítulos para colocar no HTML
var subtitulo = [
                ['a1Monog','Um Autor'],
                ['ou23Monog','Dois ou Três Autores'],
                ['mais3Monog','Mais de três Autores'],
                ['autEntMonog','Autor Entidade'],
                ['ogMonog','Órgãos Governamentais'],
                ['adMonog','Autoria Desconhecida'],
                ['autorMonog','Autor (Organizador, Compilador, Editor, Coordenador, etc)'],
                ['partMesmoMonog','Parte de publicação com o mesmo autor e com autores diferentes'],
                ['todoPubPer','Publicação Periódica como um todo'],
                ['artPubPer','Artigo de publicação Periódica'],
                ['legisDoc','Legislação'],
                ['jurisDoc', 'Jurisprudência'],
                ['atoANDoc','Atos Administrativo Normativos'],
                ['filVODocAud', 'Filmes, vídeos, entre outros'],
                ['docSonDocAud', 'Documento sonoro'],
                ['parteDocSonDocAud','Parte documento sonoro'],
                ['todoCEletronico', 'Monografia no todo'],
                ['parteCEletronico','Parte de monografia'],
                ['artCEletronico','Artigo de publicação periódica'],
                ['jCEletronico', 'Artigo e/ou matéria de jornal'],
                ['eventoCEletronico', 'Eventos (Congresso, simpósio, entre outros)'],
                ['juriCEletronico','Documento jurídico'],
                ['icoCEletronico','Documento iconográfico'],
                ['cartoCEletronico','Documento cartográfico'],
                ['docExcCEletronico','Documento de exclusivo em meio eletrônico'],
                ['redesCEletronico','Redes sociais'],
                ['parentescoCEspeciais','Sobrenomes que indicam grau de parentesco'],
                ['mesmoACEspeciais', 'Nome do mesmo autor referenciado sucessivamente'],
                ['mesmoAnoPCEspeciais', 'Fontes de mesmo autor e com mesmo ano de publicação'],
                ['pubDifeCEspeciais', 'Fontes de mesmo autor e com ano de publicação diferente'],
                ['fLocalCEspeciais','Fontes sem local'],
                ['semEditoraCEspeciais', 'Fontes sem editora'],
                ['semLocalEditCEspeciais', 'Fontes sem local e editora'],
                ['semDataCEspeciais', 'Fontes sem data']
             ];

//Cria as variáveis para verificar se a div está aberta ou fechada dos títulos
var casosTitulo  = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];

//Cria as variáveis para verificar se a div está aberta ou fechada dos subtítulos
var casosSubtitulo  = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];

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
        $("<i class=\"fa fa-angle-up\" aria-hidden=\"true\" style=\"float:right;padding:0px 10px 0px 0px;\"></i>").appendTo("#"+nome);
    } else if(casosTitulo[i] == true) {
        $("#"+nome+"D").fadeOut();
        $("#"+nome).html(titulo[i][1]);
        $("<i class=\"fa fa-angle-down\" aria-hidden=\"true\" style=\"float:right;padding:0px 10px 0px 0px;\"></i>").appendTo("#"+nome);
        casosTitulo[i] = false;
    }
}

//Função que cria os corpos dos subtítulos
var corpoSubtopico = function(nome){
    "use strict";
    for(var j = 0;j<subtitulo.length;j++){
        if(subtitulo[j][0] === nome){
            var i = j;
            break;
        }
    }
    if(casosSubtitulo[i] === false){
        casosSubtitulo[i] = true;
        $("#"+nome+"D").fadeIn();
        $("#"+nome+"2").html("<span\">"+subtitulo[i][1]+"<i class=\"fa fa-angle-up\" aria-hidden=\"true\" style=\"float:right;padding:4px 23px 0px 0px;\" ></i></span>");

    } else if(casosSubtitulo[i] == true) {
        $("#"+nome+"D").fadeOut();
        $("#"+nome+"2").html("<span\">"+subtitulo[i][1]+"<i class=\"fa fa-angle-down\" aria-hidden=\"true\" style=\"float:right;padding:4px 23px 0px 0px;\" ></i></span>");
        casosSubtitulo[i] = false;
    }
}

//Chama a função que cria corpo de cada título

$.monog                  = function () { corpoTopico('monog') };

$.correspondencia        = function () { corpoTopico('correspondencia')};

$.pubPer                 = function () { corpoTopico('pubPer') };

$.trabCSC                = function () { corpoTopico('trabCSC') };

$.teseDTCC               = function () { corpoTopico('teseDTCC') };

$.doc                    = function () { corpoTopico('doc') };

$.civilCar               = function () { corpoTopico('civilCar')};

$.docAud                 = function () { corpoTopico('docAud') };

$.iconografico           = function () { corpoTopico('iconografico')};

$.cartografico           = function () { corpoTopico('cartografico')};

$.patentes               = function () { corpoTopico('patentes') };

$.cEletronico            = function () { corpoTopico('cEletronico') };

$.cEspeciais             = function () { corpoTopico('cEspeciais') };


//Chama a função que cria corpo de cada subtítulo, dividido por seu título

$.a1Monog                = function () { corpoSubtopico('a1Monog') };

$.ou23Monog              = function () { corpoSubtopico('ou23Monog') };

$.mais3Monog             = function () { corpoSubtopico('mais3Monog') };

$.autEntMonog            = function () { corpoSubtopico('autEntMonog') };

$.ogMonog                = function () { corpoSubtopico('ogMonog') };

$.adMonog                = function () { corpoSubtopico('adMonog') };

$.autorMonog             = function () { corpoSubtopico('autorMonog') };

$.partMesmoMonog         = function () { corpoSubtopico('partMesmoMonog') };

$.partDifMonog           = function () { corpoSubtopico('partDifMonog') };

$.filVODocAud            = function () { corpoSubtopico('filVODocAud')};

$.docSonDocAud           = function () { corpoSubtopico('docSonDocAud')};

$.parteDocSonDocAud      = function () { corpoSubtopico('parteDocSonDocAud')};

$.todoPubPer             = function () { corpoSubtopico('todoPubPer') };

$.artPubPer              = function () { corpoSubtopico('artPubPer') };

$.legisDoc               = function () { corpoSubtopico('legisDoc') };

$.jurisDoc               = function () { corpoSubtopico('jurisDoc') };

$.atoANDoc               = function () { corpoSubtopico('atoANDoc') };

$.todoCEletronico        = function () { corpoSubtopico('todoCEletronico') };

$.parteCEletronico       = function () { corpoSubtopico('parteCEletronico') };

$.artCEletronico         = function () { corpoSubtopico('artCEletronico') };

$.jCEletronico           = function () { corpoSubtopico('jCEletronico') };

$.eventoCEletronico      = function () { corpoSubtopico('eventoCEletronico') };

$.juriCEletronico        = function () { corpoSubtopico('juriCEletronico') };

$.icoCEletronico         = function () { corpoSubtopico('icoCEletronico') };

$.cartoCEletronico       = function () { corpoSubtopico('cartoCEletronico') };

$.docExcCEletronico      = function () { corpoSubtopico('docExcCEletronico') };     

$.redesCEletronico       = function () { corpoSubtopico('redesCEletronico') }; 

$.parentescoCEspeciais   = function () { corpoSubtopico('parentescoCEspeciais') };

$.mesmoACEspeciais       = function () { corpoSubtopico('mesmoACEspeciais') };

$.mesmoAnoPCEspeciais    = function () { corpoSubtopico('mesmoAnoPCEspeciais') };

$.pubDifeCEspeciais      = function () { corpoSubtopico('pubDifeCEspeciais') };

$.fLocalCEspeciais       = function () { corpoSubtopico('fLocalCEspeciais') };

$.semEditoraCEspeciais   = function () { corpoSubtopico('semEditoraCEspeciais') };

$.semLocalEditCEspeciais = function () { corpoSubtopico('semLocalEditCEspeciais') }; 

$.semDataCEspeciais      = function () { corpoSubtopico('semDataCEspeciais') };


//listener que chama a função a cada click.

$("#monog").click($.monog);
$("#a1Monog").click($.a1Monog);
$("#ou23Monog").click($.ou23Monog);
$("#mais3Monog").click($.mais3Monog);
$("#autEntMonog").click($.autEntMonog);
$("#ogMonog").click($.ogMonog);
$("#adMonog").click($.adMonog);
$("#autorMonog").click($.autorMonog);
$("#partMesmoMonog").click($.partMesmoMonog);
$("#partDifMonog").click($.partDifMonog);

$("#correspondencia").click($.correspondencia);

$("#pubPer").click($.pubPer);
$("#todoPubPer").click($.todoPubPer);
$("#artPubPer").click($.artPubPer);

$("#trabCSC").click($.trabCSC);

$("#teseDTCC").click($.teseDTCC);

$("#doc").click($.doc);
$("#legisDoc").click($.legisDoc);
$("#jurisDoc").click($.jurisDoc);
$("#atoANDoc").click($.atoANDoc);

$("#civilCar").click($.civilCar);

$("#docAud").click($.docAud);
$("#filVODocAud").click($.filVODocAud);
$("#docSonDocAud").click($.docSonDocAud);
$("#parteDocSonDocAud").click($.parteDocSonDocAud);

$("#iconografico").click($.iconografico);
$("#cartografico").click($.cartografico);

$("#patentes").click($.patentes);

$("#cEletronico").click($.cEletronico);
$("#todoCEletronico").click($.todoCEletronico);
$("#parteCEletronico").click($.parteCEletronico);
$("#artCEletronico").click($.artCEletronico);
$("#jCEletronico").click($.jCEletronico);
$("#eventoCEletronico").click($.eventoCEletronico);
$("#juriCEletronico").click($.juriCEletronico);
$("#icoCEletronico").click($.icoCEletronico);
$("#cartoCEletronico").click($.cartoCEletronico);
$("#docExcCEletronico").click($.docExcCEletronico);
$("#redesCEletronico").click($.redesCEletronico);

$("#cEspeciais").click($.cEspeciais);
$("#parentescoCEspeciais").click($.parentescoCEspeciais);
$("#mesmoACEspeciais").click($.mesmoACEspeciais);
$("#mesmoAnoPCEspeciais").click($.mesmoAnoPCEspeciais);
$("#pubDifeCEspeciais").click($.pubDifeCEspeciais);
$("#fLocalCEspeciais").click($.fLocalCEspeciais);
$("#semEditoraCEspeciais").click($.semEditoraCEspeciais);
$("#semLocalEditCEspeciais").click($.semLocalEditCEspeciais);
$("#semDataCEspeciais").click($.semDataCEspeciais);

//Serve para abrir um tópico ou subtópico a partir do index, através de parâmetros na URL.
switch($.urlParam('topico'))
{
    case "1": $.monog();
        switch($.urlParam('subtopico'))
        {
            case "1":
                $.a1Monog();
                break;
            case "2":
                $.ou23Monog();
                break;
            case "3":
                $.mais3Monog();
                break;
            case "4":
                $.autEntMonog();
                break;
            case "5":
                $.ogMonog();
                break;
            case "6":
                $.adMonog();
                break;
            case "7":
                $.autorMonog();
                break;
            case "8":
                $.partMesmoMonog();
                break;
            case "9":
                $.partDifMonog();
                break;
            default:
                break;
        }
        break;

    case "2":
        $.correspondencia();
    break;

    case "3":
        $.pubPer();
        switch($.urlParam('subtopico'))
        {
            case "1":
                $.todoPubPer();
                break;
            case "2":
                $.artPubPer();
                break;
            default:
                break;
        }
        break;
    case "4":
        $.trabCSC();
        break;
    case "5":
        $.teseDTCC();
        break;
    case "6":
        $.doc();
        switch($.urlParam('subtopico'))
        {
            case "1":
                $.legisDoc();
                break;
            case "2":
                $.jurisDoc();
                break;
            case "3":
                $.atoANDoc();
                break;
            default:
                break;
        }
        break;

    case "7":
        $.civilCar();
    break;

    case "8":
        $.docAud();
        switch ($.urlParam('subtopico')) 
        {
            case "1":
                $.filVODocAud();
                break;
            case "2":
                $.docSonDocAud();
                break;
            case "3":
                $.parteDocSonDocAud();
                break;
            default:
                break;
        }
        break;

    case "9":
        $.iconografico();
        break;

    case "10":
        $.cartografico();
        break;

    case "11":
        $.patentes();
        break;

    case "12":
        $.cEletronico();
        switch ($.urlParam('subtopico'))
        {
            case "1":
                $.todoCEletronico();
                break;
            case "2":
                $.parteCEletronico();
                break;
            case "3":
                $.artCEletronico();
                break;
            case "4":
                $.jCEletronico();
                break;
            case "5":
                $.eventoCEletronico();
                break;
            case "6":
                $.juriCEletronico();
                break;
            case "7":
                $.icoCEletronico();
                break;
            case "8":
                $.cartoCEletronico();
                break;
            case "9":
                $.docExcCEletronico();
                break;
            case "10":
                $.redesCEletronico();
                break;
            default:
                break;
        }
        break;
    case "13":
        $.cEspeciais();
        switch($.urlParam('subtopico'))
        {
            case "1":
                $.parentescoCEspeciais();
                break;
            case "2":
                $.mesmoACEspeciais();
                break;
            case "3":
                $.mesmoAPCEspeciais();
            case "4":
                $.pubDifeCEspeciais();
                break;
            case "5":
                $.fLocalCEspeciais();
                break;
            case "6":
                $.semEditoraCEspeciais();
                break;
            case "7":
                $.semLocalEditCEspeciais();
                break;
            case "8":
                $.semDataCEspeciais();
                break;
            default:
                break;
        }
}

    //window.location.href = "/formatacao-grafica/referencias.html";
