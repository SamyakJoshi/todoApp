"use server";

import { GET_TODOS } from "../../graphql";

export const getTodoData = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL as string, {
    method: "POST",
    body: GET_TODOS,
    headers: { "Content-Type": "application/json" },
  });
  const res = await response.json();
  console.log(res, "response");
};
