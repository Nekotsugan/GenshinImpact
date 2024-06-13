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
    document.getElementById("ActiveChar").src="Obrazky/MonstadtCharBarbara.png"
  else if (characterNumber == 1)
    document.getElementById("ActiveChar").src="Obrazky/MonstadtCharBennett.png"
  else if (characterNumber == 2)
    document.getElementById("ActiveChar").src="Obrazky/MonstadtCharDiluc.png"
  else if (characterNumber == 3)
    document.getElementById("ActiveChar").src="Obrazky/MonstadtCharKaeya.png"
  else if (characterNumber == 4)
    document.getElementById("ActiveChar").src="Obrazky/MonstadtCharNoelle.png"
  else if (characterNumber == 5)
    document.getElementById("ActiveChar").src="Obrazky/MonstadtCharRazor.png"
  else if (characterNumber == 6)
    document.getElementById("ActiveChar").src="Obrazky/MonstadtCharVenti.png"

}

function SipkaR() {
  if (characterNumber == 6)
    characterNumber = 0;
  else
    characterNumber++;

  if(characterNumber == 0)
    document.getElementById("ActiveChar").src="Obrazky/MonstadtCharBarbara.png"
  else if (characterNumber == 1)
    document.getElementById("ActiveChar").src="Obrazky/MonstadtCharBennett.png"
  else if (characterNumber == 2)
    document.getElementById("ActiveChar").src="Obrazky/MonstadtCharDiluc.png"
  else if (characterNumber == 3)
    document.getElementById("ActiveChar").src="Obrazky/MonstadtCharKaeya.png"
  else if (characterNumber == 4)
    document.getElementById("ActiveChar").src="Obrazky/MonstadtCharNoelle.png"
  else if (characterNumber == 5)
    document.getElementById("ActiveChar").src="Obrazky/MonstadtCharRazor.png"
  else if (characterNumber == 6)
    document.getElementById("ActiveChar").src="Obrazky/MonstadtCharVenti.png"

}