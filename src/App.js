import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Routers from './routes';
import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routers />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
