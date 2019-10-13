const protocol = window.location.protocol
const hostname = window.location.hostname
const port = 8000
export const BASE_URL = `${protocol}//${hostname}:${port}`
export const DEV_BASE_URL = 'http://localhost:8081/'
