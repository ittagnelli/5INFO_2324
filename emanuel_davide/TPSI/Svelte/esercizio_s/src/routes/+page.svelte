<script>
    import Accordion from "../lib/components/accordion.svelte";
    let items=[
        {
            id: 0,
            title:"titolo1",
           
            open:false
        },
        {
            id: 1,
            title:"titolo2",
           
            open:false
        },
        {
            id: 2,
            title:"titolo3",
            
            open:false
        }
    ];

    function handleItemClick(event) {
        const id = event.detail.id;
        const currentStatus = items[id].open;
        items.forEach(i => i.open = false);
        items[id].open = !currentStatus;
    }
    export let counter = 0;
    let listaRegione = [];
    //export let lista = [];

    function handleAddRegion(event) {
        const id = event.detail.id;
        listaRegione.append("Piemonte")
    }
</script>


<Accordion 
    item={items[0]} 
    on:itemClick={handleItemClick}
    on:regionClick={handleAddRegion}
/> 

<Accordion 
    item={items[1]} 
    on:itemClick={handleItemClick}
/> 
<Accordion 
    item={items[2]} 
    on:itemClick={handleItemClick}
/> 

<button on:click= {() => counter++}> Premi qui </button>
<div>{counter}</div>

<div>
    <p>Lista da vedere</p>
    <ul>
    {#each listaRegione as elemento, indice}
        <li>
            Questa è la regione {elemento} 
        </li>
    {/each}    
    </ul>
</div>





    

    