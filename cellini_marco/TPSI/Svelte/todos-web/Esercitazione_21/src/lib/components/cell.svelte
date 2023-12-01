<script>
    import { fade } from 'svelte/transition';
    export let last = false;
</script>

<div class="cell {last ? 'cell-last' : ''}" in:fade="{{duration: 500}}" out:fade="{{duration: 250}}">
    <slot />
</div>

<style>
    .cell {
        border-bottom: 1px solid #e7ecee;
        border-right: 1px solid #e7ecee;
        text-align: center;
        padding-top: 10px;
        color: #525252;
        line-height: 32px;
        font-size: 18px;
    }

    .cell-last {
        border-right: none;
    }
</style>