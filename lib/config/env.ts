export const env = {
  apiBase: process.env.NEXT_PUBLIC_API_BASE || '/api',
  djangoOrigin: process.env.NEXT_PUBLIC_DJANGO_ORIGIN || 'http://127.0.0.1:8001',
  antMediaApp: process.env.NEXT_PUBLIC_ANT_MEDIA_APP || 'live',
  antMediaHttpBase: process.env.NEXT_PUBLIC_ANT_MEDIA_HTTP_BASE || 'https://streaming-api-live.pttblockchain.online',
  antMediaWsUrl: process.env.NEXT_PUBLIC_ANT_MEDIA_WS_URL || 'wss://streaming-api-live.pttblockchain.online:5443/live/websocket',
  antMediaHlsBase: process.env.NEXT_PUBLIC_ANT_MEDIA_HLS_BASE || 'https://streaming-api-live.pttblockchain.online/live/streams',
  rtmpBase: process.env.NEXT_PUBLIC_RTMP_BASE || 'rtmp://streaming-api-live.pttblockchain.online/live',
} as const;
