import Vizhener from "./Vizhener.js";
import RSA from "./RSA.js";

document.getElementById('vEncodeBtn').addEventListener('click', function() {
    const text = document.getElementById('textInputEncode');
    const key = document.getElementById('textKey');

    if(checkV(key, text)) {
        let result = new Vizhener(key.value, text.value);

        document.getElementById('textOutputEncode').value = result.encode();
    }

    else {
        alert("Введите шифруемое и ключевое слова!");
    }
});

document.getElementById('vDecodeBtn').addEventListener('click', function() {
    const text = document.getElementById('textInputDecode');
    const key = document.getElementById('textKey');

    if(checkV(key, text)) {
        let result = new Vizhener(key.value, text.value);

        document.getElementById('textOutputDecode').value = result.decode();
    }

    else {
        alert("Введите шифруемое и ключевое слова!");
    }
});

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