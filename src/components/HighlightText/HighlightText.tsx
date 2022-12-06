import React from 'react';

import { s, types } from '.';

import { formatNote } from 'utils';

const HighlightText = ({ dataTestId, text, tags }: types.HighlightTextProps) => (
  <span className={s.text} data-testid={dataTestId}>
    {text
      .toLowerCase()
      .split(' ')
      .map((chunk, i) => {
        if (tags.includes(chunk.replaceAll(/[^a-zA-zа-яА-Я]+/g, ''))) {
          return (
            <React.Fragment key={i}>
              <span className={s.highlight}>{formatNote(chunk)}</span>{' '}
            </React.Fragment>
          );
        } else return <React.Fragment key={i}>{chunk} </React.Fragment>;
      })}
  </span>
);

export default HighlightText;
