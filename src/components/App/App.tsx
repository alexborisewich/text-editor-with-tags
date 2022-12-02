import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout, NotesPage, TagsPage, WelcomePage } from 'components';
import { ROUTER_PATHS } from 'settings';

const NotFoundPage = React.lazy(() => import('components/pages/NotFoundPage'));
const ErrorPage = React.lazy(() => import('components/pages/ErrorPage'));

const App: React.FC = () => (
  <BrowserRouter basename={ROUTER_PATHS.base}>
    <Routes>
      <Route element={<Layout />}>
        <Route path={ROUTER_PATHS.welcome} element={<WelcomePage />} />
        <Route path={ROUTER_PATHS.notes} element={<NotesPage />} />
        <Route path={ROUTER_PATHS.tags} element={<TagsPage />} />
      </Route>
      <Route
        path={ROUTER_PATHS.notFound}
        element={
          <React.Suspense fallback='Loading'>
            <NotFoundPage />
          </React.Suspense>
        }
      />
      <Route
        path={ROUTER_PATHS.error}
        element={
          <React.Suspense fallback='Loading'>
            <ErrorPage />
          </React.Suspense>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default App;
