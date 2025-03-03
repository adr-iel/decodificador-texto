let textArea = document.querySelector("#texto-principal");
textArea.addEventListener('input', autoResize, false);

function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}

function criptografa() {
    var campoTexto = document.getElementById("texto-principal");
    var btnCryptography = document.querySelector("#criptografar");

    btnCryptography.addEventListener("click", function (event) {
        event.preventDefault();
        const textoCriptografado = criptografaTexto(campoTexto.value);

        var campoVazio = document.querySelector(".sem-retorno");
        campoVazio.classList.add("d-none");

        var campoPreenchido = document.querySelector(".texto-criptografado");
        campoPreenchido.classList.remove("d-none");

        var paragrafo = document.querySelector(".texto-criptografado p");

        var minusculas = textoCriptografado.toLowerCase();

        //verifica se tem caracter especial
        function temCaracterEspecial(str) {
            const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
            return specialChars.test(str);
        }

        //verificar se o texto tem acento
        var comAcento = textoCriptografado;
        var semAcento = comAcento.normalize("NFD");

        if (textoCriptografado === minusculas && textoCriptografado === semAcento && temCaracterEspecial(textoCriptografado) == false) {
            paragrafo.textContent = textoCriptografado;
        } else {
            paragrafo.textContent = "Apenas letras minúsculas e sem acento."
        }
    })
}

criptografa();

function descriptografa() {
    var campoTexto = document.getElementById("texto-principal");
    var btnCryptography = document.querySelector("#descriptografar");

    btnCryptography.addEventListener("click", function (event) {
        event.preventDefault();
        const textoDescriptografado = descriptografaTexto(campoTexto.value);

        var campoVazio = document.querySelector(".sem-retorno");
        campoVazio.classList.add("d-none");

        var campoPreenchido = document.querySelector(".texto-criptografado");
        campoPreenchido.classList.remove("d-none");

        var paragrafo = document.querySelector(".texto-criptografado p");

        //Verificar se tem letra minuscula
        var minusculas = textoDescriptografado.toLowerCase();

        //verificar se tem caracter especial
        function temCaracterEspecial(str) {
            const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
            return specialChars.test(str);
        }

        //verificar se o texto tem acento
        var comAcento = textoDescriptografado;
        var semAcento = comAcento.normalize("NFD");

        if (textoDescriptografado === minusculas && textoDescriptografado === semAcento && temCaracterEspecial(textoDescriptografado) == false) {
            paragrafo.textContent = textoDescriptografado;
        } else {
            paragrafo.textContent = "Apenas letras minúsculas e sem acento."
        }
    })
}

descriptografa();

var listaCriptografica = ["enter", "imes", "ai", "ober", "ufat"];
var listaNormal = ["e", "i", "a", "o", "u"];

const cifrasParaCriptografar = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
}

const cifrasParaDescriptografar = {
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u"
}

function criptografaTexto(texto) {
    let textoConvertido = texto;
    listaNormal.forEach(function (letra) {
        textoConvertido = textoConvertido.replaceAll(letra, cifrasParaCriptografar[letra])
    })
    return textoConvertido;
}

function descriptografaTexto(texto) {
    let textoParaConverter = texto;
    listaCriptografica.forEach(function (letra) {
        textoParaConverter = textoParaConverter.replaceAll(letra, cifrasParaDescriptografar[letra])
    })
    return textoParaConverter;
}

function copiarTexto() {
    let textoCopiado = document.querySelector(".texto-criptografado p");
    var btnCopy = document.querySelector("#copiar");
    btnCopy.addEventListener("click", function () {
        navigator.clipboard.writeText(textoCopiado.innerText);
        location.reload();
    })
}