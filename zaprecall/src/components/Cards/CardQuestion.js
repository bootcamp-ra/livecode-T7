import { useState } from 'react';
import { STATUS } from '../../enums/status';
import Icon from '../common/Icon';

export default function CardQuestion({
  question,
  answer,
  zapCard,
  index,
  tapCard,
  setAnswers,
}) {
  const [zap, setZap] = useState(false);

  return (
    <div className="flashcard aberto">
      {!zap ? question : answer}
      {!zap ? (
        <div onClick={() => setZap(true)}>
          <Icon type="setinha" />
        </div>
      ) : (
        <div>
          <div
            className="button error"
            onClick={() => {
              zapCard(index, STATUS.erro);
              tapCard(index, false, STATUS.erro);
            }}
          >
            Não lembrei!
          </div>
          <div
            className="button error"
            onClick={() => {
              setAnswers([]);
            }}
          >
            Reseta ai!
          </div>
          <div
            className="button almost"
            onClick={() => {
              zapCard(index, STATUS.help);
              tapCard(index, false, STATUS.help);
            }}
          >
            Quase não lembrei!
          </div>
          <div
            className="button zap"
            onClick={() => {
              zapCard(index, STATUS.acerto);
              tapCard(index, false, STATUS.acerto);
            }}
          >
            Zap!
          </div>
        </div>
      )}
    </div>
  );
}
