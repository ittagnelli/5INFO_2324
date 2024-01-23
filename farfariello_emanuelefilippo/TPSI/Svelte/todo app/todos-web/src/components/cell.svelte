
<div class = "cell">
    <slot />
</div>

<style>
.cell{
    border-bottom:1px solid #E7ECEE;
    border-right: 1px solid #E7ECEE;
    text-align: center;
    padding-top: 10px;
    color: #525252;
    line-height: 32px;
    font-size: 18px;

}
</style>

<script>
 <div class = "cell {last ? 'cell-last': ''}"
    in:fade = "{{duration: 700 }}"
    out:fade = "{{duration: 350}}">
    <slot/>
</div>


import {fade} from 'svelte/transition';

export let last = false;


</script>
