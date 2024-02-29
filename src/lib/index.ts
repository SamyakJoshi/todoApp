"use server";
import 'server-only';
interface IRequestBody {
  query: string,
  variables?: {}
}

export const fetchGraphQl = async (req: IRequestBody) => {
  const { query, variables = {} } = req;

  const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL, {
    method: "POST",
    body: variables ? JSON.stringify({ query, variables }) : JSON.stringify({ query }),
    headers: { "Content-Type": "application/json" },
  });
  const res = await response.json();
  return res;

};
