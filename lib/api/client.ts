import { env } from '@/lib/config/env';

export async function apiGet(url: string) {
  const res = await fetch(`${env.apiBase}${url}`, {
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}
