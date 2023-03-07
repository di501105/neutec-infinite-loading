const { VITE_API_BASE_URL, MODE } = import.meta.env

const APIBaseURL = MODE === 'development' ? VITE_API_BASE_URL : `${window.location.protocol}//${window.location.hostname}/panel`

export const base = {
  APIBaseURL
}
