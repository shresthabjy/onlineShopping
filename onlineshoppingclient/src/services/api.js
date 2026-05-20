export const API_URL = "https://localhost:44317/api";

export async function request(endpoint, options = {}) {

  const response = await fetch(
    `${API_URL}/${endpoint}`,
    {
      headers: {
        "Content-Type": "application/json"
      },
      ...options
    }
  );

  if (!response.ok) {
    
    throw new Error(await response.text());
    return;
  }

  if (response.status !== 204) {
    return response.json();
  }
}