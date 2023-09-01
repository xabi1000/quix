<script>
  const improved = [
    'Global Perception',
    'Geographic Wisdom',
    'Geographic Culture',
    'Insight&nbsp;Into&nbsp;Continents',
    'Geographic Cunning',
    'Map Skills',
  ];
</script>

<div class="container">
  <p>Today You Improved In:</p>
  <div class="content">
    <div class="visible">
      <ul>
        {#each improved as item}
          <li>{@html item}</li>
        {/each}
      </ul>
    </div>
  </div>
</div>

<style>
  .container {
    width: 100%;
  }

  .container p {
    position: absolute;
    top: 0;
    padding: 1em 0;
    margin: 0;
    font-size: clamp(1.2rem, 5.5vw, 1.5rem);
  }

  .content,
  .content * {
    line-height: 40px;
  }

  .content {
    font-size: 1.3em;
    font-family: 'Muli';
    color: #ecf0f1;
    height: 40px;
    position: relative;
    margin-top: 3rem;
  }

  .content:after,
  .content:before {
    position: absolute;
    top: 0;
    color: #16a085;
    font-size: 42px;
    animation: 2s linear 0s normal none infinite opacity;
    -webkit-animation: 2s ease-out 0s normal none infinite
      opacity;
    -moz-animation: 2s ease-out 0s normal none infinite
      opacity;
    -o-animation: 2s ease-out 0s normal none infinite
      opacity;
  }

  .content:before {
    content: '[';
    left: -10px;
  }
  .content:after {
    content: ']';
    right: -10px;
  }

  .visible {
    display: flex;
    gap: 1em;
    font-weight: 600;
    overflow: hidden;
    height: 40px;
  }

  ul {
    text-align: center;
    width: 100%;
    list-style: none;
    animation: 21s linear 0s normal none infinite change;
    -webkit-animation: 21s linear 0s normal none infinite
      change;
    -moz-animation: 21s linear 0s normal none infinite
      change;
    -o-animation: 21s linear 0s normal none infinite change;
  }

  @-webkit-keyframes opacity {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes opacity {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @-webkit-keyframes change {
    0% {
      transform: translateY(0);
    }
    10% {
      transform: translateY(-40px);
    }
    20% {
      transform: translateY(-80px);
    }
    30% {
      transform: translateY(-120px);
    }
    40% {
      transform: translateY(-160px);
    }
    50% {
      transform: translateY(-200px);
    }
    60% {
      transform: translateY(-160px);
    }
    70% {
      transform: translateY(-120px);
    }
    80% {
      transform: translateY(-80px);
    }
    90% {
      transform: translateY(-40px);
    }
    100% {
      transform: translateY(0);
    }
  }
  @keyframes change {
    0% {
      transform: translateY(0);
    }
    10% {
      transform: translateY(-40px);
    }
    20% {
      transform: translateY(-80px);
    }
    30% {
      transform: translateY(-120px);
    }
    40% {
      transform: translateY(-160px);
    }
    50% {
      transform: translateY(-200px);
    }
    60% {
      transform: translateY(-160px);
    }
    70% {
      transform: translateY(-120px);
    }
    80% {
      transform: translateY(-80px);
    }
    90% {
      transform: translateY(-40px);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>
