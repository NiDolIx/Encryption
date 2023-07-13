// Функция проверки на пустоту данных для метода Виженера
function checkV(key, text) {
    let _key = key.value;
    let _text = text.value;
    
    if(Number(_key) || Number(_text)) {
        return false;
    }
    
    else {
        if(!_key.trim() && !_text.trim()) {
            changeStyleError(key, text);
    
            return false;
        }
    
        else if(!_key.trim() && _text.trim()) {
            changeStyleError(key);
    
            changeStyleDefault(text);
    
            return false;
        }
    
        else if(!_text.trim() && _key.trim()) {
            changeStyleError(text);
    
            changeStyleDefault(key);
    
            return false;
        }
    
        else {
            changeStyleDefault(key, text);
    
            return true;
        }
    }
}

// Функция изменения стилей в случае ошибок
function changeStyleError(...value) {
    value.forEach(element => {
        element.style.borderColor = "red";
        element.style.backgroundColor = "#ffbfbf";
    });
}

// Функция возвращения стилей к нормальному виду
function changeStyleDefault(...value) {
    value.forEach(element => {
        element.style.borderColor = "#000";
        element.style.backgroundColor = "#fff";
    });
}

export { checkV };