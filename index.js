// 




document.addEventListener("keypress", function(e) {
    let codeAsci = document.querySelector(".codeAsci");
    let nameAsci = document.querySelector(".nameAsci");
    let key = document.querySelector(".key");
    let SpanCode = document.querySelector(".SpanCode");

    codeAsci.innerText = `${e.charCode}`;
    nameAsci.innerText = `${String.fromCharCode(e.charCode)}`;
    key.innerText = `key: ${String.fromCharCode(e.charCode)}`;
    SpanCode.innerText = `code: ${e.charCode}`;



});