import { Button, Grid } from "@mui/material";
import "../AI Pages/aiPages.css";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useEffect, useState } from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useLocation, useNavigate } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import "./question.css"

var questions = [
    {
        "code": "console.log(typeof('Hello'));",
        "question": "What is the output of the following code?",
        "options": ["string", "number", "boolean", "undefined"],
        "answer": "string",
        "explanation": "This question tests your understanding of the typeof operator in JavaScript. When applied to a string, the typeof operator returns 'string' as the output, indicating that the value is of type string."
    },
    {
        "code": "let numbers = [1, 2, 3, 4, 5];\nconsole.log(numbers.length);",
        "question": "What is the output of the following code?",
        "options": ["1", "4", "5", "Error"],
        "answer": "5",
        "explanation": "This question focuses on the length property of an array in JavaScript. The 'numbers' array contains 5 elements, so when the length property is accessed, it returns the number of elements in the array, which is 5."
    },
    {
        "code": "let x = 5;\nconsole.log(x++);",
        "question": "What is the output of the following code?",
        "options": ["4", "5", "6", "Error"],
        "answer": "5",
        "explanation": "This question tests your understanding of the post-increment operator (++). The post-increment operator increases the value of a variable by 1 after it has been evaluated. In this case, 'x++' returns the current value of 'x' (which is 5) and then increments 'x' to 6. Therefore, the output will be 5."
    },
    {
        "code": "let person = {\n  name: 'John',\n  age: 25\n};\nconsole.log(person.name);",
        "question": "What is the output of the following code?",
        "options": ["John", "name", "undefined", "Error"],
        "answer": "John",
        "explanation": "This question focuses on accessing object properties in JavaScript. The 'person' object has a property called 'name' with the value 'John'. To access the value of the 'name' property, you can use dot notation (person.name). Therefore, the output will be 'John'."
    },
    {
        "code": "let x = 10;\nif (x > 5) {\n  console.log('x is greater than 5');\n} else {\n  console.log('x is less than or equal to 5');\n}",
        "question": "What will be printed to the console?",
        "options": ["x is greater than 5", "x is less than or equal to 5", "Both of the above", "None of the above"],
        "answer": "x is greater than 5",
        "explanation": "This question tests your understanding of conditional statements in JavaScript. Since the value of 'x' is 10, which is greater than 5, the condition 'x > 5' evaluates to true. Therefore, the code inside the if block will execute and print 'x is greater than 5' to the console."
    },
    {
        "code": "let x = 10;\nlet y = '5';\nconsole.log(x + y);",
        "question": "What is the output of the following code?",
        "options": ["15", "105", "NaN", "Error"],
        "answer": "105",
        "explanation": "This question tests your understanding of JavaScript's type coercion. When using the + operator with a string and a number, JavaScript performs implicit type coercion and concatenates the values as strings. In this case, the number 10 is coerced to a string and concatenated with the string '5', resulting in '105' as the output."
    },
    {
        "code": "let greeting = 'Hello';\nconsole.log(greeting.length);",
        "question": "What is the output of the following code?",
        "options": ["4", "5", "6", "Error"],
        "answer": "5",
        "explanation": "This question focuses on the length property of a string in JavaScript. The 'greeting' variable contains the string 'Hello', which has 5 characters. When the length property is accessed on a string, it returns the number of characters in the string, which is 5."
    },
    {
        "code": "let numbers = [1, 2, 3, 4, 5];\nconsole.log(numbers[2]);",
        "question": "What is the output of the following code?",
        "options": ["1", "2", "3", "Error"],
        "answer": "3",
        "explanation": "This question tests your understanding of accessing array elements in JavaScript. The 'numbers' array contains elements [1, 2, 3, 4, 5]. Array indices start from 0, so numbers[2] accesses the element at index 2, which is 3. Therefore, the output will be 3."
    },
    {
        "code": "let x = 5;\nlet y = 10;\nif (x > y) {\n  console.log('x is greater than y');\n} else {\n  console.log('x is less than or equal to y');\n}",
        "question": "What will be printed to the console?",
        "options": ["x is greater than y", "x is less than or equal to y", "Both of the above", "None of the above"],
        "answer": "x is less than or equal to y",
        "explanation": "This question tests your understanding of conditional statements in JavaScript. Since the value of 'x' is 5 and the value of 'y' is 10, the condition 'x > y' evaluates to false. Therefore, the code inside the else block will execute and print 'x is less than or equal to y' to the console."
    },
    {
        "code": "let age = 18;\nlet canVote = (age >= 18) ? 'Yes' : 'No';\nconsole.log(canVote);",
        "question": "What is the output of the following code?",
        "options": ["Yes", "No", "true", "false"],
        "answer": "Yes",
        "explanation": "This question focuses on the ternary operator (conditional operator) in JavaScript. The code `(age >= 18) ? 'Yes' : 'No'` checks if the value of 'age' is greater than or equal to 18. If the condition is true, 'Yes' is assigned to the 'canVote' variable; otherwise, 'No' is assigned. Since the value of 'age' is 18, which satisfies the condition, the output will be 'Yes'."
    },
    {
        "code": "let x = 5;\nlet y = x++;\nconsole.log(y);",
        "question": "What is the output of the following code?",
        "options": ["5", "6", "4", "Error"],
        "answer": "5",
        "explanation": "This question tests your understanding of post-increment operator in JavaScript. The `x++` statement increments the value of `x` after assigning its current value to `y`. Therefore, the value of `y` will be the original value of `x` (5)."
    },
    {
        "code": "let message = \"Hello, World!\";\nconsole.log(message.length);",
        "question": "What is the output of the following code?",
        "options": ["13", "12", "11", "Error"],
        "answer": "13",
        "explanation": "This question focuses on the `length` property of strings in JavaScript. The `length` property returns the number of characters in a string. In this case, the string \"Hello, World!\" has 13 characters, so the output will be 13."
    },
    {
        "code": "let num = 0;\nwhile (num < 5) {\n    console.log(num);\n    num++;\n}",
        "question": "What will be printed to the console?",
        "options": ["0", "1", "0 1", "0 1 2 3 4"],
        "answer": "0 1 2 3 4",
        "explanation": "This question tests your understanding of the `while` loop in JavaScript. The code initializes `num` with 0 and continues printing its value until `num` becomes 5 (exclusive). The loop will iterate 5 times, printing the numbers 0, 1, 2, 3, and 4 to the console."
    },
    {
        "code": "let fruits = [\"apple\", \"banana\", \"orange\"];\nfor (let fruit of fruits) {\n    console.log(fruit);\n}",
        "question": "What will be printed to the console?",
        "options": ["apple", "banana", "orange", "apple banana orange"],
        "answer": "apple banana orange",
        "explanation": "This question focuses on the `for...of` loop in JavaScript used to iterate over elements of an array. The loop iterates through each element in the `fruits` array and prints it to the console, resulting in the output \"apple banana orange\"."
    },
    {
        "code": "function multiply(a, b) {\n    return a * b;\n}\n\nlet result = multiply(3, 4);\nconsole.log(result);",
        "question": "What is the output of the above code?",
        "options": ["7", "12", "1", "Error"],
        "answer": "12",
        "explanation": "This question tests your understanding of function invocation and return values in JavaScript. The `multiply` function takes two arguments and returns their product. When called with the arguments 3 and 4, the function returns the result 12, which is then printed to the console."
    },
    {
        "code": "let x = 10;\nif (x > 5 && x < 15) {\n    console.log('Yes');\n} else {\n    console.log('No');\n}",
        "question": "What will be printed to the console?",
        "options": ["Yes", "No", "Yes No", "No Yes"],
        "answer": "Yes",
        "explanation": "This question tests your understanding of logical operators in JavaScript. The condition `x > 5 && x < 15` checks if `x` is greater than 5 and less than 15. Since the value of `x` is 10, which satisfies the condition, 'Yes' will be printed to the console."
    },
    {
        "code": "let numbers = [1, 2, 3, 4, 5];\nlet sum = 0;\nfor (let number of numbers) {\n    sum += number;\n}\nconsole.log(sum);",
        "question": "What is the output of the following code?",
        "options": ["15", "10", "5", "Error"],
        "answer": "15",
        "explanation": "This question focuses on the concept of iterating over an array and accumulating values. The code uses a for...of loop to iterate through each element of the 'numbers' array and adds it to the 'sum' variable. Finally, the value of 'sum' (which is the sum of all numbers in the array) will be printed to the console."
    },
    {
        "code": "let name = 'John';\nconsole.log(`Hello, ${name}!`);",
        "question": "What will be printed to the console?",
        "options": ["Hello, John!", "Hello, name!", "Hello, ${name}!", "Error"],
        "answer": "Hello, John!",
        "explanation": "This question tests your understanding of template literals in JavaScript. The code uses template literals, denoted by backticks (`), to concatenate the value of the 'name' variable within the string. Therefore, 'Hello, John!' will be printed to the console."
    },
    {
        "code": "let num = 5;\nconsole.log(typeof num);",
        "question": "What is the output of the following code?",
        "options": ["Number", "String", "Boolean", "Error"],
        "answer": "Number",
        "explanation": "This question focuses on the typeof operator in JavaScript, which is used to determine the type of a value. In this case, the 'num' variable is assigned a numerical value, so the output will be 'Number', indicating that the type of 'num' is a number."
    },
    {
        "code": "function greet(name) {\n    console.log(`Hello, ${name}!`);\n}\ngreet('Alice');",
        "question": "What will be printed to the console?",
        "options": ["Hello, name!", "Hello, Alice!", "Hello, undefined!", "Error"],
        "answer": "Hello, Alice!",
        "explanation": "This question tests your understanding of function parameters and arguments. The 'greet' function takes a 'name' parameter and logs a greeting message using template literals. When called with the argument 'Alice', the function will print 'Hello, Alice!' to the console."
    }
];

let currentQuestion = 0;
var collapseClosed = true;

export function QuizQuestion() {
    const [question, setQuestion] = useState({
        "code": "",
        "question": "",
        "options": [],
        "answer": "",
        "explanation": ""
    });
    const location = useLocation();
    useEffect(() => {
        collapseClosed = true;
        const params = new URLSearchParams(location.search);
        currentQuestion = params.get('no');
        setQuestion(questions[currentQuestion]);
        // To stop the speech synthesis
        speechSynthesis.cancel();
    }, [])
    const navigate = useNavigate();
    const back = () => {
        currentQuestion--;
        setQuestion(questions[currentQuestion]);

        const url = new URLSearchParams(location.hash.substring(1));
        url.set('no', currentQuestion);
        navigate(location.pathname + '?' + url.toString());
        // To stop the speech synthesis
        speechSynthesis.cancel();

        collapseClosed = true;
    }

    const next = () => {
        currentQuestion++;
        setQuestion(questions[currentQuestion]);
        const url = new URLSearchParams(location.hash.substring(1));
        url.set('no', currentQuestion);
        navigate(location.pathname + '?' + url.toString());
        // To stop the speech synthesis
        speechSynthesis.cancel();

        collapseClosed = true;
    }
    
    const readoutExplanation = (explanation) => {            
            if (!collapseClosed) { collapseClosed = !collapseClosed; speechSynthesis.cancel(); return;}
            var speech = new SpeechSynthesisUtterance();
            speech.text = explanation;
            speechSynthesis.speak(speech);
            collapseClosed = !collapseClosed;
    }
    return (
        <Grid container>
            <Grid container style={{ display: "flex", justifyContent: "space-between" }}>
                <Grid item xs={3}><Button variant="contained" style={{ background: "#00bfa5" }} onClick={back} disabled={currentQuestion == 0}><NavigateBeforeIcon style={{ fontSize: "20px" }} /> Back</Button></Grid>
                <Grid item xs={3} style={{ display: "flex", justifyContent: "flex-end" }}><Button onClick={next} disabled={currentQuestion == questions.length - 1} variant="contained" style={{ background: "#00bfa5" }}> Next <NavigateNextIcon style={{ fontSize: "20px" }} /></Button></Grid>
            </Grid>
            <Grid container>
                <Quiz questionNo={currentQuestion} question={question.question} options={question.options} answer={question.answer} code={question.code} />
            </Grid>
            <Grid container>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon onClick={() => readoutExplanation(question.explanation)} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography> <TipsAndUpdatesIcon className="helpicon" style={{ fontSize: "20px", color: "#FBC02D" }} /> Hint</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {question.explanation}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>
    )
}

const Quiz = ({ question, options, answer, code, questionNo }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option, answer) => {
        setSelectedOption(option);
        console.log(answer, option, "answer == option")
        if (answer == option) {
            let solved = localStorage.getItem("solved").split(",");
            if (solved.indexOf(questionNo) == -1) // push only if it not exeed
                solved.push(questionNo);
            localStorage.setItem("solved", solved.join(","));
        }
    };

    return (
        <div className="quiz" style={{ width: "100%" }}>
            <h2 className="question">{question}</h2>
            {
                code ? (<SyntaxHighlighter language="javascript" className="code" style={darcula}>
                    {code}
                </SyntaxHighlighter>) : null
            }
            <ul className="options">
                {options.map((option, index) => (
                    <li
                        key={index}
                        className={`option ${selectedOption === option ? (option === answer ? 'correct' : 'incorrect') : ''}`}
                        onClick={() => handleOptionClick(option, answer)}
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    );
};