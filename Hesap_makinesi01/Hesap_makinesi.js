let sonuç = document.querySelector("#sonuç");
let butons = document.querySelector(".buttons");
let clear = document.querySelector(".clear");
let remowe = document.querySelector(".delete");
let operator = document.querySelectorAll(".operator");
let integer = document.querySelectorAll(".integer");
let decimal = document.querySelector(".decimal");
let equals = document.querySelector(".equals");

runevents();

function runevents(){
  integer.forEach(btn =>{
      btn.addEventListener("click",degeral);
  });
  operator.forEach(op =>{
      op.addEventListener("click",degeral);
  })
   decimal.addEventListener("click",degeral);
   clear.addEventListener("click",tümünüsil);
   remowe.addEventListener("click",sil);
   equals.addEventListener("click",hesapla)
}

function degeral(e){
    let initdeger = e.target.innerText.trim();
    if(sonuç.innerText === "0"){
        sonuç.innerText = initdeger;
    }else{
        sonuç.innerText += initdeger;
    }
    // console.log(initdeger)
    // // sonuç.innerText += initdeger
}
function tümünüsil(e){
    sonuç.innerText = "0";
}
function sil(e){
    sonuç.innerText = sonuç.innerText.slice(0, -1);
    if (sonuç.innerText === "") {
        sonuç.innerText = "0";
    }
 }

 function hesapla(e) {
    let deger = sonuç.innerText;
    deger = deger.replace(/×/g, "*").replace(/÷/g, "/");
    try {
        let cevap = eval(deger);

        if (isNaN(cevap) || !isFinite(cevap)) {
            sonuç.innerText = "Hata";
        } else {
            // Ondalık kısaltma (4 basamak örneği)
            if (typeof cevap === "number" && !Number.isInteger(cevap)) {
                cevap = parseFloat(cevap.toFixed(4));
            }
            sonuç.innerText = cevap;
        }
    } catch {
        sonuç.innerText = "Hata";
    }
}
