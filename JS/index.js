import Vizhener from "./Vizhener.js";

document.getElementById('vEncodeBtn').addEventListener('click', function() {
    const text = document.getElementById('textInputEncode').value;
    const key = document.getElementById('textKey').value;

    var result = new Vizhener(key, text);

    document.getElementById('textOutputEncode').value = result.encode();
});

document.getElementById('vDecodeBtn').addEventListener('click', function() {
    const text = document.getElementById('textInputDecode').value;
    const key = document.getElementById('textKey').value;

    var result = new Vizhener(key, text);

    document.getElementById('textOutputDecode').value = result.decode();
});