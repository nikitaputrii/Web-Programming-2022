function Login() {
    let uname = document.getElementById('uname').value;
    let pass = document.getElementById('pass').value;

    if(uname == 'nikita' && pass == 'niki123') {
        window.location.href = 'home.html';
        alert('Login sukses!');
        return false;
    } else {
        alert('Username atau password yang dimasukkan salah!');
        return false;
    }
}
