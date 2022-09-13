import Icon from '../common/Icon';

export default function Card({ setTapped, index, tapCard, status }) {
  return (
    <div
      className={`flashcard ${status}`}
      onClick={() => {
        if (status) return;
        tapCard(index);
      }}
    >
      {`Pergunta ${index + 1}`}
      <Icon type={status} />
    </div>
  );
}
