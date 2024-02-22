function aggiungi() {
    const tabella = document.getElementById("tabella");
    const nome = document.getElementById("nome").value;
    const media = document.getElementById("media").value;
    const tr = document.createElement("tr");
    let td = (`${nome} ${media}`);
    tr.innerText = td;
    tabella.append(tr);
}

function blu() {
    const tabella = document.getElementById("tabella");
    const elementi = tabella.children;
    for(var i = 0; i < elementi.length; i++) {
        var tr = elementi[i];
        tr.classList.add("blu");
    }
}

function grassetto() {
    const tb = document.getElementById("tabella");
    const elementi = tb.children;
    for(let i=0; i<elementi.length; i++){
        var tr = elementi[i];
        tr.classList.add("grassetto");
    }
}
function bordo() {
    const tb = document.getElementById("tabella");
    tb.classList.toggle("bordo");
}