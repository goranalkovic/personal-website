<script>

    import { onMount } from 'svelte';
    import {s1Height, s2Height, s3Height, s4Height} from './store.js';

    export let id;
    export let text = '';

    let elem;

    function refreshSizes() {
        console.log('Refreshed section header sizes');
        if(id === 'learnmore') s1Height.set(elem.offsetTop);
        if(id === 'skills') s2Height.set(elem.offsetTop);
        if(id === 'work') s3Height.set(elem.offsetTop);
        if(id === 'contact') s4Height.set(elem.offsetTop);
    }

    onMount(() => {
        refreshSizes();
    });


</script>

<style>

</style>

<svelte:body on:resize={refreshSizes} />

<div class="flex justify-center mx-2 my-6" id="#{id}" bind:this={elem}>
    <h1 class="text-3xl font-display px-4 py-2 rounded text-gray-800">{text}</h1>
</div>