function aggiungi() {
    const tabella = document.getElementById("tabella");
    const nome = document.getElementById("nome").value;
    const media = document.getElementById("media").value;
    const tr = document.createElement("tr");
    let td = (`${nome} ${media}`);
    tr.innerText = td;
    tabella.append(tr);
}

function colora() {
    const tabella = document.getElementById("tabella");
    const elementi = tabella.children;
    for(var i = 0; i < elementi.length; i++) {
        var tr = elementi[i];
        if(i%2==0){tr.style.color = "red";}
        else{tr.style.color = "blue";}
    }
}