var password = "hathaoxinhdep";
function passcheck() {
    if(document.getElementById('myInput').value != password) {
        alert('Sai mật khẩu ròi, thử lại đi!');
        return false;
    }
    if(document.getElementById('myInput').value == password) {
        alert('Ting ting nhập khẩu đúng ròi!')
    }
}