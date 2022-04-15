import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Routers from './routes';
import history from './services/history';
import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter history={history}>
      <Header />
      <Routers />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
