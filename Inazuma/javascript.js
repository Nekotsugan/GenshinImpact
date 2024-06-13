function toggleNav() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
  }

characterNumber = 0;

function SipkaL() {
  if (characterNumber == 0)
    characterNumber = 6;
  else
    characterNumber--;

    if(characterNumber == 0)
      document.getElementById("ActiveChar").src="Obrazky/InazumaCharAyaka.png"
    else if (characterNumber == 1)
      document.getElementById("ActiveChar").src="Obrazky/InazumaCharEi.png"
    else if (characterNumber == 2)
      document.getElementById("ActiveChar").src="Obrazky/InazumaCharItto.png"
    else if (characterNumber == 3)
      document.getElementById("ActiveChar").src="Obrazky/InazumaCharKazuha.png"
    else if (characterNumber == 4)
      document.getElementById("ActiveChar").src="Obrazky/InazumaCharKirara.png"
    else if (characterNumber == 5)
      document.getElementById("ActiveChar").src="Obrazky/InazumaCharKokomi.png"
    else if (characterNumber == 6)
      document.getElementById("ActiveChar").src="Obrazky/InazumaCharThoma.png"

}

function SipkaR() {
  if (characterNumber == 6)
    characterNumber = 0;
  else
    characterNumber++;

    if(characterNumber == 0)
      document.getElementById("ActiveChar").src="Obrazky/InazumaCharAyaka.png"
    else if (characterNumber == 1)
      document.getElementById("ActiveChar").src="Obrazky/InazumaCharEi.png"
    else if (characterNumber == 2)
      document.getElementById("ActiveChar").src="Obrazky/InazumaCharItto.png"
    else if (characterNumber == 3)
      document.getElementById("ActiveChar").src="Obrazky/InazumaCharKazuha.png"
    else if (characterNumber == 4)
      document.getElementById("ActiveChar").src="Obrazky/InazumaCharKirara.png"
    else if (characterNumber == 5)
      document.getElementById("ActiveChar").src="Obrazky/InazumaCharKokomi.png"
    else if (characterNumber == 6)
      document.getElementById("ActiveChar").src="Obrazky/InazumaCharThoma.png"

}