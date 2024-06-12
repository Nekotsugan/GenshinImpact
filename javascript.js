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
    document.getElementById("ActiveChar").src="Obrazky/FontaineCharArlecchino.png"
  else if (characterNumber == 1)
    document.getElementById("ActiveChar").src="Obrazky/FontaineCharFurina.png"
  else if (characterNumber == 2)
    document.getElementById("ActiveChar").src="Obrazky/FontaineCharLynette.png"
  else if (characterNumber == 3)
    document.getElementById("ActiveChar").src="Obrazky/FontaineCharLyney.png"
  else if (characterNumber == 4)
    document.getElementById("ActiveChar").src="Obrazky/FontaineCharNavia.png"
  else if (characterNumber == 5)
    document.getElementById("ActiveChar").src="Obrazky/FontaineCharNeuvillette.png"
  else if (characterNumber == 6)
    document.getElementById("ActiveChar").src="Obrazky/FontaineCharWriothesley.png"

}

function SipkaR() {
  if (characterNumber == 6)
    characterNumber = 0;
  else
    characterNumber++;

    if(characterNumber == 0)
      document.getElementById("ActiveChar").src="Obrazky/FontaineCharArlecchino.png"
    else if (characterNumber == 1)
      document.getElementById("ActiveChar").src="Obrazky/FontaineCharFurina.png"
    else if (characterNumber == 2)
      document.getElementById("ActiveChar").src="Obrazky/FontaineCharLynette.png"
    else if (characterNumber == 3)
      document.getElementById("ActiveChar").src="Obrazky/FontaineCharLyney.png"
    else if (characterNumber == 4)
      document.getElementById("ActiveChar").src="Obrazky/FontaineCharNavia.png"
    else if (characterNumber == 5)
      document.getElementById("ActiveChar").src="Obrazky/FontaineCharNeuvillette.png"
    else if (characterNumber == 6)
      document.getElementById("ActiveChar").src="Obrazky/FontaineCharWriothesley.png"

}