<script>
    import Elemento from "./Elemento.svelte";
    let id=1;
</script>

<main>
    <div class="contenitore">
        <Elemento id={id}/>
        <Elemento id={++id}/>
    </div>
</main>

<style>
    main{
        margin: auto;
        border: 5px solid blue;
        width: 80%;
        height: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .contenitore{
        width: 80%;
        height: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>