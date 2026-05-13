import { RouterProvider } from 'react-router-dom';
import MainRoutes from './routes/MainRoutes';

const App = () => {
  return <RouterProvider router={MainRoutes} />;
};

export default App;
