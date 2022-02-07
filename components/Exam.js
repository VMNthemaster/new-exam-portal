import { useState, useLayoutEffect } from "react";
import questions from "../../questions.json";
import isEmpty from "../utils/is-empty";

const Exam = () => {


    const [quest, setquest] = useState({
        questions: questions,
        currentQuestion: {},
        nextQuestion: {},
        previousQuestion: {},
        answer: '',
        numberofQuestions: 0,
        numberofAnsweredQuestion: 0,
        currentQuestionIndex: 0,
        time: {}
    });




    const { currentQuestion } = quest;



    useLayoutEffect(() => {
        const { questions, currentQuestion, nextQuestion, previousQuestion } = quest;
        display(questions, currentQuestion, nextQuestion, previousQuestion);
    }, []);


    const display = (questions = quest.questions, currentQuestion, nextQuestion, previousQuestion) => {
        let { currentQuestionIndex } = quest;
        if (!isEmpty(quest.questions)) {
            questions = quest.questions;
            currentQuestion = questions[currentQuestionIndex];
            nextQuestion = questions[currentQuestionIndex + 1];
            previousQuestion = questions[currentQuestionIndex - 1];
            //const answer = currentQuestion.answer;
            //console.log(currentQuestion.answer);
            // console.log(currentQuestion);

            setquest({
                questions: questions,
                currentQuestion: currentQuestion,
                nextQuestion: nextQuestion,
                previousQuestion: previousQuestion,
                //answer
            });
        }
    };

    const [storeqna, setStoreqna] = useState({
        userquestions: [],
        useranswers: []
    });

    const handleOptionClick = (value) => {
        // setStoreqna({
        //     userquestions: questions[currentQuestionIndex],
        //     useranswers: value,

        // })
        console.log(value)
        // console.log(storeqna);
    }


    return <>

        <div className='container mt-12 px-4 py-4 '>
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-3">
                    <div className='box1 bg-slate-100  p-4 border  border-gray-300 rounded-sm'>
                        <div className='box2 bg-slate-100 space-y-2 border  border-gray-300 p-3 rounded-sm'>
                            <div>
                                <button className="bg-white rounded text-gray-800 font-semibold py-1 px-2 border border-gray-400 ">
                                    Q
                                </button>
                            </div>
                            <div className="container-fluid rounded-sm">
                                <p className=" flex items-center background bg-gray-300 h-8 py-5 px-3">{currentQuestion.problem}</p>
                            </div>
                            <div className='container-fluid'>
                                <div className="radio">
                                    <label> </label>
                                    <label className="space-x-2"><label onClick={() => {
                                        handleOptionClick("option1")
                                    }}  id="o1">Option 1</label></label>
                                </div>
                                <div className="radio">
                                    <label> </label>
                                    <label className="space-x-2"><label onClick={() => {
                                        handleOptionClick("option2")
                                    }}  id="o2">Option 2</label></label>
                                </div>
                                <div className="radio">
                                    <label> </label>
                                    <label className="space-x-2"><label onClick={() => {
                                        handleOptionClick("option3")
                                    }}  id="o3">Option 3</label></label>
                                </div>
                                <div className="radio">
                                    <label> </label>
                                    <label className="space-x-2"><label onClick={() => {
                                        handleOptionClick("option4")
                                    }}  id="o4">Option 4</label></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='box1 border p-4  border-gray-300 rounded-sm'>
                        <div className='box2 space-y-2 border  border-gray-300 p-3 rounded-sm'>
                            <div className='row-span-3'>
                                <div className='text-center'>
                                    <h4 className='text-xl'>Questions</h4>
                                    <hr />
                                </div>
                            </div>
                            <div className='flex flex-wrap  grid-cols-4 gap-4 px-3 py-4'>
                                <div>
                                    <button className="bg-white text-gray-800 font-semibold py-2 px-3 border border-gray-400">
                                        1
                                    </button>
                                </div>
                                <div>
                                    <button className="bg-white text-gray-800 font-semibold py-2 px-3 border border-gray-400">
                                        2
                                    </button>
                                </div>
                                <div>
                                    <button className="bg-white text-gray-800 font-semibold py-2 px-3 border border-gray-400">
                                        3
                                    </button>
                                </div>
                                <div>
                                    <button className="bg-white text-gray-800 font-semibold py-2 px-3 border border-gray-400">
                                        4
                                    </button>
                                </div>
                                <div>
                                    <button className="bg-white text-gray-800 font-semibold py-2 px-3 border border-gray-400">
                                        5
                                    </button>
                                </div>
                                <div>
                                    <button className="bg-white text-gray-800 font-semibold py-2 px-3 border border-gray-400">
                                        6
                                    </button>
                                </div>
                                <div>
                                    <button className="bg-white text-gray-800 font-semibold py-2 px-3 border border-gray-400">
                                        6
                                    </button>
                                </div>
                                <div>
                                    <button className="bg-white text-gray-800 font-semibold py-2 px-3 border border-gray-400">
                                        6
                                    </button>
                                </div>
                                <div>
                                    <button className="bg-white text-gray-800 font-semibold py-2 px-3 border border-gray-400">
                                        6
                                    </button>
                                </div>
                            </div>

                            <div className=" space-x-2 flex justify-center">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l">
                                    Prev
                                </button>

                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r">
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default Exam;
