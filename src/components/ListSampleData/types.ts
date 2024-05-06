import React from 'react';

export interface IListSampleData {
    sampleData: ISampleData[];
  }

export interface ISampleData {
    full_name: string;
    email: string;
    date_of_birth: string;
    mobile_number: string;
  }