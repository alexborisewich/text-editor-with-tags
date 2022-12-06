import React from 'react';
import ReactFlagsSelect from 'react-flags-select';
import { useTranslation } from 'react-i18next';

import { s, types } from '.';

import { Button, Logo, NavBar } from 'components';
import { useAppDispatch } from 'hooks';
import { setModalOpen } from 'store';

const Header = ({ dataTestId }: types.HeaderProps) => {
  const dispatch = useAppDispatch();
  const { i18n, t } = useTranslation();
  return (
    <header className={s.header} data-testid={dataTestId}>
      <div className={s.container}>
        <Logo />
        <NavBar />
        <Button text={t('Buttons.NewNote')} onClick={() => dispatch(setModalOpen(true))} />
        <ReactFlagsSelect
          selected={i18n.language === 'en' ? 'GB' : 'RU'}
          onSelect={(code) => void i18n.changeLanguage(code === 'RU' ? 'ru' : 'en')}
          countries={['GB', 'RU']}
          customLabels={{ GB: 'EN', RU: 'RU' }}
          fullWidth={false}
        />
      </div>
    </header>
  );
};

export default Header;
