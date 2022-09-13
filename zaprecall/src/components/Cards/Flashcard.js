import { useState } from 'react';
import Card from './Card';
import CardQuestion from './CardQuestion';
import './style.css';

export default function Flashcard({
  index,
  question,
  tap,
  tapCard,
  answer,
  zapCard,
  status,
  setAnswers,
}) {
  const [tapped, setTapped] = useState(tap);

  if (tapped === tap) {
    console.log('CRIAÇÃO - TAP');
  } else {
    console.log('RE-RENDERIZAÇÃO - TAP');
  }
  return (
    <>
      {!tap ? (
        <Card
          setTapped={setTapped}
          index={index}
          tapCard={tapCard}
          status={status}
        />
      ) : (
        <CardQuestion
          question={question}
          answer={answer}
          zapCard={zapCard}
          index={index}
          tapCard={tapCard}
          setAnswers={setAnswers}
        />
      )}
    </>
  );
}
