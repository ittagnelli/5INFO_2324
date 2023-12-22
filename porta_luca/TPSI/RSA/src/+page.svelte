<svelte:head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Agbalumo|Nova+Square">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icons?family=Material+Icons+Outlined">
</svelte:head>

<script>
  import Algoritmo from "./lib/Algoritmo.svelte";
</script>

<main>
  <h1>Algoritmo RSA</h1>
  <Algoritmo />
</main>

<style>
  main{
    color: red;
    font-size: 50px;
    width: 100%;
    height: 97vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  h1{font-family: 'Agbalumo';}
</style>