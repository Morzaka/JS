function rot13(str) {  // LBH QVQ VG!

    return str.split('').map.call(str, function(symbol) {
        a = symbol.charCodeAt(0);

        if (a < 65 || a > 90) {
            return String.fromCharCode(a);
        } else if (a < 78) {
            return String.fromCharCode(a + 13);
        }
        return String.fromCharCode(a - 13);

    }).join('');
}

rot13("LBH QVQ VG");

