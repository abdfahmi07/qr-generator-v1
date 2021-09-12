let qrData = document.querySelector(".qr-data");
let generateBtn = document.querySelector(".generate-btn");
let qrCode = new QRCode(
  document.getElementById("qrcode"),
  "http://jindo.dev.naver.com/collie"
);

function generateQRCode() {
  let data = qrData.value;
  qrCode.makeCode(data);
}

generateBtn.addEventListener("click", function () {
  generateQRCode();
});
