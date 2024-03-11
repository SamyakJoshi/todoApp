'use server';

import 'server-only';

export interface IRequestBody {
  query: string;
}

export interface IRequestBodyWithVariable<TVariables> extends IRequestBody {
  variables: TVariables;
}

export const fetchGraphQl = async <TVariables, TData>(
  req: IRequestBody | IRequestBodyWithVariable<TVariables>,
): Promise<TData> => {
  const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL, {
    method: 'POST',
    body: JSON.stringify(req),
    headers: { 'Content-Type': 'application/json' },
  });
  const res = await response.json();
  return res;
};
