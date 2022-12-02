import React from 'react';

import { s, types } from '.';

const TagsPage = ({ dataTestId }: types.TagsPageProps) => (
  <section className={s.container} data-testid={dataTestId}>
    <span>TagsPage</span>
  </section>
);

export default TagsPage;
