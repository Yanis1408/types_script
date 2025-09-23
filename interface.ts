
interface Personne {
id : string; nom: string; email: string;
}

interface visiteurs extends Personne {

secteur : "Nord" | "Est" | "Sud" | "Ouest "|"Paris " ;
vehiculePersonne: Boolean ;

}  

const v1: visiteurs = {
    id:"v005",
    nom:"Yanis",
    email:"yanis@gmail.com",
    secteur: "Paris"
}

console.log(v1)

