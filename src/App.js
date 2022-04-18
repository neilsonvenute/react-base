import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Routers from './routes';
import history from './services/history';
import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routers />
      <GlobalStyle />
      <ToastContainer autoClose={3000} className="toast-container" />
    </Router>
  );
}

export default App;
