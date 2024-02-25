<script>
    import Title from "./title.svelte";
    import Paragraph from "./paragraph.svelte";
    import { open } from "../js/store";

    export let title;
    export let text;
    export let first;
    let status = false;
    
    $open = status;
    function open_close() {
	console.log("open = " + $open.toString() + "\nstatus = " +  status.toString());
        if (!$open) {
            $open = status = true;
        } else if (status){
            status = $open = false;
        }
    }
</script>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
    />
</svelte:head>

<section>
    <div class={first ? "header_icon first" : "header_icon"} id={status ? "clicked" : "not-clicked"} on:click={open_close}>
        <div class="header">
            <Title value={title} />
        </div>
        <div class="icon">
            <span class="material-symbols-outlined">
                {!status ? "expand_more" : "expand_less"}
            </span>
        </div>
    </div>

    <div class="paragraph" style="display: {!status ? 'none' : 'block'};">
        <Paragraph value={text} />
    </div>
</section>

<style>
    section {
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 1fr;
    }

    .header {
        padding-left: 3%;
    }

    .header_icon {
        display: grid;
        grid-template-columns: 95% 5%;
        border: 1px solid #bbbbbb;
    }

    #clicked {
        background-color: #dadada;
        border: 3px solid #bbbbbb;
        cursor: pointer;
    }

    .header_icon:hover {
        background-color: #dadada;
        border: 3px solid #bbbbbb;
        cursor: pointer;
    }

    .icon {
        width: 100%;
        height: 100%;
        margin: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .first {
        border-top-right-radius: 7px;
        border-top-left-radius: 7px;
    }

    .paragraph {
        border: 1px solid #bbbbbb;
        text-align: justify;
        padding-left: 2%;
        padding-right: 2%;
    }
</style>
