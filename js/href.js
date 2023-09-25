var window = window;

//este endereco é preparado para apenas para ir até o nível 2 da árvore. Exemplo: estrutura(nivel 0)/listas(nivel 1)/ilustracoes.html(nivel 2). Se precisar de mais um nível, por favor colocar.

var endereco = function(cod,fun){
    var myIndice = 0;
    var indiceCodigo = 0;
    var caminho = "/";
    var diretorio1 = ['','formatacao-grafica/','estrutura/',''];
    var diretorio2 = ['','listas/'];
    var indiceDir2 = 0;
    //var indiceDir2Backup = 0; // se houver mais de um diretorio igual ao listas/, esse aqui vai ajudar!

    //O índice deve ser correspondente ao que está o nome do arquivo. Isso acha o índice de onde está o código no "BD".
    var codigo =['AA','AC','AD','AE','AF','AG','AH','AI','AJ','AK','AL','AM','AN','AO','AP','AQ','AR','AS','AT','AU','AV','AW','NAW','AX','AY','AZ','BA','BB','BC','BD','BE','BF','BG','BH'];
    for(var m = 0; m<codigo.length; m++){
        if(cod === codigo[m]){
            indiceCodigo = m;
            break;
        }
    }
    //Determina se é para achar o próximo, anterior ou ele mesmo.
    switch(fun){
        case "a":
            indiceCodigo--;
            break;
        case "p":
            indiceCodigo++;
            break;
        default:
            break;
    }
    //começa a maratona para achar o nome do arquivo.
        var i = 0;
        var j = 0;
        var k = 0;
        var arq = [
                ['index'],
               ['introducao',
                'margem',
                'formatacao-fontes',
                'espacamento',
                'numeracao-progressiva',
                'paginacao',
                'equacoes',
                'ilustracoes',
                'tabelas',
                'citacoes',
                'notas-de-rodape',
                'referencias'],
               ['introducao',
                'capa',
                'folha-de-rosto',
                'ficha-catalografica',
                'errata',
                'folha-de-aprovacao',
                'dedicatoria',
                'agradecimentos',
                'epigrafe',
                'resumo',
                ['ilustracoes',
                'tabelas',
                'abreviacoes-e-siglas',
                'simbolos'],
                'sumario',
                'elementos-textuais',
                'glossario',
                'apendice',
                'anexo',
                'indice'],
                ['conclusao']
               ];

        //loop para encontrar o caminho do arquivo.
            for(i = 0;i<arq.length;i++){
                if(Array.isArray(arq[i])){
                    for(j = 0; j<arq[i].length;j++){

                        if(Array.isArray(arq[i][j])){
                            //indiceDir2Backup++;
                            indiceDir2++;
                            for(k = 0;k < arq[i][j].length;k++){
                                if(myIndice == indiceCodigo){
                                    return caminho+diretorio1[i]+diretorio2[indiceDir2]+arq[i][j][k]+".html";
                                }
                                myIndice++;
                            }
                            indiceDir2--;
                        } else {
                            if(myIndice == indiceCodigo){
                                return caminho+diretorio1[i]+diretorio2[indiceDir2]+arq[i][j]+".html";
                            }
                            myIndice++;
                        }
                    }
                } else {
                    if(myIndice == indiceCodigo)
                        return caminho+diretorio1[i]+diretorio2[indiceDir2]+arq[i]+".html";
                    myIndice++;
                }
            }

}


/*
Para efeitos de toc. Quando adicionar novo coloque um N antes do novo código.
EX: Se for adicionar um antes de Margem. NAD: Coisa Nova.

Tabela de Códigos:
    AA : Index;
    AC : formatação Gráfica;
    AD : Margem;
    AE : Tipos e Tamanhos de Fontes;
    AF : Espaçamento entre Linhas;
    AG : Numeração Progressiva;
    AH : Paginação;
    AI : Equações;
    AJ : Ilustrações;
    AK : Tabelas;
    AL : Citações;
    AM : Notas de Rodapé;
    AN : Referências;
    AO : Estrutura;
    AP : Capa;
    AQ : Folha de Rosto;
    AR : Ficha Catalográfica;
    AS : Errata
    AT : Folha de Aprovação;
    AU : Dedicatória;
    AV : Agradecimentos;
    AW : Epígrafe;
    NAW: Resumo;
    AX : Lista de Ilustração;
    AY : Lista de Tabelas;
    AZ : Lista de Abreviações e Siglas;
    BA : Lista de Símbolos;
    BB : Sumário;
    BC : Elementos Textuais;
    BD : Glossário;
    BE : Apêndice;
    BF : Anexo;
    BG : Índice;
    BH : Conclusao;

*/

var vaiPara = function (cod,fun){
    window.location.href = endereco(cod,fun);
}
var vaiParaId = function (cod,fun,topico,subtopico,id){
    window.location.href = endereco(cod,fun) + "?topico="+topico+"&subtopico="+subtopico+"#"+id;
}
