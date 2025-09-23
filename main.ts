import PublieActu from "./intranet";
import {EnregistrerVisiteurs} from "./visiteurs";
import {AssignerSecteur} from "./type";

console.log(EnregistrerVisiteurs("Dr.Diakaby","Doliprane"));
PublieActu("Nouveau medecin");
console.log(AssignerSecteur({id: "1" , nom : "Manal" },"Paris " ));