import { local } from "../env";

export async function postData(requestUrl = "", data = {}) {
  const response = await fetch(local.apiUrl + requestUrl, {
    ...local.apiPostInit,
    body: JSON.stringify(data),
  });

  return response.json();
}
