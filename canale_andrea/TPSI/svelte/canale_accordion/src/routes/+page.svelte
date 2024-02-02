<script>
    import Accordion from "$lib/Accordion.svelte";

    let first_visible = true;
    let second_visible = false;
    let third_visible = false;

    function changed(e) {
        const id = e.detail.id;
        const new_status = e.detail.status;
        console.log(id)
        switch (id) {
            case "0":
                console.log("0")
                first_visible = new_status;
                second_visible = false;
                third_visible = false;
                break;
            case "1":
                            console.log("01")
                first_visible = false;
                second_visible = new_status;
                third_visible = false;
                break;
            case "2":
                            console.log("2")

                first_visible = false;
                second_visible = false;
                third_visible = new_status;
                break;
            default:
                console.log("DEFAULT")
                break;
        }
        
        console.log(first_visible)
        console.log(second_visible)
        console.log(third_visible)
    }
</script>

<Accordion id=0 header="My header 1" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
    laborum." bind:clicked={first_visible} on:onChange={changed}></Accordion>

<Accordion id=1 header="My header 2" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
    laborum." bind:clicked={second_visible} on:onChange={changed}></Accordion>

<Accordion id=2 header="My header 3" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
    laborum." bind:clicked={third_visible} on:onChange={changed}></Accordion>