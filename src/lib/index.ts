'use server';
import 'server-only';

export interface IRequestBody {
  query: string;
}

export interface RequestBodyWithVariable<TVariables> extends IRequestBody {
  variables: TVariables;
}

export const fetchGraphQl = async <TVariables, TData>(
  req: IRequestBody | RequestBodyWithVariable<TVariables>,
): Promise<TData> => {
  const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL, {
    method: 'POST',
    body: JSON.stringify(req),
    headers: { 'Content-Type': 'application/json' },
  });
  const res = (await response.json()) as TData;
  return res;
};
