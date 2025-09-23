type Secteur = "Nord" | "Est" | "West" | "Ouest "|"Paris " ;
type EmployeBase = {id : string ; nom : string ; } ;


export function AssignerSecteur(e:EmployeBase,s:Secteur) : string {

    return `${e.nom} ${s}`;
    }

