export const local = {
  apiUrl: "http://localhost:8080/",
  apiPostInit: {
    "Access-Control-Allow-Origin": "*",
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  } as RequestInit,
};
