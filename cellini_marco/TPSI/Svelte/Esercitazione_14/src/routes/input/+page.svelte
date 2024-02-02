<script>
    let name, surname, age, check = false;
    if (name == undefined)
        name = "";
    if (surname == undefined)
        surname = "";
    if (age == undefined)
        age = "";
</script>

<section>
    <h1>Input Page</h1>

    <div class="date">
        Nome <input bind:value={name} />
        Cogome <input bind:value={surname} />
        Età <input bind:value={age} />
    </div>

    <div class="checkbox">
        Confermato <input type="checkbox" bind:checked={check}>
    </div>

    <button disabled={!check}>Submit</button>

    <p class="output" hidden={!check}>You are {name} {surname} and you've {age} years old</p>
</section>

<style>
    .date {
        margin: 5%;
    }
</style>
