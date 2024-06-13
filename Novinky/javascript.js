function toggleNav() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
  }

characterNumber = 0;

function SipkaL() {
  if (characterNumber == 0)
    characterNumber = 5;
  else
    characterNumber--;

  if(characterNumber == 0)
    document.getElementById("banner").src="Obrazky/WebsiteNovinkyBannerA.png"
  else if (characterNumber == 1)
    document.getElementById("banner").src="Obrazky/WebsiteNovinkyBannerL.png"
  else if (characterNumber == 2)
    document.getElementById("banner").src="Obrazky/WebsiteNovinkyBannerW1.png"
  else if (characterNumber == 3)
    document.getElementById("banner").src="Obrazky/WebsiteNovinkyBannerW.png"
  else if (characterNumber == 4)
    document.getElementById("banner").src="Obrazky/WebsiteNovinkyBannerB.png"
  else if (characterNumber == 5)
    document.getElementById("banner").src="Obrazky/WebsiteNovinkyBannerW2.png"

}

function SipkaR() {
  if (characterNumber == 5)
    characterNumber = 0;
  else
    characterNumber++;

    if(characterNumber == 0)
      document.getElementById("banner").src="Obrazky/WebsiteNovinkyBannerA.png"
    else if (characterNumber == 1)
      document.getElementById("banner").src="Obrazky/WebsiteNovinkyBannerL.png"
    else if (characterNumber == 2)
      document.getElementById("banner").src="Obrazky/WebsiteNovinkyBannerW1.png"
    else if (characterNumber == 3)
      document.getElementById("banner").src="Obrazky/WebsiteNovinkyBannerW.png"
    else if (characterNumber == 4)
      document.getElementById("banner").src="Obrazky/WebsiteNovinkyBannerB.png"
    else if (characterNumber == 5)
      document.getElementById("banner").src="Obrazky/WebsiteNovinkyBannerW2.png"

}