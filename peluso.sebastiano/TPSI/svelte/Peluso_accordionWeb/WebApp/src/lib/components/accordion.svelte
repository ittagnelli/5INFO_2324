<script>
    export let open = false;
      import { slide } from 'svelte/transition';
      export let titolo;
      export let testo;
      const handleClick = () => open = !open
  </script>
  
  <div class="container">
    
      <div class="header" on:click={handleClick} >
          <div class="text">
            {titolo}
          </div>
          
      </div>
      
    
      
      {#if open}
      <div class="details" transition:slide>
        <slot name="details"></slot>

        
      </div>
      <div class="header2">
        <div class="testo">
            {titolo}
          </div>
      </div>
      {/if}
  </div>
  
  <style>

      .container {
        float: right;
          margin: 1rem 0;
          width: 80%;
          margin: auto;
          

          
      }
      
      .header {
          display:flex;
          width: 60%;
          padding: 20px;
          background-color: rgb(205, 205, 205);
          text-align: left;
          font-weight: bolder;
          border: 6px solid rgba(166, 166, 166, 0.503);
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          
      }

      .header2{
        display:flex;
          width: 60%;
          padding: 20px;
          border: 2px solid ;
          text-align: left;
          font-weight: bolder;
          border: 2px solid rgb(183, 182, 182);
          
      }
      
      .header .text {
          flex: 1;
          margin-right: 5px;
      }
      
      .details {
        width: 60%;
		border: 2px solid rgb(183, 182, 182);
        border-top: none;
		padding:1rem;
	}

  </style>
  