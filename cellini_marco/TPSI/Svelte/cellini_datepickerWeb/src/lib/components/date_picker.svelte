<script>
    import Block from "./block.svelte";
    import SelectDate from "./select_date.svelte";

    import { gg_selected } from '../js/store';
    import { mm_selected } from '../js/store';
    import { aaaa_selected } from '../js/store';
    let gg = "GG", mm = "MM", aaaa = "AAAA";

    let days = Array.from(Array(31 + 1).keys()).slice(1);
    let years = Array.from(Array(2023 + 1).keys()).slice(1900);
    let months = [
        "Gennaio",
        "Febbraio",
        "Marzo",
        "Aprile",
        "Maggio",
        "Giugno",
        "Luglio",
        "Agosto",
        "Settembre",
        "Ottobre",
        "Novembre",
        "Dicembre",
    ];

    function update_date() {
        gg = $gg_selected;  
        mm = $mm_selected;
        aaaa = $aaaa_selected;
    }
</script>

<section>
    <p>L'utente ha selezionato {gg} - {mm} - {aaaa}</p>
    <div class="date">
        <Block list={days} selected="GG" />
        <Block list={months} selected="MM" />
        <Block list={years} selected="AAAA" />
        <SelectDate on:newDate={update_date}/>
    </div>
</section>

<style>
    section {
        width: 60%;
        text-align: center;
    }

    .date {
        display: grid;
        grid-template-columns: 1fr 1fr 2fr 1fr;
        column-gap: 2%;
    }

    p {
        font-size: 24px;
        font-weight: bold;
    }
</style>