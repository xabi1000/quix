/**
 * Shuffles the elements of an array and returns a new array containing a random selection of elements.
 *
 * @param {Array} array - The array to shuffle.
 * @return {Array} - A new array containing a random selection of elements from the original array.
 */

function getRandomElements(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [
      shuffledArray[j],
      shuffledArray[i],
    ];
  }
  return shuffledArray.slice(0, 5);
}

/**
 * Retrieves information about five countries from a REST API.
 *
 * @return {Promise<Array>} An array of five country objects.
 */

async function getFiveCountrys() {
  const URL = 'https://restcountries.com/v3.1/all';
  const response = await fetch(URL);
  const data = await response.json();
  const fiveCountries = await getRandomElements(data);
  return fiveCountries;
}

/**
 * Generates a list of questions and answers based on a set of countries.
 *
 * @return {Promise<Array>} An array of objects containing questions, options, and answers.
 */

export async function QuestionAndAnswerGenerator() {
  const countryList = await getFiveCountrys();
  const randomIndex = Math.floor(Math.random() * 5);
  const correctAnswer = countryList[randomIndex];

  /** [ALL QUESTIONS] */

  const allCountryNames = countryList.map(
    ({ name }) => name.common
  );

  const allCapitals = countryList.map(
    ({ capital }) => capital ?? 'does not have capital'
  );

  const maxPopulationNumber = Math.max(
    ...countryList.map(({ population }) => population)
  );
  const maxPopulationName = countryList.find(
    ({ population }) => population === maxPopulationNumber
  ).name.common;

  const minSurfaceNumber = Math.min(
    ...countryList.map(({ area }) => area)
  );

  const minSurfaceName = countryList.find(
    ({ area }) => area === minSurfaceNumber
  ).name.common;

  const AllregionNames = countryList.map(
    ({ region }) => region
  );

  const allFlags = countryList.map(({ flag }) => flag);

  const result = [
    {
      question: `What is the capital of ${correctAnswer.name.common}?`,
      options: allCapitals.flat(2),
      answer: `${correctAnswer.capital}`,
    },
    {
      question:
        'What is the most populous country on the list?',
      options: allCountryNames.flat(2),
      answer: maxPopulationName,
    },
    {
      question:
        'Which country is the smallest in terms of area?',
      options: allCountryNames.flat(2),
      answer: minSurfaceName,
    },
    {
      question: `In which continent is ${correctAnswer.name.common} located?`,
      options: AllregionNames.flat(2),
      answer: `${correctAnswer.region}`,
    },
    {
      question: `What is the flag of ${correctAnswer.name.common}?`,
      options: allFlags.flat(2),
      answer: `${correctAnswer.flag}`,
    },
  ];
  return result;
}
