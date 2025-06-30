import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.scss';
import App from './App.jsx'

// Handle true viewport height on mobile by setting --vh to 1% of window.innerHeight
function setVh() {
  document.documentElement.style.setProperty(
    '--vh',
    `${window.innerHeight * 0.1}rem`
  );
}
window.addEventListener('resize', setVh);
setVh();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
