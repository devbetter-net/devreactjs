import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import 'bulma/css/bulma.min.css';
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
