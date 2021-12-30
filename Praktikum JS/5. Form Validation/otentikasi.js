function Submit() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let time = document.getElementById('time').value;
    let dest = document.getElementById('dest').value;
    let num = document.getElementById('num').value;

    let emailPatt = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;

    if(name == ''){
        document.getElementById('errName').innerHTML = 'Nama pelanggan harus diisi!'
        return false;
    } 
    if(name.length > 30) {
        document.getElementById('errName').innerHTML = 'Maksimal 30 karakter'
        return false;
    } 
    if(email == '') {
        document.getElementById('errEmail').innerHTML = 'Email harus diisi!';
        return false;
    } 
    if (!emailPatt.test(email)){ 
        document.getElementById("errEmail").innerHTML = "Penulisan email tidak benar!";
        return false;
    }
    if(time == '') {
        document.getElementById('errTime').innerHTML = 'Waktu keberangkatan harus diisi!';
        return false;
    } 
    if(dest == '') {
        document.getElementById('errDest').innerHTML = 'Tujuan keberangkatan harus diisi!';
        return false;
    } 
    if(num == '') {
        error = 'Jumlah tiket harus diisi!';
        document.getElementById('errNum').innerHTML = 'Jumlah tiket harus diisi!';
        return false;
    } 
    if(num < 1) {
        document.getElementById('errNum').innerHTML = 'Jumlah tiket kurang dari batas minimum';
        return false;
    }
    if(num > 10) {
        document.getElementById('errNum').innerHTML = 'Jumlah tiket melebihi batas maksimum';
        return false;
    } else {
        document.getElementById('hasil').innerHTML = 'Tiket';
        document.getElementById('hName').innerHTML = 'Nama : ' + name;
        document.getElementById('hEmail').innerHTML = 'Email : ' + email;
        document.getElementById('hTime').innerHTML = 'Jam Berangkat : ' + time;
        document.getElementById('hDest').innerHTML = 'Destinasi : ' + dest;
        document.getElementById('hNum').innerHTML = 'Jumlah Tiket : ' + num;
        return false
    }
}