import React from 'react';

export interface IWrapperStyled {
  padding?: string;
  margin?: string;
}

export interface IWrapper {
    children: React.ReactNode;
    padding?: string;
    margin?: string;
  }