<script>
	import { header_id_open } from './../js/store.js';
    import Icon from "./icon.svelte";

    export let title
    export let text
    export let id



    let icon = "keyboard_arrow_down"


    function show_text(){
        $header_id_open = ($header_id_open==id) ? -1 : id
        icon = ($header_id_open==id) ? "expand_less" : "keyboard_arrow_down"
    }

</script>

<div class="header" on:click={show_text}> <b>{title}</b> <span class="icona"><Icon nome={icon}/></span></div>

<div class="text" style='display:{$header_id_open==id ? "block" : "none"};' > {@html text} </div>


<style>
    .header{
        padding: 10px;
        background-color: lightgray;
        border: 1px solid rgba(128, 128, 128, 0.637);
    }
    .header:not(:first-child){
        border-top: 0;
    }
    .header:hover{
        cursor: pointer;
    }
    
    .icona{
        float: right;
    }

    .text{
        border: 1px solid rgba(128, 128, 128, 0.637);
        border-bottom: 0;
        border-top: 0;
        display: none;
        padding: 10px;
    }
    .text:last-child{
        border-top: 0 ;
        border-bottom: 1px solid rgba(128, 128, 128, 0.637);
    }

</style>