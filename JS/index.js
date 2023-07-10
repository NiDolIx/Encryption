import Vizhener from "./Vizhener.js";
import RSA from "./RSA.js";

// Обработка кнопки "Зашифровать" метода Виженера
document.getElementById('vEncodeBtn').addEventListener('click', function() {
    const text = document.getElementById('textInputEncodeV');
    const key = document.getElementById('textKey');

    if(checkV(key, text)) {
        let result = new Vizhener(key.value, text.value);

        document.getElementById('textOutputEncodeV').value = result.encode();
    }

    else {
        alert("Введите шифруемое и ключевое слова!");
    }
});

// Обработка кнопки "Расшифровать" метода Виженера
document.getElementById('vDecodeBtn').addEventListener('click', function() {
    const text = document.getElementById('textInputDecodeV');
    const key = document.getElementById('textKey');

    if(checkV(key, text)) {
        let result = new Vizhener(key.value, text.value);

        document.getElementById('textOutputDecodeV').value = result.decode();
    }

    else {
        alert("Введите шифруемое и ключевое слова!");
    }
});

// Обработка кнопки "Зашифровать" метода RSA
document.getElementById('RSAEncodeBtn').addEventListener('click', function() {
    const text = document.getElementById('textInputEncodeRSA').value;
    const p = document.getElementById('p').value;
    const q = document.getElementById('q').value;

    let result = new RSA(text);

    document.getElementById('textOutputEncodeRSA').value = result.encodeRSA(p, q);
});

// Обработка кнопки "Расшифровать" метода RSA
document.getElementById('RSADecodeBtn').addEventListener('click', function() {
    const text = document.getElementById('textInputDecodeRSA').value;
    const d = document.getElementById('d').value;
    const n = document.getElementById('n').value;

    let result = new RSA(text);

    document.getElementById('textOutputDecodeRSA').value = result.decodeRSA(d, n);
});

// Функция проверки на пустоту данных для метода Виженера
function checkV(key, text) {
    if(!key.value.trim()) {
        key.style.borderColor = "red";

        return false;
    }

    else if(!text.value.trim()) {
        text.style.borderColor = "red";

        return false;
    }

    else {
        key.style.borderColor = "#000";
        text.style.borderColor = "#000";
        return true;
    }
}