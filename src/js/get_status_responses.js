export function getStatusResponses(
  check_Response,
  inputValue,
  quizQuestiosGame,
  index,
  allPlayerResponses
) {
  let correctResponses = {
    status: 'correct',
    titel: 'Correct Answers',
    question: '',
    answer: '',
    playerResponses: '',
  };
  let incorrectResponses = {
    status: 'incorrect',
    titel: 'Incorrect Answers',
    question: '',
    answer: '',
    playerResponses: '',
  };
  if (check_Response) {
    correctResponses = {
      ...correctResponses,
      question: quizQuestiosGame[index].question,
      answer: quizQuestiosGame[index].answer,
      playerResponses: inputValue,
    };
    allPlayerResponses = [
      ...allPlayerResponses,
      correctResponses,
    ];
  } else {
    incorrectResponses = {
      ...incorrectResponses,
      question: quizQuestiosGame[index].question,
      answer: quizQuestiosGame[index].answer,
      playerResponses: inputValue,
    };
    allPlayerResponses = [
      ...allPlayerResponses,
      incorrectResponses,
    ];
  }
  return allPlayerResponses;
}
