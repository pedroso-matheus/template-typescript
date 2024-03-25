import React from 'react';

import { RowContainer } from './styles';
import { IRow } from './types';

const Row = ({ children, justify }: IRow) => {
  return <RowContainer $justify={ justify } >{children}</RowContainer>;

};

export default Row;