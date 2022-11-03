import axios from 'axios';

import { State } from '../contexts/FormContext'


export async function SendForm(state: State) {
  // try {
  //   const { data } = await axios.post<State>(
  //     '/api/make-webhook',
  //     state,
  //     {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json',
  //       },
  //     },
  //   );

  //   return data;
  // } catch (error) {
  //   if (axios.isAxiosError(error)) {
  //     console.log('error message: ', error.message);
  //     return error.message;
  //   } else {
  //     console.log('unexpected error: ', error);
  //     return 'An unexpected error occurred';
  //   }
  // }
}

export async function SendQuotation(quotation:any) {
  const { data } = await axios.post(
    '/db/quotation',
    quotation,
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    },
  );
  return data;
}
