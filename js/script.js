let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;


const palavras = [
    palavra001 = {
        nome: "IRLANDA",
        categoria: "lugares"
    },


    palavra002 = {
        nome: "EQUADOR",
        categoria: "lugares"
    },

    palavra003 = {
        nome: "FRANÇA",
        categoria: "lugares"
    },

    palavra004 = {
        nome: "BRASIL",
        categoria: "lugares"
    },

    palavra005 = {
        nome: "ARGENTINA",
        categoria: "lugares"
    },

    palavra006 = {
        nome: "NORUEGA",
        categoria: "lugares"
    },

    palavra007 = {
        nome: "PORTUGUAL",
        categoria: "lugares"
    },

    palavra008 = {
        nome: "PARIS",
        categoria: "lugares"
    },

    palavra009 = {
        nome: "EGITO",
        categoria: "lugares"
    },

    palavra0010 = {
        nome: "LONDRES",
        categoria: "lugares"
    },


    palavra011 = {
        nome: "BICICLETA",
        categoria: "transportes"
    },

    palavra012 = {
        nome: "ONIBUS",
        categoria: "transportes"
    },

    palavra013 = {
        nome: "AVIAO",
        categoria: "transportes"
    },

    palavra014 = {
        nome: "MOTO",
        categoria: "transportes"
    },

    palavra015 = {
        nome: "JATO",
        categoria: "transportes"
    },

    palavra016 = {
        nome: "CAMINHAO",
        categoria: "transportes"
    },

    palavra017 = {
        nome: "IATE",
        categoria: "transportes"
    },

    palavra018 = {
        nomE: "NAVIO",
        categoria: "transportes"
    },

    palavra019 = {
        nome: "JETSKY",
        categoria: "transportes"
    },

    palavra020 = {
        nome: "CRUZEIRO",
        categoria: "transportes"
    },

    palavra021 = {
        nome: "FALCAO",
        categoria: "animais"
    },

    palavra022 = {
        nome: "LEAO",
        categoria: "animais"
    },

    palavra023 = {
        nome: "ONCA",
        categoria: "animais"
    },

    palavra024 = {
        nome: "AGUIA",
        categoria: "animais"
    },

    palavra025 = {
        nome: "HIPOPOTAMO",
        categoria: "animais"
    },

    palavra026 = {
        nome: "GIRAFA",
        categoria: "animais"
    },

    palavra027 = {
        nome: "LONTRA",
        categoria: "animais"
    },

    palavra028 = {
        nome: "PANDA",
        categoria: "animais"
    },

    palavra029 = {
        nome: "GORILA",
        categoria: "animais"
    },

    palavra030 = {
        nome: "PANTERA",
        categoria: "animais"
    },

    palavra031 = {
        nome: "MOUSE",
        categoria: "objetos"
    },

    palavra032 = {
        nome: "GARFO",
        categoria: "objetos"
    },

    palavra033 = {
        nome: "VIDEO GAME",
        categoria: "objetos"
    },

    palavra034 = {
        nome: "BOLA",
        categoria: "objetos"
    },

    palavra035 = {
        nome: "MESA",
        categoria: "objetos"
    },

    palavra036 = {
        nome: "GUARDA ROUPA",
        categoria: "objetos"
    },

    palavra037 = {
        nome: "QUADRO",
        categoria: "objetos"
    },

    palavra038 = {
        nome: "ALICATE",
        categoria: "objetos"
    },

    palavra039 = {
        nome: "RELOGIO",
        categoria: "objetos"
    },

    palavra040 = {
        nome: "PEN DRIVE",
        categoria: "objetos"
    },

    palavra041 = {
        nome: "FENRIR",
        categoria: "mitologicos"
    },

    palavra042 = {
        nome: "MEDUSA",
        categoria: "mitologicos"
    },

    palavra043 = {
        nome: "KRAKEN",
        categoria: "mitologicos"
    },

    palavra044 = {
        nome: "THOR",
        categoria: "mitologicos"
    },

    palavra045 = {
        nome: "LOKI",
        categoria: "mitologicos"
    },

    palavra046 = {
        nome: "DRAUGR",
        categoria: "mitologicos"
    },

    palavra047 = {
        nome: "ZEUS",
        categoria: "mitologicos"
    },

    palavra048 = {
        nome: "POSEIDON",
        categoria: "mitologicos"
    },

    palavra049 = {
        nome: "HADES",
        categoria: "mitologicos"
    },

    palavra050 = {
        nome: "ATHENA",
        categoria: "mitologicos"
    },

    palavra051 = {
        nome: "MACA",
        categoria: "frutas"
    },

    palavra052 = {
        nome: "PERA",
        categoria: "frutas"
    },

    palavra053 = {
        nome: "MANGA",
        categoria: "frutas"
    },

    palavra054 = {
        nome: "UVA",
        categoria: "frutas"
    },

    palavra055 = {
        nome: "GRAVIOLA",
        categoria: "frutas"
    },

    palavra056 = {
        nome: "CARAMBOLA",
        categoria: "frutas"
    },

    palavra057 = {
        nome: "JACA",
        categoria: "frutas"
    },

    palavra058 = {
        nome: "BANANA",
        categoria: "frutas"
    },

    palavra059 = {
        nome: "GUARANA",
        categoria: "frutas"
    },

    palavra060 = {
        nome: "MORANGO",
        categoria: "frutas"
    },

    palavra061 = {
        nome: "HOMEM ARANHA",
        categoria: "personagens"
    },

    palavra062 = {
        nome: "CAPITAO AMERICA",
        categoria: "personagens"
    },

    palavra063 = {
        nome: "KRATOS",
        categoria: "personagens"
    },

    palavra064 = {
        nome: "HOMEM DE FERRO",
        categoria: "personagens"
    },

    palavra065 = {
        nome: "DEMOLIDOR",
        categoria: "personagens"
    },

    palavra066 = {
        nome: "HULK",
        categoria: "personagens"
    },

    palavra067 = {
        nome: "LOKI",
        categoria: "personagens"
    },

    palavra068 = {
        nome: "MS MARVEL",
        categoria: "personagens"
    },

    palavra069 = {
        nome: "VIUVA NEGRA",
        categoria: "personagens"
    },

    palavra070 = {
        nome: "GERALT",
        categoria: "personagens"
    },

    palavra071 = {
        nome: "PERCY JACKSON",
        categoria: "filmes/serie"
    },

    palavra072 = {
        nome: "THE WITCHER",
        categoria: "filmes/serie"
    },

    palavra073 = {
        nome: "STRANGER THINGS",
        categoria: "filmes/serie"
    },

    palavra074 = {
        nome: "VIKINGS",
        categoria: "filmes/serie"
    },

    palavra075 = {
        nome: "SENHOR DOS ANEIS",
        categoria: "filmes/serie"
    },

    palavra076 = {
        nome: "VINGADORES",
        categoria: "filmes/serie"
    },

    palavra077 = {
        nome: "VELOZES E FURIOSOS",
        categoria: "filmes/serie"
    },

    palavra078 = {
        nome: "MATRIX",
        categoria: "filmes/serie"
    },

    palavra079 = {
        nome: "FABRICA DE CHOCOLATE",
        categoria: "filmes/serie"
    },

    palavra080 = {
        nome: "MULAN",
        categoria: "filmes/serie"
    },

];


criarPalavraSecreta();

function criarPalavraSecreta() {
    const indexPalavra = parseInt(Math.random() * palavras.length)

    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;

    console.log(palavraSecretaSorteada)
    console.log(palavraSecretaCategoria)
}


montarPalavraNaTela();

function montarPalavraNaTela() {

    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";

    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (listaDinamica[i] == undefined) {
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>";
        } else {
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>";
        }
    }

}



function verificaLetraEscolhida(letra) {
    if (tentativas > 0) {
        mudarStyleLetra("tecla-" + letra);
        comparaListas(letra);
        montarPalavraNaTela();
    }



}

function mudarStyleLetra(tecla) {
    document.getElementById(tecla).style.background = "#c71585";
    document.getElementById(tecla).style.color = "#ffffff";
}

function comparaListas(letra) {
    const pos = palavraSecretaSorteada.indexOf(letra)
    if (pos < 0) {
        tentativas--
        carregaImagemForca();
        // verificar tentativas//

    } else {
        for (i = 0; i < palavraSecretaSorteada.length; i++) {
            if (palavraSecretaSorteada[i] == letra) {
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (palavraSecretaSorteada[i] != listaDinamica[i]) {
            vitoria = false;
        }
    }

    if (vitoria == true) {
        //mensagem na tela //
        tentativas = 0;
    }


}

function carregaImagemForca() {
    switch (tentativas) {
        case 5:
            document.getElementById("imagem").style.background = "url('./imagem/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('./imagem/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('./imagem/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('./imagem/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('./imagem/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('./imagem/forca06.png')";
            break;

        default:
            document.getElementById("imagem").style.background = "url('./imagem/forca.png')";
            break;
    }
}