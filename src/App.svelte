<script>
  // @ts-nocheck
  import { QuestionAndAnswerGenerator } from './js/data.js';
  import { newDate } from './js/get_date.js';
  import { v4 as uuidv4 } from 'uuid';
  import { onMount } from 'svelte';
  import NextBtn from './lib/next_btn.svelte';
  import OptionsAnswer from './lib/options_answer.svelte';
  import GameResults from './lib/game_results.svelte';

  // LOCALSTORAGE
  if (localStorage.getItem('gameResultes')) {
    allPlayerResponses = JSON.parse(
      localStorage.getItem('gameResults')
    );
  }

  // VARIABLES

  let quizQuestionsGame = [];
  let translateQuizOptions = 0;
  let index = 0;
  let gameOver = false;

  let allPlayerResponses = [];

  // FUNCTIONS

  async function getData() {
    quizQuestionsGame = await QuestionAndAnswerGenerator();
  }

  function getStatusResponses(
    inputValue,
    index,
    check_Response
  ) {
    const now = newDate();
    const currentQuestion =
      quizQuestionsGame[index].question;
    const answer = quizQuestionsGame[index].answer;
    const playerResponse = {
      currentQuestion,
      answer,
      response: inputValue,
      date: now,
      status: check_Response,
    };

    allPlayerResponses =
      allPlayerResponses.concat(playerResponse);
  }

  function nextQuestion() {
    ++index;
    if (index === quizQuestionsGame.length) {
      index = 0;
      localStorage.setItem(
        'gameResults',
        JSON.stringify(allPlayerResponses)
      );
      gameOver = true;
    }
    translateQuizOptions = index * 100;
  }

  function getResponse(e) {
    let inputValue = e.target.textContent;
    let check_Response =
      quizQuestionsGame[index].answer === inputValue;
    getStatusResponses(inputValue, index, check_Response);
    nextQuestion();
  }

  function restarTheGame() {
    gameOver = false;
    getData();
  }

  $: console.log(allPlayerResponses);
  $: console.log(quizQuestionsGame[index]?.question);

  onMount(async () => {
    getData();
  });
</script>

<main>
  <h1>Test Your Geography</h1>
  {#if quizQuestionsGame.length !== 0}
    <form on:submit|preventDefault>
      <p class="quiz__question">
        {quizQuestionsGame[index]?.question}
      </p>
      {#each quizQuestionsGame as { options, id }, i}
        <div
          class="quiz__options"
          style="--translate_value: -{translateQuizOptions}%;"
        >
          <ul class="options__list">
            {#each options as option, j}
              <li>
                <OptionsAnswer
                  {option}
                  on:click={getResponse}
                />
              </li>
            {/each}
          </ul>
        </div>
      {/each}

      {#if index > 0}
        <div class="next">
          {#key index}
            <NextBtn
              titel={'Next'}
              on:click={getResponse}
            />
          {/key}
        </div>
      {/if}
    </form>
    {#if gameOver}
      {#key gameOver}
        <GameResults
          {allPlayerResponses}
          on:click={restarTheGame}
        />
      {/key}
    {/if}
  {/if}
</main>

<style>
  h1,
  p {
    margin: 0;
  }
  main,
  form,
  .quiz__options,
  .options__list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  main {
    padding: 2em 0;
    gap: 3em;
    min-height: 100vh;
  }

  form {
    flex-direction: row;
    justify-content: start;
    position: relative;
    overflow-x: hidden;
    min-height: 75vh;
    max-width: 30rem;
    min-width: 20rem;
    width: 10vw;
    box-shadow: 0px 2px 14px 0px #fff;
    padding: 2em 0;
    border-radius: 7px;
  }

  .next {
    margin-top: auto;
    position: absolute;
    inset: auto 0 0 0;
  }
  .quiz__question {
    position: absolute;
    inset: 5vh 0 auto 0%;
    text-align: center;
    font-size: clamp(1.3rem, 6vw, 2rem);
  }

  .quiz__options {
    min-width: 100%;
    height: 100%;
    padding: 0 2rem;
    gap: 1.5em;
    margin-bottom: 3rem;
    margin-top: auto;
    transition: transform 1s ease-in-out;
    transform: translateX(var(--translate_value, 0));
  }

  .options__list {
    gap: 1em;
    width: 100%;
  }

  :is(li) {
    width: 100%;
    height: 3rem;
  }
</style>
