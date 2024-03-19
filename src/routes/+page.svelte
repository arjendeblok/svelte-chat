<div class="max-w-3xl mx-auto">
    <h1 class="text-2xl text-teal-900 my-8 text-center">Explain It Like I'm Five</h1>
  
    <form class="grid grid-cols-1 justify-items-center w-full border border-slate-300 rounded-md">
  
      <label for="context" class="text-lg text-center mt-4 text-teal-900">Enter the text you want summarized/explained</label>
  
      <textarea name="context" rows="5"
        class="bg-teal-500 mx-4 my-4 p-4 rounded-lg w-11/12" />
  
      <button class="p-4 rounded-lg bg-teal-700 hover:bg-blue-500 font-bold text-white shadow-lg shadow-blue-200 transition ease-in-out duration-200 translate-10 max-w-sm mb-8">
        Explain it
      </button>
    </form>
  
    <div class="grid grid-cols-1 justify-items-center w-full border border-slate-300 rounded-md mt-12">
      <h2 class="text-2xl text-teal-900 my-4 text-center">Explanation:</h2>
      <div class="p-4 min-w-full">
          <p class="text-md text-teal-900 min-w-full min-h-28">The generated answer.</p>
      </div>
    </div>
  </div>