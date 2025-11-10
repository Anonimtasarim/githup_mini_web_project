const şifreekran = document.querySelector("#şifre");
const şifreüret = document.querySelector("#şifreÜret");

let küçükHarfler = "abcdefghijklmnopqrstuvwxyz";
let büyükHarfler = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let sayılar = "0123456789";
let semboller = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
şifrebut();
function şifrebut (){
  şifreüret.addEventListener("click",randomşifre)
}

function randomşifre(e){
  let şifreUzunluğu = 12;
  let tümkarakterler = küçükHarfler + büyükHarfler + sayılar + semboller;
  let şifre = "";   

  for(let i = 0; i< şifreUzunluğu; i++){
    let rasglelekarekter = Math.floor(Math.random() * tümkarakterler.length)
    şifre += tümkarakterler[rasglelekarekter];
    
  }  
  şifreekran.textContent = şifre;
}
