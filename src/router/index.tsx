import { Outlet, ScrollRestoration, createBrowserRouter } from 'react-router-dom';
import IndexPage from '@pages/Index/page';
import MainLayout from '@layout/Main';

const webPath = {
  landing: '/',
};

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
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: webPath.landing,
        element: <IndexPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
