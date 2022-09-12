/**
 * Constants
 */
const INDEX_PAGE = '/index.html';
const QUIZ_PAGE = '/quiz.html';
const HYPOTENUSE_PAGE = '/hypotenuse.html';
const AREA_PAGE = '/area.html';

/**
 * Is Triangle section
 */
const initIsTriangleSection = () => {
  const isTriangleInputs = document.querySelectorAll('.angle-input');
  const checkTriangleBtn = document.querySelector('.check-triangle');
  const result = document.querySelector('.result');

  const isTriangleCheck = () => {
    // add validation to three fields

    let firstValue = parseInt(isTriangleInputs[0].value);
    let secondValue = parseInt(isTriangleInputs[1].value);
    let thirdValue = parseInt(isTriangleInputs[2].value);

    let errorMessage = '';
    result.textContent = '';
    if (isNaN(firstValue) || isNaN(secondValue) || isNaN(thirdValue)) {
      errorMessage =
        'You have given wrong inputs or no inputs, please check!! 👿';
      result.textContent = errorMessage;
      return;
    }

    // processing
    let message = '';
    if (firstValue + secondValue + thirdValue === 180) {
      message = 'Yes, with the given angles we can form a triangle 🎉';
    } else {
      message =
        'Sorry, with the given angles triangles cant be formed 😔 Try with different values.';
    }
    result.textContent = message;
  };

  checkTriangleBtn.addEventListener('click', isTriangleCheck);
};

/**
 * Quiz Section
 */

const initQuizSection = () => {
  const submitBtn = document.querySelector('.quiz-btn');
  const quizForm = document.querySelector('.form-container');
  const result = document.querySelector('.quiz-result');

  let answers = [
    '30,60,90',
    '1,1,2',
    '30',
    'equiangular',
    'congruent polygons',
    '4,8.5,14',
  ];

  const calculateResult = (event) => {
    event.preventDefault();
    let formData = new FormData(quizForm);
    let score = 0,
      index = 0;
    for (let result of formData.values()) {
      if (result === answers[index]) {
        score += 1;
      }
      index++;
    }

    result.textContent = `You have scored ${score}/6 🎉`;
  };

  submitBtn.addEventListener('click', calculateResult);
};

/**
 * Area of Triangle
 */

const initAreaOfTriangleSection = () => {
  const sideInputs = document.querySelectorAll('.side-input');
  const calculateAreaBtn = document.querySelector('.calculate-area');
  const result = document.querySelector('.result');

  const calculateArea = () => {
    const firstSide = parseInt(sideInputs[0].value);
    const secondSide = parseInt(sideInputs[1].value);
    const thirdSide = parseInt(sideInputs[2].value);

    let errorMessage = '';
    result.textContent = '';
    if (isNaN(firstSide) || isNaN(secondSide) || isNaN(thirdSide)) {
      errorMessage =
        'You have given wrong inputs or no inputs, please check!! 👿';
      result.textContent = errorMessage;
      return;
    }

    let message = '';
    if (
      firstSide + secondSide > thirdSide &&
      secondSide + thirdSide > firstSide &&
      firstSide + thirdSide > secondSide
    ) {
      let semiPerimeter = (firstSide + secondSide + thirdSide) / 2;
      let result = Math.sqrt(
        semiPerimeter *
          (semiPerimeter - firstSide) *
          (semiPerimeter - secondSide) *
          (semiPerimeter - thirdSide)
      ).toFixed(2);
      message = `Area of a triangle according to Heron's formula is ${result} units.`;
    } else {
      message = 'Enter valid lengths.';
    }

    result.textContent = message;
  };
  calculateAreaBtn.addEventListener('click', calculateArea);
};

/**
 * Main App function
 */
const App = () => {
  const navContents = document.querySelectorAll('.nav-text-content');

  let pathname = window.location.pathname;
  // adding css style to highlight in navbar and loading up the required function for this page
  if (pathname === INDEX_PAGE || pathname === '/') {
    navContents[0].classList.add('nav-active');
    initIsTriangleSection();
  } else if (pathname === QUIZ_PAGE) {
    navContents[1].classList.add('nav-active');
    initQuizSection();
  } else if (pathname === HYPOTENUSE_PAGE) {
    navContents[2].classList.add('nav-active');
  } else if (pathname === AREA_PAGE) {
    navContents[3].classList.add('nav-active');
    initAreaOfTriangleSection();
  }
};

App();
