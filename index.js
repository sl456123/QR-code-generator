const qrText = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const qrContainer = document.querySelector(".qr-body");



let size = sizes.value;
generateBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    isEmptyInput();
});

sizes.addEventListener("change",(e)=>{
    size = e.target.value;
    isEmptyInput();
});

function isEmptyInput(){
    if(qrText.value.length > 0){
        generateQrCode();
    }
    else{
        alert("Enter the text or URL to generate your QR code");
    }   
    qrText.value.length > 0 ? generateQrCode : alert("Enter ;the text or URL to generate your QR code");

};

function generateQrCode(){
    qrContainer.innerHTML = "";
    new QRCode(qrContainer,{
    text:qrText.value,
    height:size,
    width:size,
    colorLight:"#ffff",
    colorDark: "#000",
    });
}
