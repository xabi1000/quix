<script>
  import TitleAnimate from './title_animate.svelte';
  import NextBtn from './next_btn.svelte';
  export let allPlayerResponses;
  let correctResponses = allPlayerResponses.filter(
    (ele) => ele.status === true
  );
  let incorrectResponses = allPlayerResponses.filter(
    (ele) => ele.status === false
  );

  incorrectResponses = incorrectResponses.slice(-7);
</script>

<div class="card-container">
  <div class="card">
    <TitleAnimate />

    <ul>
      <h3>Your Incorrect Answers</h3>
      {#each incorrectResponses as incorrect}
        <li><h5>{incorrect.currentQuestion}</h5></li>
        <li class="incorrect">
          Your Answer: <b>{incorrect.response}</b>
        </li>
        <li class="correct">
          Correct Answer: <b>{incorrect.answer}</b>
        </li>
      {/each}
    </ul>

    <div class="btn">
      <NextBtn titel={'Start Again'} on:click />
    </div>
  </div>
</div>

<style>
  .card-container {
    perspective: 50em;
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    backdrop-filter: blur(20px);
  }

  .card-container {
    --bi: linear-gradient(#555 5em, #0000 3em),
      linear-gradient(60deg, #880e4f, #1a237e);
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    width: 79%;
    height: 79vh;
    padding: 3em;
    color: #fff;
    transform: rotateY(10deg) rotateX(5deg);
    transform-style: preserve-3d;
    transition: transform 1s;
  }

  .card:hover {
    transform: rotateY(5deg) rotateX(2.5deg);
  }

  .card::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    inset: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    z-index: -1;
  }

  .card::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 1em;
    background-image: var(--bi);
    transform: translateZ(var(--tz));
    box-shadow: 0 0 0.5em #110120dd inset;
  }
  .card ul {
    z-index: 100;
    overflow-y: scroll;
  }

  /* Works on Firefox */
  .card ul {
    scrollbar-width: thin;
    scrollbar-color: #16a085;
  }

  /* Works on Chrome, Edge, and Safari */
  .card ul::-webkit-scrollbar {
    width: 12px;
  }

  .card ul::-webkit-scrollbar-track {
    background: #16a085;
  }

  .card ul::-webkit-scrollbar-thumb {
    background-color: blue;
    border-radius: 20px;
    border: 3px solid #16a085;
  }

  h3 {
    color: #ce0505;
  }

  h5 {
    text-decoration-line: underline;
    text-decoration-color: #16a085;
    text-decoration-thickness: 2px;
    text-underline-offset: 5px;
  }

  .correct b {
    color: #15ac15;
  }
  .incorrect b {
    color: #e43838;
  }

  .btn {
    margin-top: auto;
    z-index: 200;
  }
</style>
