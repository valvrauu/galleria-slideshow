import { createHashRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './providers/ThemeProvider';
import Home from './pages/Home';
import Details from './pages/Details';
import Layout from './components/Layout';
import { GlobalStyles } from './styles/global';

const router = createHashRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/details/:name',
                element: <Details />
            }
        ]
    }
]);

const App = () => {
    return (
        <ThemeProvider>
            <RouterProvider router={router} />
            <GlobalStyles />
        </ThemeProvider>
    );
};

export default App;
