<script>
    import Icon from "$lib/Icon.svelte";
    export let clicked = false;
    export let text = "";
    export let header = "";

    export let id;

      import { createEventDispatcher } from 'svelte';
    
      const dispatch = createEventDispatcher();
    function onClick() {
        console.log("Clicked")
        clicked = !clicked;
        dispatch('onChange', {
            status: clicked,
            id: id,
        })
    }
</script>

<div class="border" on:click={onClick} on:keydown={() => {}}>

<div class="header">
    <h1>{header}</h1>
    <Icon icon={clicked ? "expand_more" : "arrow_drop_up"}></Icon>
</div>

<div class="text" class:clicked={!clicked}>
    {text}
</div>
</div>

<style>
    .header {
        display: flex;
        justify-content: space-between;
        background-color: grey;
        border-radius: 8px;
    }

    .text {
        background-color: white;
    }
    
    .border{
        border: 8px red solid;
    }
    
    .clicked {
        display: none;
    }
</style>