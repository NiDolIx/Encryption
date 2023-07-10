export default class RSA {
    #alfavit = [
        'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 
        'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 
        'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я', 
        ' ', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
    ]; // Алфавит

    #massage;

    constructor(massage) {
        this.#massage = massage.trim().toLowerCase();
    }

    // Метод шифрования
    encodeRSA(p, q) {
        Array.from(this.#massage);

        let result = new Array();
        
        let big = null;

        let n = BigInt(p * q);

        let m = (p - 1) * (q - 1);

        let d = this.#calculateD(m);

        let e = this.#calculateE(d, m);
        
        for (let i = 0; i < this.#massage.length; i++) {
            let index = this.#alfavit.indexOf(this.#massage[i]);
 
            big = BigInt(index);

            big **= BigInt(e); 
 
            big %= n;
 
            result.push(String(big));
        }
 
        return result.join('.');
    }

    // Метод дешифрования
    decodeRSA(d, n) {
        let massage = this.#massage.split('.');

        let result = "";
 
        let big = null;

        massage.forEach(element => {
            big = BigInt(element);

            big **= BigInt(d);
    
            big %= BigInt(n);
    
            let index = Number(big);
    
            result += this.#alfavit[index];
        })
    
        return result;
    }

    // Метод для расчёта числа e
    #calculateE(d, m) {
        let e = 10;
    
        while (true) {
            if((e * d) % m == 1) {
                break;
            }
            else {
                e++;
            }
        }
    
        return e;
    }

    // Метод для расчёта числа d
    #calculateD(m) {
        let d = m - 1;
    
        for(let i = 2; i <= m; i++) {
            if((m % i == 0) && (d % i == 0)) {
                d--;

                i = 1;
            }
        }
    
        return d;
    }

    // Метод проверки на простое число
    #checkNumberEasy(p) {
        if(p <= 1) {
            return false;
        }

        if(p == 2) {
            return true;
        }

        for(let i = 2; i < p; i++) {
            if((p % i) == 0) {
                return false;
            }
        }

        return true;    
    }
}