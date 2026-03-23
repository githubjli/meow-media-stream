export async function apiGet(url: string) {
  const res = await fetch(`/api${url}`, {
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}
