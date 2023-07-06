export default class Vizhener {
    #alfavit = new Array(
        'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 
        'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 
        'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я',
        ' '
    );

    #key; #text;

    #col = this.#alfavit.length;

    constructor(key, text) {
        this.#key = Array.from(key.toLowerCase());
        this.#text = Array.from(text.toLowerCase());
    }

    // Шифрование методом Виженера
    encode() {
        let result = "";
        let keyIndex = 0;
        let symbol;

        this.#text.forEach(element => {
            symbol = this.#alfavit.indexOf(element) + this.#alfavit.indexOf(this.#key[keyIndex]);

            if(symbol > this.#col) {
                symbol -= this.#col;
            }

            result += this.#alfavit[symbol];
            
            keyIndex++;

            if((keyIndex + 1) == this.#key.length) { keyIndex = 0; }
        });

        return result;
    }

    // Дешифрование методом Виженера
    decode() {
        let result = "";
        let keyIndex = 0;
        let symbol;

        this.#text.forEach(element => {
            if(this.#alfavit.indexOf(element) < this.#alfavit.indexOf(this.#key[keyIndex])) {
                symbol = this.#alfavit.indexOf(element) + this.#col - this.#alfavit.indexOf(this.#key[keyIndex]);
            }

            else {
                symbol = this.#alfavit.indexOf(element) - this.#alfavit.indexOf(this.#key[keyIndex]);
            }

            result += this.#alfavit[symbol];
            
            keyIndex++;

            if((keyIndex + 1) == this.#key.length) { keyIndex = 0; }
        });

        return result;
    }
}