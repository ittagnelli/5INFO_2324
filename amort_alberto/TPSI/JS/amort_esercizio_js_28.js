let media= function(studenti)
{

   let media=0;

   for(const studente of studenti)
   {
    media += studente.eta;
   }
   media=media/studenti.length;
   return media;
}


let studenti = [
  { nome: "Marco", classe: 4, eta: 17 },
  { nome: "Alex", classe: 2, eta: 15 },
  { nome: "William", classe: 4, eta: 18 }
];

console.log(media(studenti));