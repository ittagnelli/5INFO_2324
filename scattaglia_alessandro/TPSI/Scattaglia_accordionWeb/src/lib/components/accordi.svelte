<script>
    let aperto1 = false;
    let aperto2 = false;

    const bottone1 = () => {
        aperto1 = !aperto1;
        aperto2 = false;
    };

    function bottone2() {
        aperto2 = !aperto2;
        aperto1 = false;
    }
</script>

<link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    selectedMese
/>

<div class="container">
    <div class="vuoto" />
    <div class="titolo">
        <h1>My header 1</h1>
    </div>
    <button
        class="freccia"
        on:click={bottone1}
        aria-label={aperto1 ? "Chiudi" : "Apri"}
    >
        <span class="material-symbols-outlined">
            {aperto1 ? "keyboard_arrow_up" : "keyboard_arrow_down"}
        </span>
    </button>
</div>
<div class="testo {aperto1 ? '' : 'nascondi'}">
    <p>
        lorem
        ipsusofjvnerofndfklnoskdmgvkwjendsvkjwenfplernwlknkjwdnvlkerndvklwmdnvkjsdlkvnsdkvòlfvnksdlvpwdvnlkòefnvkjsdnv
    </p>
</div>
<div class="container1">
    <div class="vuoto" />
<div class="titolo1">
    <h1>My header 2</h1>
</div>
<button
    class="freccia1"
    on:click={bottone2}
    aria-label={aperto2 ? "Chiudi" : "Apri"}
>
    <span class="material-symbols-outlined">
        {aperto2 ? "keyboard_arrow_up" : "keyboard_arrow_down"}
    </span>
</button>
</div>
<div class="testo1 {aperto2 ? '' : 'nascondi'}">
    <p>
        La gentilezza è una virtù che dovremmo coltivare ogni giorno. In un
        mondo spesso frenetico e stressante, un semplice atto di gentilezza può
        fare la differenza nella vita di qualcuno. Un sorriso, una parola
        gentile o un gesto di aiuto possono illuminare la giornata di una
        persona. La gentilezza non costa nulla, ma il suo impatto può essere
        immenso. Quindi, la prossima volta che avete l'opportunità, scegliete la
        gentilezza e diffondete un po' di amore nel mondo.
    </p>
</div>


<style>
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: rgb(226, 226, 226);
        border-radius: 20px;
        border: 5px solid rgb(170, 170, 170);
        padding: 10px;
    }
    .container1 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: rgb(226, 226, 226);
        border-radius: 20px;
        border: 5px solid rgb(170, 170, 170);
        padding: 10px;
    }
    .titolo {
        text-align: center;
        color: black;
    }
    .titolo1 {
        text-align: center;
        color: black;
    }
    .freccia {
        background-color: transparent;
        border: 0px solid transparent;
        color: black;
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    .freccia1 {
        background-color: transparent;
        border: 0px solid transparent;
        color: black;
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    .testo {
        width: 100%;
        border: 1px solid gray;
        border-radius: 10px;
    }
    .testo1 {
        width: 100%;
        border: 1px solid gray;
        border-radius: 10px;
    }

    .nascondi {
        display: none;
    }
</style>
