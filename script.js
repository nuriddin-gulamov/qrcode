





let qrdata = document.querySelector("#qr-data");
let qrcode = new QRCode(document.querySelector("#qrcode"));

document.querySelector(".btn").onclick = function () {
    let data = qrdata.value;

    qrcode.makeCode(data);
}