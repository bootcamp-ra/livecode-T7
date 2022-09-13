export default function Footer({ children, setVisible }) {
  return (
    <div className="footer">
      {children}
      <button onClick={() => setVisible(false)}>Reiniciar</button>
    </div>
  );
}
