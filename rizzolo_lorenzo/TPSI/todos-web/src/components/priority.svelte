<script>

export let prio = 3
const prio2str = (prio) => {
    let map = {
        1:"ALTA",
        2:"MEDIA",
        3:"BASSA"
    }
    return map[prio]
}

const change_prio = () => {
    if( (++prio) == 4 ){ prio=1 }
}

</script>


<span class={prio2str(prio)} on:click={change_prio}>
    {prio2str(prio)}
</span>


<style>
    span{
        display: inline-block;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        width: 100px;
        height: 30px;
    }
    span:hover{
        cursor: pointer;
    }
    
    .ALTA{
        background-color: red;
    }
    .MEDIA{
        background-color: orange;
    }
    .BASSA{
        background-color: green;
    }
</style>