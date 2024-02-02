

const controllo = (n1,n2,n3) => {


   let maggiore = (n1 > n2) ? n1 : n2;

   let finitoMaggiore = (n3 > maggiore) ? n3 : maggiore;

    return finitoMaggiore;

}

const main = () =>{

    console.log(controllo(10,20,100));
    console.log(controllo(100,400,4));
    console.log(controllo(80,8,800));
}

main();