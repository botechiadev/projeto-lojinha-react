import Router from './router/Router';
import { ApiProvider } from './common/context/api-context';

function App() {
  return (
    <ApiProvider>
      <Router />
    </ApiProvider>
  );
}

export default App;
