

const controllo = (n1,n2) => {


   let maggiore = (n1 > n2) ? n1 : n2;

   

    return maggiore;

}

const main = () =>{

    console.log(controllo(10,2));
    console.log(controllo(100,400));
    console.log(controllo(80,8));
}

main();