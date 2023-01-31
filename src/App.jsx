import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Stickman  from './Components/Stickman'
import Keyboard from './Components/Keyboard'
import Word from './Components/Word'
import Message from './Components/Message'
import wordList from './Components/wordList'

function App() {
  const [originalWord, setOriginalWord] = useState(['L']);
  const [answer, setAnswer] = useState([]);
  const [message, setMessage] = useState("");
  const [messageClasses, setMessageClasses] = useState("");
  const [counter, setCounter] = useState(0);
  const hideKeyboard = useRef(false);

  function handleKeyPress(key){
    const ans = [];
    for (let i = 0; i < originalWord.length; i++) {
      key === originalWord[i] ? ans.push(i) : "";
    }
    ans.length === 0 ? setCounter(crnt => crnt + 1) : setAnswer(crnt => crnt.concat(ans));
    return true;
  }

  useEffect(()=>{
    setOriginalWord(()=> wordList[Math.floor(Math.random() * wordList.length)].toUpperCase().split(""))
  }, [])

  useEffect(()=>{
    if(answer.length === originalWord.length && counter < 6) {
      setMessage("YOU WIN");
      setMessageClasses("text-green-700 bg-green-100 py-6");
      hideKeyboard.current = true;
    }
  }, [answer]);
  
  useEffect(()=>{
    if (counter === 6){
      setMessage("YOU LOSE");
      setMessageClasses("text-red-700 bg-red-100 py-6");
      hideKeyboard.current = true;
      setAnswer(()=>{
        const arr = [];
        for (let i = 0; i < originalWord.length; i++) {
          arr[i] = i;          
        }
        return arr;
      });
      return;
    }
  }, [counter]);

  return (
    <>
    <Message message={message} classes={messageClasses}/>
    <Stickman counter={counter}/>
    <Word word={originalWord} display={answer}/>
    {hideKeyboard.current ? "" : <Keyboard handleKeyPress={handleKeyPress} />}
    </>
  )
}

export default App
