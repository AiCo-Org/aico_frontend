import { Outlet, ScrollRestoration, createBrowserRouter } from 'react-router-dom';
import MainLayout from '@layout/Main';

const Root = () => {
  return (
    <MainLayout>
      <Outlet />
      <ScrollRestoration />
    </MainLayout>
  );
};

const routes = [
  { path: '*', element: <div>404 Not Found</div> },
  { path: '/', element: <Root />, children: [{ path: '', element: <div>assssd</div> }] },
];

export const router = createBrowserRouter(routes);
