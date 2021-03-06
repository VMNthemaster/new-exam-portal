import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react';
import styles from '../styles/Home.module.css'
import quest from '../question.json';
import { useNavigate } from 'react-router-dom'

export default function Home() {
  // const navigate = useNavigate();

  const [count, setCount] = useState(0);
  const [userquestion, setUserQuestion] = useState({
    questions: quest,
    currentQuestion: 0,
  });
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleAnswerOption = (answer) => {
    setSelectedOptions([
      (selectedOptions[currentQuestion] = { 
        answerByUser: answer,
        // bgcolor: bg-green-500
      }),
    ]);
    setSelectedOptions([...selectedOptions]);
    console.log(selectedOptions);

  };

  const Ref = useRef(null);
  const [timer, setTimer] = useState('00:00:00');

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 * 60 * 60) % 24);
    return {
      total, hours, minutes, seconds
    };
  }

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } 
                = getTimeRemaining(e);
    if (total >= 0) {

        // update the timer
        // check if less than 10 then we need to 
        // add '0' at the begining of the variable
        setTimer(
            (hours > 9 ? hours : '0' + hours) + ':' +
            (minutes > 9 ? minutes : '0' + minutes) + ':'
            + (seconds > 9 ? seconds : '0' + seconds)
        )
    }
}


const clearTimer = (e) => {
  
  // If you adjust it you should also need to
  // adjust the Endtime formula we are about
  // to code next    
  setTimer('00:00:30');

  // If you try to remove this line the 
  // updating of timer Variable will be
  // after 1000ms or 1sec
  if (Ref.current) clearInterval(Ref.current);
  const id = setInterval(() => {
      startTimer(e);
  }, 1000)
  Ref.current = id;
}

const getDeadTime = () => {
  let deadline = new Date();

  // This is where you need to adjust if 
  // you entend to add more time
  deadline.setSeconds(deadline.getSeconds() + 30);
  return deadline;
}

// We can use useEffect so that when the component
// mount the timer will start as soon as possible

// We put empty array to act as componentDid
// mount only
useEffect(() => {
  clearTimer(getDeadTime());
}, []);

  const handleAddCount = () => {
    setCount(count + 1);
  };

  const handlePrev = (e) => {
    const countPrev = e - 1;
    //console.log("Value",e);
    //console.log("Count Prev",countPrev);
    setUserQuestion({
      questions: questions,
      currentQuestion: countPrev
    });
  };

  const handleNext = (value) => {
    const countNext = value + 1;
    //console.log(countNext);
    setUserQuestion({
      questions: questions,
      currentQuestion: countNext
    });
  };

  const handleCurrentQuestion = (index) =>{
    //console.log(countNext);
    setUserQuestion({
      questions: questions,
      currentQuestion: index
    });
  };

const handleSubmit = () => {
    alert("Are you sure to submit?")
}

const addbg = () => {
  let text = document.getElementById('questions');
	text.classList.add('bg-green-500');
  // console.log(text.classList);
}


  const { questions, currentQuestion } = userquestion;

  //console.log(userquestion.questions[0]);
  //console.log(questions.length);

const handlefullscreen = () => {
  let el = document.documentElement;
let btn = document.getElementById("btn"); 

btn.addEventListener("click", ()=>{
   if(el.requestFullscreen){
     el.requestFullscreen();
   }
});
}


  return (

    <div className={styles.container}>

      <button onClick={handlefullscreen} id='btn' className="btn bg-black text-white px-2 py-2 rounded-sm ">Full Screen</button>





      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://texephyr.in">Texephyr</a>
        </h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Q {currentQuestion+1}</h2>
            
            <p className={styles.center}>
              {timer}
              <br />
              {(timer === '00:00:00')?('Time Is Over'):('')}
              {/* {(timer === '00:00:00')? navigate("/submit"): ""} */}
            </p>
            {/* <button type='button' onClick={handleAddCount}>Add</button> */}
          </div>
          <div className={styles.card}>
            <h2>{questions[currentQuestion].question}</h2>
            <div className={styles.flex}>
                <input 
                        type="radio" 
                        className={`w-6 h-6 bg-black `}
                        onClick = {()=>addbg()}
                        name={questions[currentQuestion].optionA}
                        value={questions[currentQuestion].optionA}
                        onChange={(e) => {
                          handleAnswerOption(questions[currentQuestion].optionA)
                          addbg()
                        }}
                        checked={
                          questions[currentQuestion].optionA === selectedOptions[currentQuestion]?.answerByUser
                        }
                />        
                <p onClick = {()=>addbg()} className={styles.center}>{questions[currentQuestion].optionA}</p>
            </div>
            <div className={styles.flex}>
                <input 
                        type="radio" 
                        className="w-6 h-6 bg-black"
                        name={questions[currentQuestion].optionB}
                        value={questions[currentQuestion].optionB}
                        onChange={(e) => handleAnswerOption(questions[currentQuestion].optionB)}
                        checked={
                          questions[currentQuestion].optionB === selectedOptions[currentQuestion]?.answerByUser
                        }
                />        
                <p className={styles.center}>{questions[currentQuestion].optionB}</p>
            </div>
            <div className={styles.flex}>
                <input 
                        type="radio" 
                        className="w-6 h-6 bg-black"
                        name={questions[currentQuestion].optionC}
                        value={questions[currentQuestion].optionC}
                        onChange={(e) => handleAnswerOption(questions[currentQuestion].optionC)}
                        checked={
                          questions[currentQuestion].optionC === selectedOptions[currentQuestion]?.answerByUser
                        }
                />        
                <p className={styles.center}>{questions[currentQuestion].optionC}</p>
            </div>
            <div className={styles.flex}>
                <input 
                        type="radio" 
                        className="w-6 h-6 bg-black"
                        name={questions[currentQuestion].optionD}
                        value={questions[currentQuestion].optionD}
                        onChange={(e) => handleAnswerOption(questions[currentQuestion].optionD)}
                        checked={
                          questions[currentQuestion].optionD === selectedOptions[currentQuestion]?.answerByUser
                        }
                />        
                <p className={styles.center}>{questions[currentQuestion].optionD}</p>
            </div>
            {(currentQuestion != 0) ? (<button type='button' onClick={() => handlePrev(currentQuestion)}>Prev</button>) : (<button type='button' disabled>Prev</button>)}
            {(currentQuestion != questions.length-1) ? (<button type='button' onClick={() => handleNext(currentQuestion)}>Next</button>) : (<button type='button' disabled = "true" >Next</button>)}
            {(currentQuestion === questions.length-1) ? (<button type = "button" onClick = {() => handleSubmit()}>Submit</button>  ) : ""}
          </div>
          <div className={styles.card}>
            <h2>Question</h2>
            <div className={styles.flex}>
              {questions.map((cval,i)=>(
                <p 
                id='questions'
                className= {`cursor-pointer flex items-center justify-center questions `}  // ${selectedOptions[currentQuestion].answerByUser != "undefined"? "bg-green-400" : ""}
                key={i}
                onClick={(e) => handleCurrentQuestion(i)}
               >
                  {i+1}
                </p>
              ))}
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}
