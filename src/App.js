import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';
import { useRoute } from './hooks/useRoute';
import { Header } from './components/Header';

export function App() {
  const { user } = useContext(AuthContext);
  const routes = useRoute(user);

  return (
    <div className='App'>
      <Header />
      {routes}    
    </div>
  )
}
