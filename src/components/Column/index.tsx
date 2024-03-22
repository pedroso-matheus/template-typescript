import React from 'react';

import { ColumnContainer } from './styles';
import { IColumn } from './types';

const Column = ({ children }: IColumn) => {
  return <ColumnContainer>{children}</ColumnContainer>;
};

export default Column;