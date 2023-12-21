<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
</svelte:head>

<script>
    import {var_but} from "../js/store";

    export let Title;
    export let Text;
    export let button = false;
    // export const var_but = writable (button);
    // export let dub;
    let more = "more";
    let less = "less";
    export let icon = more;
    export let first = false;

    const change = () => {
        console.log(var_but);
        if ($var_but != 0) {
            $var_but = !$var_but;
            button = !button;
            alert($var_but);
        }
        else {
            button = false;
            $var_but = !$var_but;
            alert($var_but);
        }
        if (icon == more) {
            icon = less;
        }
        else {
            icon = more;
            }

    }
</script>

<div class="Heather {button == true ? 'open' : ''} {first ? 'radius' : ''}">
    <div style="justify-self: start;"><h2>{Title}</h2></div> 
    <div class="ciclo"><span class="material-symbols-outlined"  on:click={change}>expand_{icon}</span></div>
</div>
<div class="{button == true ? 'exist' : 'nexist'}">
    {Text}
</div>


<style>
    .Heather {
        width: 50%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 90% 10%;
        border: 1px solid rgba(220,220,220);
        padding: 10px;
    }

    .radius {
        border-radius: 10px 10px 0px 0px;
    }

    .open {
        border: 3px solid rgba(220,220,220, 0.7);
    }

    .ciclo {
        justify-self: end;
        display: grid; 
        align-items:center;
    }

    .exist {
        width: 50%;
        margin: 0 auto;
        border: 1px solid rgba(220,220,220);
        padding: 10px;
    }

    .nexist {
        width: 100%;
        display: none;
    }
</style>