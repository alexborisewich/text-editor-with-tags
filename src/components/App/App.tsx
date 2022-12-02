import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ErrorPage, Layout, NotesPage, NotFoundPage, TagsPage, WelcomePage } from 'components';
import { ROUTER_PATHS } from 'settings';

const App: React.FC = () => (
  <BrowserRouter basename={ROUTER_PATHS.base}>
    <Routes>
      <Route element={<Layout />}>
        <Route path={ROUTER_PATHS.welcome} element={<WelcomePage />} />
        <Route path={ROUTER_PATHS.notes} element={<NotesPage />} />
        <Route path={ROUTER_PATHS.tags} element={<TagsPage />} />
      </Route>
      <Route path={ROUTER_PATHS.notFound} element={<NotFoundPage />} />
      <Route path={ROUTER_PATHS.error} element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
