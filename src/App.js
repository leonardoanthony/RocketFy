

import { Board } from './components/Board/index.js';
import { Header } from './components/Header.js';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Header />
      <Board />
      
      <GlobalStyle />
    </>
  );
}

export default App;
