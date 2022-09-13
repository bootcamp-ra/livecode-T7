import { useState } from 'react';
import logo from '../../assets/img/logo-pequeno.png';
import data from '../../data/index.js';
import Icon from '../common/Icon';
import Flashcard from '../Cards/Flashcard';
import Footer from './Footer';
import './style.css';

let questionsData = data.map((value) => ({
  ...value,
  tap: false,
  status: '',
}));

export default function Home({ setVisible }) {
  const [questions, setQuestions] = useState(questionsData);
  const [answers, setAnswers] = useState([]);

  function tapCard(cardIndex, tap = true, status = '') {
    const newQuestions = questions.map((value, index) => {
      if (index === cardIndex) {
        return {
          ...value,
          tap: tap,
          status,
        };
      }
      return {
        ...value,
        tap: false,
      };
    });
    setQuestions([...newQuestions]); //Disparar a renderização
  }

  function zapCard(cardIndex, status) {
    if (answers.some((value) => value.index === cardIndex)) {
      return;
    }
    setAnswers([
      ...answers,
      {
        index: cardIndex,
        status,
      },
    ]);
  }

  function getFinalAnswer() {
    setTimeout(() => {
      setQuestions([...questionsData]);
      setAnswers([]);
    }, 3000);
    return (
      <div>
        {answers.some((value) => value.status === 'erro')
          ? 'Vacilão'
          : 'Ce é o bixão mermo hein...'}
      </div>
    );
  }

  //UI
  return (
    <div className="home deck">
      <div className="header">
        <img src={logo} alt="logo" />
        <h1>ZapRecall</h1>
      </div>
      <div className="main">
        {questions.map((value, index) => (
          <Flashcard
            key={index}
            index={index}
            question={value.frente}
            answer={value.verso}
            tap={value.tap}
            tapCard={tapCard}
            zapCard={zapCard}
            status={value.status}
            setAnswers={setAnswers}
          />
        ))}
      </div>
      <Footer setVisible={setVisible}>
        <>
          <div>{`${answers.length}/${questions.length} Concluídos`}</div>
          <div>
            {answers.map((value) => (
              <Icon type={value.status} />
            ))}
          </div>
          <div>
            {answers.length === questions.length ? getFinalAnswer() : ''}
          </div>
        </>
      </Footer>
    </div>
  );
}
