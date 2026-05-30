export const API_URL =
  "https://localhost:44317/api";

export async function request(

  endpoint,
  options = {}
) {
  const token =
    localStorage.getItem("token");


  const headers = {
    ...(token
      ? {
        Authorization: `Bearer ${token}`
      }
      : {}),
    ...(options.headers || {})
  };

  if (!(options.body instanceof FormData)) {
    headers["Content-Type"] =
      "application/json";
  }
  const response = await fetch(
    `${API_URL}/${endpoint}`,
    {
      ...options,
      headers
    }
  );

  if (!response.ok) {
    throw new Error(
      `HTTP ${response.status}`
    );
  }

  if (response.status !== 204) {
    return response.json();
  }
}