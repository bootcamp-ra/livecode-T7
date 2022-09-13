import React from 'react';

function Recommendation() {
  const [status, setStatus] = React.useState('Seguir');

  return (
    <div className="sugestao">
      <div className="usuario">
        <img src="assets/img/bad.vibes.memes.svg" />
        <div className="texto">
          <div className="nome">bad.vibes.memes</div>
          <div className="razao">Segue você</div>
        </div>
      </div>

      <div className="seguir" onClick={() => setStatus('Seguindo')}>
        {status}
      </div>
    </div>
  );
}

const recommendations = [
  {
    source: 'assets/img/bad.vibes.memes.svg',
    name: 'bad.vibes.memes',
    reason: 'Segue você',
  },
  {
    source: 'assets/img/bad.vibes.memes.svg',
    name: 'bad.vibes.memes',
    reason: 'Segue você',
  },
];

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="usuario">
        <img src="assets/img/catanacomics.svg" />
        <div className="texto">
          <strong>catanacomics</strong>
          Catana
        </div>
      </div>

      <div className="sugestoes">
        <div className="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        {recommendations.map((value, index) => (
          <Recommendation
            key={index}
            source={value.source}
            reason={value.reason}
            name={value.name}
          />
        ))}

        <div className="sugestao">
          <div className="usuario">
            <img src="assets/img/chibirdart.svg" />
            <div className="texto">
              <div className="nome">chibirdart</div>
              <div className="razao">Segue você</div>
            </div>
          </div>

          <div className="seguir">Seguir</div>
        </div>

        <div className="sugestao">
          <div className="usuario">
            <img src="assets/img/razoesparaacreditar.svg" />
            <div className="texto">
              <div className="nome">razoesparaacreditar</div>
              <div className="razao">Novo no Instagram</div>
            </div>
          </div>

          <div className="seguir">Seguir</div>
        </div>

        <div className="sugestao">
          <div className="usuario">
            <img src="assets/img/adorable_animals.svg" />
            <div className="texto">
              <div className="nome">adorable_animals</div>
              <div className="razao">Segue você</div>
            </div>
          </div>

          <div className="seguir">Seguir</div>
        </div>

        <div className="sugestao">
          <div className="usuario">
            <img src="assets/img/smallcutecats.svg" />
            <div className="texto">
              <div className="nome">smallcutecats</div>
              <div className="razao">Segue você</div>
            </div>
          </div>

          <div className="seguir">Seguir</div>
        </div>
      </div>

      <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div className="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}
