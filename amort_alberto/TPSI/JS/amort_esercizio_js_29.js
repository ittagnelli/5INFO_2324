let crea_array= function(studenti)
{  
  let nomi= [];
   for(const studente of studenti)
   {
    nomi.push(studente.nome);
   }
   return nomi;
}



let studenti = [
  { nome: "Marco", classe: 4, eta: 17 },
  { nome: "Alex", classe: 2, eta: 15 },
  { nome: "William", classe: 4, eta: 18 }
];

console.log(crea_array(studenti));