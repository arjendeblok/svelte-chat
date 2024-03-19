<script lang="ts">
  import { fade } from "svelte/transition";

  let context = $state("");
  let answer = $state("");
  let loading = $state(false);
  let error = $state(false);

  let handleSubmit = async () => {
    loading = true;
    error = false;
    answer = "";

    // test code to be replaced
    setTimeout(() => {
      loading = false;
      if(new Date().getSeconds() < 40) {
        answer = "This will be a generated text";
      } else {
        error = true;
      }
    }, 2000);
  }
</script>

<div class="max-w-3xl mx-auto">
  <h1 class="text-2xl text-teal-900 my-8 text-center">Explain It Like I'm Five</h1>

  <form class="grid grid-cols-1 justify-items-center w-full border border-slate-300 rounded-md"
        on:submit|preventDefault={() => handleSubmit()}>

    <label for="context" class="text-lg text-center mt-4 text-teal-900">Enter the text you want summarized/explained</label>

    <textarea name="context" rows="5"
      class="bg-teal-500 mx-4 my-4 p-4 rounded-lg w-11/12"
      bind:value={context} />

    <button class="p-4 rounded-lg bg-teal-700 hover:bg-blue-500 font-bold text-white shadow-lg shadow-blue-200 transition ease-in-out duration-200 translate-10 max-w-sm mb-8">
      Explain it
    </button>
  </form>

  <div class="grid grid-cols-1 justify-items-center w-full border border-slate-300 rounded-md mt-12">
    <h2 class="text-2xl text-teal-900 my-4 text-center">Explanation:</h2>
    <div class="p-4 min-w-full">
      {#if loading}
        <div class="min-w-full min-h-28 bg-slate-300 rounded-lg animate-pulse"></div>
      {:else}
        <p class="text-md text-teal-900 min-w-full min-h-28">{answer}</p>
      {/if}      
    </div>
  </div>

  {#if error} 
  <div class="grid grid-cols-1 justify-items-center w-full border border-slate-300 rounded-md mt-12 bg-red-600 p-4 text-lg"
       transition:fade>
    Something went wrong
  </div>
  {/if}
</div>
