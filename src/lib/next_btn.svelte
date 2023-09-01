<script>
  export let titel;
</script>

<button type="submit" class="next" on:click>
  <span class="text-container">
    <span class="text">{titel}</span>
  </span>
</button>

<style>
  .next,
  .next *,
  .next :after,
  .next :before,
  .next:after,
  .next:before {
    border: 0 solid;
  }
  .next {
    --tilt: 30px;
    -webkit-tap-highlight-color: transparent;
    appearance: button;
    -webkit-appearance: button;
    mask-image: -webkit-radial-gradient(#000, #fff);
    -webkit-mask-image: -webkit-radial-gradient(#000, #fff);
    background-color: #0b1423;
    background-image: none;
    color: #fff;
    cursor: pointer;
    font-size: 100%;
    font-weight: 900;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    width: 100%;
    display: grid;
    padding: 0.5rem 2rem;
    place-content: center;
    -webkit-animation: move-right-alternate 0.7s ease
      forwards;
    animation: move-right-alternate 0.7s ease forwards;
  }
  .next:disabled {
    cursor: default;
  }
  .next:-moz-focusring {
    outline: auto;
  }

  .next,
  .next .text-container {
    overflow: hidden;
    position: relative;
  }
  .next .text-container {
    display: block;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
  }
  .next .text {
    display: block;
    font-weight: 900;
    mix-blend-mode: difference;
    position: relative;
  }

  /* .next:hover .text {
    -webkit-animation: move-right-alternate 0.3s ease
      forwards;
    animation: move-right-alternate 0.3s ease forwards;
  } */

  @-webkit-keyframes move-right-alternate {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(80%);
    }
    51% {
      transform: translateX(-80%);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes move-right-alternate {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(80%);
    }
    51% {
      transform: translateX(-80%);
    }
    to {
      transform: translateX(0);
    }
  }
  .next:before {
    -webkit-animation: move-out 0.3s ease;
    animation: move-out 0.3s ease;
    background: #342a45;
    -webkit-clip-path: polygon(
      0 0,
      calc(100% - var(--tilt)) 0,
      100% 50%,
      calc(100% - var(--tilt)) 100%,
      0 100%
    );
    clip-path: polygon(
      0 0,
      calc(100% - var(--tilt)) 0,
      100% 50%,
      calc(100% - var(--tilt)) 100%,
      0 100%
    );
    content: '';
    height: 100%;
    left: calc(-100% - var(--tilt));
    position: absolute;
    top: 0;
    width: calc(100% + var(--tilt));
  }
  .next:hover:before {
    -webkit-animation: move-in 0.3s ease forwards;
    animation: move-in 0.3s ease forwards;
  }
  @-webkit-keyframes move-in {
    0% {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }
  @keyframes move-in {
    0% {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }
  @-webkit-keyframes move-out {
    0% {
      transform: translateX(100%);
    }
    to {
      transform: translateX(200%);
    }
  }
  @keyframes move-out {
    0% {
      transform: translateX(100%);
    }
    to {
      transform: translateX(200%);
    }
  }
</style>
