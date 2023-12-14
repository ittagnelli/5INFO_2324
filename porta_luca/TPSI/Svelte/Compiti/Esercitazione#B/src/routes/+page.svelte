<script>
    import Accordion from "../components/Accordion.svelte";
</script>

<main>
    <h1>Accordion di Luca</h1>
    <Accordion />
</main>

<style>
    main{
        border: 5px solid red;
        margin: auto;
        width: 99%;
        height: 96vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h1{
        color: blue;
        padding-left: 2%;
        width: 100%;
    }
</style>