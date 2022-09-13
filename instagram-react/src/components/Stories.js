function Story(props) {
  return (
    <div className="story">
      <div className="imagem">
        <img src={props.sourceImage} />
      </div>
      <div className="usuario">{props.profileName}</div>
    </div>
  );
}
const stories = [
  { source: 'assets/img/9gag.svg', profile: '9gag' },
  { source: 'assets/img/meowed.svg', profile: 'meowed' },
  { source: 'assets/img/barked.svg', profile: 'barked' },
  {
    source: 'assets/img/nathanwpylestrangeplanet.svg',
    profile: 'nathanwpylestrangeplanet',
  },
  {
    source: 'assets/img/wawawicomics.svg',
    profile: 'wawawicomics',
  },
  {
    source: 'assets/img/respondeai.svg',
    profile: 'respondeai',
  },
  {
    source: 'assets/img/filomoderna.svg',
    profile: 'filomoderna',
  },
  {
    source: 'assets/img/memeriagourmet.svg',
    profile: 'memeriagourmet',
  },
];

export default function Stories() {
  return (
    <div className="stories">
      {stories.map((story, index) => (
        <Story
          key={index}
          sourceImage={story.source}
          profileName={story.profile}
        />
      ))}

      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
