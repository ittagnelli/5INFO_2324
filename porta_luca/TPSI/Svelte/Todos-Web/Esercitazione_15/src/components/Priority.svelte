<script>
    export let prio=3;
    export let disabled=false;
    const priotostr=(prio)=>{
        let map={1: 'ALTA', 2: 'MEDIA', 3: 'BASSA'};
        return map[prio];
    }
    const change_prio=()=>{
        prio=(prio+1)%3+1;
    }
</script>

<span class={disabled ? 'DISABILITA':priotostr(prio)} handler={change_prio}>
    {priotostr(prio)}
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
        background-color: yellow;
    }
    .BASSA{
        background-color: lime;
    }
    .DISABILITA{background-color: gray;}
</style>