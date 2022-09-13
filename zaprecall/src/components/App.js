import { useState } from 'react';
import logo from '../assets/img/logo.png';
import Home from './ZapRecall/Home';

function SplashScreen({ setVisible }) {
  return (
    <div className="home">
      <img src={logo} alt="logo" />
      <h1>Zap Recall</h1>
      <button onClick={() => setVisible(true)}>Iniciar Recall</button>
    </div>
  );
}

export default function App() {
  //Deve começar com false
  const [visible, setVisible] = useState(false);

  return (
    <>
      {visible ? (
        <Home setVisible={setVisible} />
      ) : (
        <SplashScreen setVisible={setVisible} />
      )}
    </>
  );
}
