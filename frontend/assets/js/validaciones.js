function validarTxt(data) {
    if(data === null || data == 0 || /^\s+$/.test(data)) {
        return true;
    } else {
        return false;
    }
}

function validarPassword(password) {
    if ( password.length < 8 ) {
        return true;
    } else {
        return false;
    }
}
