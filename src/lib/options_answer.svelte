<script>
  // @ts-nocheck

  export let option;
</script>

<button type="button" class="options__items" on:click>
  {option}
</button>

<style>
  :is(.options__items) {
    width: 100%;
    height: 3rem;
  }
  .options__items {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0a2745;
    border-radius: 100px 7px;
    outline: 1px solid #3334da;

    cursor: pointer;
    transition: box-shadow 0.1s ease-out;
    display: grid;
    place-items: center;
  }

  .options__items:hover {
    box-shadow: 4px -1px 5px 0px #ffffffaa;
    outline: 2px solid #d415ab;
    color: #d415ab;
  }
</style>
