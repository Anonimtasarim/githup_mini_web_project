document.addEventListener('DOMContentLoaded', () => {
    const sayaçEkran = document.querySelector('.sayaçEkran');
    const başlatBtn = document.getElementById('başlat');
    const durdurBtn = document.getElementById('durdur');
    const artırBtn = document.getElementById('artır');
    const azaltBtn = document.getElementById('azalt');

    let sayaçZamanlayıcı;
    let saniye = 0;
    let dakika = 0;
    let çalışıyor = false;

    function formatZaman(zaman) {
        return zaman < 10 ? `0${zaman}` : zaman;
    }

    function güncelleSayaçEkranı() {
        sayaçEkran.textContent = `${formatZaman(dakika)}:${formatZaman(saniye)}`;
    }

    function başlatSayaç() {
        if (!çalışıyor) {
            çalışıyor = true;
            sayaçZamanlayıcı = setInterval(() => {
                saniye++;
                if (saniye === 60) {
                    saniye = 0;
                    dakika++;
                }
                güncelleSayaçEkranı();
            }, 1000);
            başlatBtn.querySelector('i').className = 'fa-solid fa-pause';
        } else {
            durdurSayaç();
        }
    }

    function durdurSayaç() {
        if (çalışıyor) {
            clearInterval(sayaçZamanlayıcı);
            çalışıyor = false;
            başlatBtn.querySelector('i').className = 'fa-solid fa-play';
        } else {
            sıfırlaSayaç();
        }
    }

    function sıfırlaSayaç() {
        clearInterval(sayaçZamanlayıcı);
        çalışıyor = false;
        saniye = 0;
        dakika = 0;
        güncelleSayaçEkranı();
        başlatBtn.querySelector('i').className = 'fa-solid fa-play';
    }

    function artırSüre() {
        saniye += 30;
        if (saniye >= 60) {
            dakika += Math.floor(saniye / 60);
            saniye = saniye % 60;
        }
        güncelleSayaçEkranı();
    }

    function azaltSüre() {
        saniye -= 30;
        if (saniye < 0) {
            if (dakika > 0) {
                dakika--;
                saniye += 60;
            } else {
                saniye = 0;
            }
        }
        güncelleSayaçEkranı();
    }

    başlatBtn.addEventListener('click', başlatSayaç);
    durdurBtn.addEventListener('click', durdurSayaç);
    artırBtn.addEventListener('click', artırSüre);
    azaltBtn.addEventListener('click', azaltSüre);
});