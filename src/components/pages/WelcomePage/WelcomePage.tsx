import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { s, types } from '.';

import { Button, WelcomeSVG } from 'components';
import { useAppDispatch } from 'hooks';
import { ROUTER_PATHS } from 'settings';
import { setModalOpen } from 'store';

const WelcomePage = ({ dataTestId }: types.WelcomePageProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <section className={s.container} data-testid={dataTestId}>
      <div className={s.text_content}>
        <h2 className={s.title}>{t('WelcomePage.Title')}</h2>
        <p className={s.description}>{t('WelcomePage.Text')}</p>
        <Button
          text={t('Buttons.Start')}
          onClick={() => {
            navigate(ROUTER_PATHS.notes);
            dispatch(setModalOpen(true));
          }}
        />
      </div>
      <div className={s.img_wrapper}>
        <WelcomeSVG />
      </div>
    </section>
  );
};

export default WelcomePage;
