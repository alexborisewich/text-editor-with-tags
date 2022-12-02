import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from 'components';
import { ROUTER_PATHS } from 'settings';

const App: React.FC = () => (
  <BrowserRouter basename={ROUTER_PATHS.base}>
    <Routes>
      <Route element={<Layout />}>
        <Route path={ROUTER_PATHS.welcome} element={<span>WelcomePage</span>} />
        <Route path={ROUTER_PATHS.notes} element={<span>NotesPage</span>} />
        <Route path={ROUTER_PATHS.tags} element={<span>TagsPage</span>} />
      </Route>
      <Route path={ROUTER_PATHS.notFound} element={<span>NotFoundPage</span>} />
      <Route path={ROUTER_PATHS.error} element={<span>ErrorPage</span>} />
    </Routes>
  </BrowserRouter>
);

export default App;
