function toggleNav() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('show');
}

FontainecharacterNumber = 0;
InazumacharacterNumber = 0;
LiyuecharacterNumber = 0;
MonstadtcharacterNumber = 0;
NovinkycharacterNumber = 0;
SumerucharacterNumber = 0;

function FontaineSipkaL() {
  if (FontainecharacterNumber == 0)
    FontainecharacterNumber = 6;
  else
    FontainecharacterNumber--;

  if(FontainecharacterNumber == 0)
    document.getElementById("FontaineActiveChar").src="Obrazky/FontaineCharArlecchino.png"
  else if (FontainecharacterNumber == 1)
    document.getElementById("FontaineActiveChar").src="Obrazky/FontaineCharFurina.png"
  else if (FontainecharacterNumber == 2)
    document.getElementById("FontaineActiveChar").src="Obrazky/FontaineCharLynette.png"
  else if (FontainecharacterNumber == 3)
    document.getElementById("FontaineActiveChar").src="Obrazky/FontaineCharLyney.png"
  else if (FontainecharacterNumber == 4)
    document.getElementById("FontaineActiveChar").src="Obrazky/FontaineCharNavia.png"
  else if (FontainecharacterNumber == 5)
    document.getElementById("FontaineActiveChar").src="Obrazky/FontaineCharNeuvillette.png"
  else if (FontainecharacterNumber == 6)
    document.getElementById("FontaineActiveChar").src="Obrazky/FontaineCharWriothesley.png"

}

function FontaineSipkaR() {
  if (FontainecharacterNumber == 6)
    FontainecharacterNumber = 0;
  else
    FontainecharacterNumber++;

    if(FontainecharacterNumber == 0)
      document.getElementById("FontaineActiveChar").src="Obrazky/FontaineCharArlecchino.png"
    else if (FontainecharacterNumber == 1)
      document.getElementById("FontaineActiveChar").src="Obrazky/FontaineCharFurina.png"
    else if (FontainecharacterNumber == 2)
      document.getElementById("FontaineActiveChar").src="Obrazky/FontaineCharLynette.png"
    else if (FontainecharacterNumber == 3)
      document.getElementById("FontaineActiveChar").src="Obrazky/FontaineCharLyney.png"
    else if (FontainecharacterNumber == 4)
      document.getElementById("FontaineActiveChar").src="Obrazky/FontaineCharNavia.png"
    else if (FontainecharacterNumber == 5)
      document.getElementById("FontaineActiveChar").src="Obrazky/FontaineCharNeuvillette.png"
    else if (FontainecharacterNumber == 6)
      document.getElementById("FontaineActiveChar").src="Obrazky/FontaineCharWriothesley.png"

}

function InazumaSipkaL() {
  if (InazumacharacterNumber == 0)
    InazumacharacterNumber = 6;
  else
    InazumacharacterNumber--;

    if(InazumacharacterNumber == 0)
      document.getElementById("InazumaActiveChar").src="Obrazky/InazumaCharAyaka.png"
    else if (InazumacharacterNumber == 1)
      document.getElementById("InazumaActiveChar").src="Obrazky/InazumaCharEi.png"
    else if (InazumacharacterNumber == 2)
      document.getElementById("InazumaActiveChar").src="Obrazky/InazumaCharItto.png"
    else if (InazumacharacterNumber == 3)
      document.getElementById("InazumaActiveChar").src="Obrazky/InazumaCharKazuha.png"
    else if (InazumacharacterNumber == 4)
      document.getElementById("InazumaActiveChar").src="Obrazky/InazumaCharKirara.png"
    else if (InazumacharacterNumber == 5)
      document.getElementById("InazumaActiveChar").src="Obrazky/InazumaCharKokomi.png"
    else if (InazumacharacterNumber == 6)
      document.getElementById("InazumaActiveChar").src="Obrazky/InazumaCharThoma.png"

}

function InazumaSipkaR() {
  if (InazumacharacterNumber == 6)
    InazumacharacterNumber = 0;
  else
    InazumacharacterNumber++;

    if(InazumacharacterNumber == 0)
      document.getElementById("InazumaActiveChar").src="Obrazky/InazumaCharAyaka.png"
    else if (InazumacharacterNumber == 1)
      document.getElementById("InazumaActiveChar").src="Obrazky/InazumaCharEi.png"
    else if (InazumacharacterNumber == 2)
      document.getElementById("InazumaActiveChar").src="Obrazky/InazumaCharItto.png"
    else if (InazumacharacterNumber == 3)
      document.getElementById("InazumaActiveChar").src="Obrazky/InazumaCharKazuha.png"
    else if (InazumacharacterNumber == 4)
      document.getElementById("InazumaActiveChar").src="Obrazky/InazumaCharKirara.png"
    else if (InazumacharacterNumber == 5)
      document.getElementById("InazumaActiveChar").src="Obrazky/InazumaCharKokomi.png"
    else if (InazumacharacterNumber == 6)
      document.getElementById("InazumaActiveChar").src="Obrazky/InazumaCharThoma.png"

}

function LiyueSipkaL() {
  if (LiyuecharacterNumber == 0)
    LiyuecharacterNumber = 6;
  else
    LiyuecharacterNumber--;

  if(LiyuecharacterNumber == 0)
    document.getElementById("LiyueActiveChar").src="Obrazky/LiyueCharBeidou.png"
  else if (LiyuecharacterNumber == 1)
    document.getElementById("LiyueActiveChar").src="Obrazky/LiyueCharChongyun.png"
  else if (LiyuecharacterNumber == 2)
    document.getElementById("LiyueActiveChar").src="Obrazky/LiyueCharXiao.png"
  else if (LiyuecharacterNumber == 3)
    document.getElementById("LiyueActiveChar").src="Obrazky/LiyueCharXingqiu.png"
  else if (LiyuecharacterNumber == 4)
    document.getElementById("LiyueActiveChar").src="Obrazky/LiyueCharYanfei.png"
  else if (LiyuecharacterNumber == 5)
    document.getElementById("LiyueActiveChar").src="Obrazky/LiyueCharYaoyao.png"
  else if (LiyuecharacterNumber == 6)
    document.getElementById("LiyueActiveChar").src="Obrazky/LiyueCharZhongli.png"

}

function LiyueSipkaR() {
  if (LiyuecharacterNumber == 6)
    LiyuecharacterNumber = 0;
  else
    LiyuecharacterNumber++;

  if(LiyuecharacterNumber == 0)
    document.getElementById("LiyueActiveChar").src="Obrazky/LiyueCharBeidou.png"
  else if (LiyuecharacterNumber == 1)
    document.getElementById("LiyueActiveChar").src="Obrazky/LiyueCharChongyun.png"
  else if (LiyuecharacterNumber == 2)
    document.getElementById("LiyueActiveChar").src="Obrazky/LiyueCharXiao.png"
  else if (LiyuecharacterNumber == 3)
    document.getElementById("LiyueActiveChar").src="Obrazky/LiyueCharXingqiu.png"
  else if (LiyuecharacterNumber == 4)
    document.getElementById("LiyueActiveChar").src="Obrazky/LiyueCharYanfei.png"
  else if (LiyuecharacterNumber == 5)
    document.getElementById("LiyueActiveChar").src="Obrazky/LiyueCharYaoyao.png"
  else if (LiyuecharacterNumber == 6)
    document.getElementById("LiyueActiveChar").src="Obrazky/LiyueCharZhongli.png"

}

function MonstadtSipkaL() {
  if (MonstadtcharacterNumber == 0)
    MonstadtcharacterNumber = 6;
  else
    MonstadtcharacterNumber--;

  if(MonstadtcharacterNumber == 0)
    document.getElementById("MonstadtActiveChar").src="Obrazky/MonstadtCharBarbara.png"
  else if (MonstadtcharacterNumber == 1)
    document.getElementById("MonstadtActiveChar").src="Obrazky/MonstadtCharBennett.png"
  else if (MonstadtcharacterNumber == 2)
    document.getElementById("MonstadtActiveChar").src="Obrazky/MonstadtCharDiluc.png"
  else if (MonstadtcharacterNumber == 3)
    document.getElementById("MonstadtActiveChar").src="Obrazky/MonstadtCharKaeya.png"
  else if (MonstadtcharacterNumber == 4)
    document.getElementById("MonstadtActiveChar").src="Obrazky/MonstadtCharNoelle.png"
  else if (MonstadtcharacterNumber == 5)
    document.getElementById("MonstadtActiveChar").src="Obrazky/MonstadtCharRazor.png"
  else if (MonstadtcharacterNumber == 6)
    document.getElementById("MonstadtActiveChar").src="Obrazky/MonstadtCharVenti.png"

}

function MonstadtSipkaR() {
  if (MonstadtcharacterNumber == 6)
    MonstadtcharacterNumber = 0;
  else
    MonstadtcharacterNumber++;

  if(MonstadtcharacterNumber == 0)
    document.getElementById("MonstadtActiveChar").src="Obrazky/MonstadtCharBarbara.png"
  else if (MonstadtcharacterNumber == 1)
    document.getElementById("MonstadtActiveChar").src="Obrazky/MonstadtCharBennett.png"
  else if (MonstadtcharacterNumber == 2)
    document.getElementById("MonstadtActiveChar").src="Obrazky/MonstadtCharDiluc.png"
  else if (MonstadtcharacterNumber == 3)
    document.getElementById("MonstadtActiveChar").src="Obrazky/MonstadtCharKaeya.png"
  else if (MonstadtcharacterNumber == 4)
    document.getElementById("MonstadtActiveChar").src="Obrazky/MonstadtCharNoelle.png"
  else if (MonstadtcharacterNumber == 5)
    document.getElementById("MonstadtActiveChar").src="Obrazky/MonstadtCharRazor.png"
  else if (MonstadtcharacterNumber == 6)
    document.getElementById("MonstadtActiveChar").src="Obrazky/MonstadtCharVenti.png"

}

function NovinkySipkaL() {
  if (NovinkycharacterNumber == 0)
    NovinkycharacterNumber = 5;
  else
    NovinkycharacterNumber--;

  if(NovinkycharacterNumber == 0)
    document.getElementById("banner").src="Obrazky/WebsiteNovinkyBannerA.png"
  else if (NovinkycharacterNumber == 1)
    document.getElementById("banner").src="Obrazky/WebsiteNovinkyBannerL.png"
  else if (NovinkycharacterNumber == 2)
    document.getElementById("banner").src="Obrazky/WebsiteNovinkyBannerW1.png"
  else if (NovinkycharacterNumber == 3)
    document.getElementById("banner").src="Obrazky/WebsiteNovinkyBannerW.png"
  else if (NovinkycharacterNumber == 4)
    document.getElementById("banner").src="Obrazky/WebsiteNovinkyBannerB.png"
  else if (NovinkycharacterNumber == 5)
    document.getElementById("banner").src="Obrazky/WebsiteNovinkyBannerW2.png"

}

function NovinkySipkaR() {
  if (NovinkycharacterNumber == 5)
    NovinkycharacterNumber = 0;
  else
    NovinkycharacterNumber++;

    if(NovinkycharacterNumber == 0)
      document.getElementById("banner").src="Obrazky/WebsiteNovinkyBannerA.png"
    else if (NovinkycharacterNumber == 1)
      document.getElementById("banner").src="Obrazky/WebsiteNovinkyBannerL.png"
    else if (NovinkycharacterNumber == 2)
      document.getElementById("banner").src="Obrazky/WebsiteNovinkyBannerW1.png"
    else if (NovinkycharacterNumber == 3)
      document.getElementById("banner").src="Obrazky/WebsiteNovinkyBannerW.png"
    else if (NovinkycharacterNumber == 4)
      document.getElementById("banner").src="Obrazky/WebsiteNovinkyBannerB.png"
    else if (NovinkycharacterNumber == 5)
      document.getElementById("banner").src="Obrazky/WebsiteNovinkyBannerW2.png"

}

function SumeruSipkaL() {
  if (SumerucharacterNumber == 0)
    SumerucharacterNumber = 6;
  else
    SumerucharacterNumber--;

  if(SumerucharacterNumber == 0)
    document.getElementById("SumeruActiveChar").src="Obrazky/SumeruCharAlhaitham.png"
  else if (SumerucharacterNumber == 1)
    document.getElementById("SumeruActiveChar").src="Obrazky/SumeruCharCandace.png"
  else if (SumerucharacterNumber == 2)
    document.getElementById("SumeruActiveChar").src="Obrazky/SumeruCharCyno.png"
  else if (SumerucharacterNumber == 3)
    document.getElementById("SumeruActiveChar").src="Obrazky/SumeruCharDehya.png"
  else if (SumerucharacterNumber == 4)
    document.getElementById("SumeruActiveChar").src="Obrazky/SumeruCharLayla.png"
  else if (SumerucharacterNumber == 5)
    document.getElementById("SumeruActiveChar").src="Obrazky/SumeruCharNahida.png"
  else if (SumerucharacterNumber == 6)
    document.getElementById("SumeruActiveChar").src="Obrazky/SumeruCharWanderer.png"

}

function SumeruSipkaR() {
  if (SumerucharacterNumber == 6)
    SumerucharacterNumber = 0;
  else
    SumerucharacterNumber++;

    if(SumerucharacterNumber == 0)
      document.getElementById("SumeruActiveChar").src="Obrazky/SumeruCharAlhaitham.png"
    else if (SumerucharacterNumber == 1)
      document.getElementById("SumeruActiveChar").src="Obrazky/SumeruCharCandace.png"
    else if (SumerucharacterNumber == 2)
      document.getElementById("SumeruActiveChar").src="Obrazky/SumeruCharCyno.png"
    else if (SumerucharacterNumber == 3)
      document.getElementById("SumeruActiveChar").src="Obrazky/SumeruCharDehya.png"
    else if (SumerucharacterNumber == 4)
      document.getElementById("SumeruActiveChar").src="Obrazky/SumeruCharLayla.png"
    else if (SumerucharacterNumber == 5)
      document.getElementById("SumeruActiveChar").src="Obrazky/SumeruCharNahida.png"
    else if (SumerucharacterNumber == 6)
      document.getElementById("SumeruActiveChar").src="Obrazky/SumeruCharWanderer.png"
}