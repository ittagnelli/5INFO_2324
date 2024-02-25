<script>
    let open = false;
    let open2 = false;

    const openDiv = () => {
        open =! open;
        open2 = false;
    }

    const openDiv2 = () => {
        open2 =! open2;
        open = false;
    }
</script>

<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</svelte:head>

<div class="contanier">
    <div class="header_1">
        <h1 class="title-container">My header 1</h1>
        <button class="arrow" on:click={openDiv} aria-label={open ? "chiudi" : "apri"}>
            <span class="material-symbols-outlined">{open ? "keyboard_arrow_down" : "keyboard_arrow_up"}</span>
        </button>
    </div>
    <p class="{open ? '' : 'nascondi'}">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis maximus neque.<br> 
        Aenean vitae ex ac risus sodales ullamcorper eu et turpis. Aliquam ac leo ac metus molestie mattis ut quis dolor.<br>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.<br>
        Ut sit amet fermentum ligula. Nam dui purus, volutpat et turpis eu, viverra suscipit metus.<br>
        Etiam finibus, dolor et mollis rhoncus, justo risus commodo turpis, quis pellentesque magna diam in orci.<br>
        Suspendisse faucibus in turpis eget ultricies. Ut convallis magna eget justo dignissim tincidunt.<br>
        Nulla at libero at velit lobortis tincidunt in vitae lorem. Nullam tincidunt id eros et tempor.
    </p>
    <div class="header">
        <h1 class="title-container">My header 2</h1>
        <button class="arrow" on:click={openDiv2} aria-label={open2 ? "chiudi" : "apri"}>
            <span class="material-symbols-outlined">{open2 ? "keyboard_arrow_down" : "keyboard_arrow_up"}</span>
        </button>
    </div>
    <p class="{open2 ? '' : 'nascondi'}">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>
        Nunc mauris nulla, malesuada et pulvinar et, pharetra vel lacus.<br>
        Suspendisse id ipsum ipsum. Fusce ultrices luctus nibh ut condimentum.<br>
        Sed lorem ligula, elementum scelerisque porttitor id, luctus vel lorem.<br>
        Mauris sagittis ultricies diam, sed pretium elit. Nulla imperdiet mollis efficitur.
        Quisque ut fringilla magna.<br> Suspendisse potenti.
        Morbi ac sem ut leo rhoncus pulvinar.<br>
        Curabitur commodo odio ac sem porta, nec ullamcorper nibh malesuada.<br>
        Nulla lacinia mattis dolor nec finibus.
    </p>
</div>

<style>
    .nascondi{
        display: none;
    }

    p{
        border: 1px solid grey;
        width: 68em;
        height: auto;
        margin: 0;
        padding-left: 1em;
        color: gray;
    }

    .contanier {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
    }

    .header_1 {
        width: 80%;
        display: flex; 
        align-items: center; 
        border: 1px solid gray;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }

    .header{
        width: 80%;
        display: flex; 
        align-items: center; 
        border: 1px solid gray;
    }

    h1{
        margin-right: 78%;
        margin-left: 2%;
    }

    button{
        background: none;
        border: none;
    }

    button:hover{
        cursor: pointer;
    }

    .header_1:hover{
        border: 3px solid darkgray;
        background-color: #c8c8c8;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    .header:hover{
        border: 5px solid darkgray;
        background-color: #c8c8c8;
    }

    .header_1:hover button:hover{
        border: none;
    }
</style>