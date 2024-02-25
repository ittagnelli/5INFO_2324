<script>
    import AccordionContainer from "../components/accordion_container.svelte";

    let headers = [
        "accordion 1",
        "accordion 2",
        "accordion 2",
        "accordion 2",
        "accordion 2"
    ]
    let texts = [
        "testo accordion 1",
        "testo accordion 2",
        "testo accordion 2",
        "testo accordion 2",
        "testo accordion 2",
        "testo accordion 2"
    ]
</script>

<AccordionContainer headers={headers} texts={texts} />