document.addEventListener("DOMContentLoaded", function () {
    let btcAddress = "bc1qyourbtcaddress...";
    let xmrAddress = "4A67nqyourxmraddress...";
    let ethAddress = "0xABCDyourETHaddress...";

    new QRCode(document.getElementById("btc-qr"), { text: btcAddress });
    new QRCode(document.getElementById("xmr-qr"), { text: xmrAddress });
    new QRCode(document.getElementById("eth-qr"), { text: ethAddress });
});
