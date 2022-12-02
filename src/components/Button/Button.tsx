import React from 'react';

import { s, types } from '.';

const Button = ({ dataTestId, text, onClick, id, disabled }: types.ButtonProps) => (
  <button className={s.btn} onClick={onClick} id={id} disabled={disabled} data-testid={dataTestId}>
    {text}
  </button>
);

export default Button;
