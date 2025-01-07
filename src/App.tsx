import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Router/AppRoutes';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <AppRoutes />
    </Router>
  );
};

export default App;
