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
    document.getElementById("ActiveChar").src="Obrazky/SumeruCharAlhaitham.png"
  else if (characterNumber == 1)
    document.getElementById("ActiveChar").src="Obrazky/SumeruCharCandace.png"
  else if (characterNumber == 2)
    document.getElementById("ActiveChar").src="Obrazky/SumeruCharCyno.png"
  else if (characterNumber == 3)
    document.getElementById("ActiveChar").src="Obrazky/SumeruCharDehya.png"
  else if (characterNumber == 4)
    document.getElementById("ActiveChar").src="Obrazky/SumeruCharLayla.png"
  else if (characterNumber == 5)
    document.getElementById("ActiveChar").src="Obrazky/SumeruCharNahida.png"
  else if (characterNumber == 6)
    document.getElementById("ActiveChar").src="Obrazky/SumeruCharWanderer.png"

}

function SipkaR() {
  if (characterNumber == 6)
    characterNumber = 0;
  else
    characterNumber++;

    if(characterNumber == 0)
      document.getElementById("ActiveChar").src="Obrazky/SumeruCharAlhaitham.png"
    else if (characterNumber == 1)
      document.getElementById("ActiveChar").src="Obrazky/SumeruCharCandace.png"
    else if (characterNumber == 2)
      document.getElementById("ActiveChar").src="Obrazky/SumeruCharCyno.png"
    else if (characterNumber == 3)
      document.getElementById("ActiveChar").src="Obrazky/SumeruCharDehya.png"
    else if (characterNumber == 4)
      document.getElementById("ActiveChar").src="Obrazky/SumeruCharLayla.png"
    else if (characterNumber == 5)
      document.getElementById("ActiveChar").src="Obrazky/SumeruCharNahida.png"
    else if (characterNumber == 6)
      document.getElementById("ActiveChar").src="Obrazky/SumeruCharWanderer.png"
}