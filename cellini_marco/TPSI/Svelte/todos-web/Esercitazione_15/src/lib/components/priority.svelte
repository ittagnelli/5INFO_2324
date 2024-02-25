<script>
    export let prio = 3;        // 1 == ALTA; 2 == MEDIA; 3 == ALTA
    export let disabled = false;

    const prio2str = (prio) => {
        let map = {
            1 : 'ALTA',
            2 : 'MEDIA',
            3 : 'BASSA'
        }
        return map[prio];
    }

    const change_prio = () => {
        prio = (prio + 1) % 3 + 1;
    }
</script>

<button class={disabled ? "disabled" : prio2str(prio)} on:click={change_prio}>
    {prio2str(prio)}
</button>

<style>
    button {
        display: inline-block;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        width: 100px;
        height: 30px;
    }

    button:hover {
        cursor: pointer;
    }

    .ALTA {
        background-color: red;
    }

    .BASSA {
        background-color: green;
    }

    .MEDIA {
        background-color: orange;
    }

    .disabled {
        background-color: grey;
    }
</style>