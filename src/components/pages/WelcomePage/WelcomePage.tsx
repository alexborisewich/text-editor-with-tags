import React from 'react';

import { s, types } from '.';

import { Button, WelcomeSVG } from 'components';

const WelcomePage = ({ dataTestId }: types.WelcomePageProps) => (
  <section className={s.container} data-testid={dataTestId}>
    <div className={s.text_content}>
      <h2 className={s.title}>Welcome to Text Editor!</h2>
      <p className={s.description}>
        Quickly capture what's on your mind. Easily find it later in search. It's easy to capture a thought or list for
        yourself!
      </p>
      <Button text='Getting started!' />
    </div>
    <div className={s.img_wrapper}>
      <WelcomeSVG />
    </div>
  </section>
);

export default WelcomePage;
