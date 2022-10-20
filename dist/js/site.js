
let questions = [
  {
    id: 1,
    question: "What is the correct file extension for Python files",
    answer: ".py",
    options: [
      ".pyt",
      ".pt",
      ".py",
      ".pyth"
    ]
  },
  {
    id: 2,
    question: "What is the correct syntax to output the type of a variable or object in Python?",
    answer: "print(type(x))  ",
    options: [
      "print(typeOf(x))",
      "print(typeof x)",
      "print(type(x))",
      "print(typeof(x))"
    ]
  },
  {
    id: 3,
    question: "Which method can be used to return a string in upper case letters?",
    answer: "upper()",
    options: [
      "toUpperCase()",
      "upperCase()",
      "upper()",
      "uppercase()"
    ]
  },
  {
    id: 4,
    question: "How do you insert COMMENTS in Python code?",
    answer: "#This is a comment",
    options: [
      "#This is a comment",
      "//This is a comment",
      "/*This is a comment*/",
      "None of these"
    ]
  },
  {
    id: 5,
    question: "Which of these collections defines a LIST?",
    answer: '["apple", "banana", "cherry"]',
    options: [
      '("apple", "banana", "cherry")',
      '{"name": "apple", "color": "green"}',
      '["apple", "banana", "cherry"]  ',
      '{"apple", "banana", "cherry"}'
    ]
  },
];

let question_count = 0;


//when the app loads for first time
window.onload = function() {
  show(question_count);
};

function next() {


  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = 
  `<h2>Q${count + 1}. ${questions[count].question}</h2>
  <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
  </ul> 
  `;
  toggleActive();
}

// Making options active
function toggleActive() {
  let option = document.querySelectorAll("li.option");  //returns list
  //console.log(option)
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {   //returns CSS classnames of an element.
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
