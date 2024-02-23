function occorrenza(str){
    let c;
    for(item_1 of str){
        c=0;
        for(item_2 of str){
            if(item_1==item_2){
                c++;
            }
        }
        console.log(`Occorrenza di ${item_1}: ${c} volte`);
    }
}

let str='Ciao Ciao alla prossima';
occorrenza(str.split(' '));