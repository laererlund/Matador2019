function main(){
    var spillerantal = prompt("Hvor mange spillere");
    document.getElementById("spilleplade").hidden = false;
    lavspillere(spillerantal);
    //lav spillerantal spillere
    //tegn alle tingende UI + Spillebræt + information omkring hvem der skal kaste først
    //få første spiller til at kaste
    /*flyt spiller og gør hvad feltet personen har landet på gør ved spilleren 
    (? felt få spilleren til at trække kortet, anden spillers felt få spilleren til at betale,osv.osv.)*/
    //giv spilleren de muligheder personen har til sidst (trade,køb huse,køb hoteller)

}

// instacere hele programmet
function lavspillere(antalspillere){
    if(spillerUde == true){
        bankerot();
    }
    turStart(spiller) { //flyt til Main
        if (spiller.vaerdi >= 0) {
            spillerUde = true;
            alert("Du er ude af spillet, fucking taber kælling")
            if (spiller == [0]) {
                remove.spiller[0]
            } else if (spiller == [1]) {
                remove.spiller[1]
            } else if (spiller == [2]) {
                remove.spiller[2]
            } else if (spiller == [3]) {
                remove.spiller[3]
            }
        }

        var slag = kastTerning(Terninger.kast());

        position = rykSpiller(slag)

        if (position == grund) {
            if (grundIkkeEjet) {
                alert("Vil du købe grunden?" + jaKnap + nejKnap)
                jaKnap = createButton("Ja", jaTilKoeb);
                nejKnap = createButton("nej", nejTilKoeb);
                if (jaTilKoeb) {
                    købEjendom();
                } else if (nejTilKoeb) {
                    if (spiller <= 3) {
                        naesteTur(spiller++);
                    } else if (spiller == 4) {
                        naesteTur(spiller == 0)
                    }
                }
            } else if (grundIkkeEjet == false) {
                betalEjer(leje.grundIkkeEjet);
            }

            købEjendom = function (position) {

                if (penge > position.getParent().pris && position.getParent().ejer == bank) {

                    penge = penge - position.getparent().pris;
                    position.getParent().ejer = spiller;
                } else if (penge < position.getParent().pris && position.getParent().ejer == bank) {
                    alert('Du har ikke råd din samfundsnasserøv. Få dig et job');
                }
                /* switch (key) {
                    case Proevlykken:
                        
                        break;
                    case 123:
    
                        break;
    
                    case 123:
    
                        break;
                    
                    case 123:
    
                        break;
                    
                    case 123:
    
                        break;
    
                    case 123:
    
                        break;
                        
                    default:
                    
                        break;
               }*/
            }
        }
    }
}