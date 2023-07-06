import Vizhener from "./Vizhener.js";
import RSA from "./RSA.js";

document.getElementById('vEncodeBtn').addEventListener('click', function() {
    const text = document.getElementById('textInputEncode').value;
    const key = document.getElementById('textKey').value;

    let result = new Vizhener(key, text);

    document.getElementById('textOutputEncode').value = result.encode();
});

document.getElementById('vDecodeBtn').addEventListener('click', function() {
    const text = document.getElementById('textInputDecode').value;
    const key = document.getElementById('textKey').value;

    let result = new Vizhener(key, text);

    document.getElementById('textOutputDecode').value = result.decode();
});