export default function getBaseUrl() {
  const IN_DEVELOPMENT = window.location.hostname === 'localhost';
  return IN_DEVELOPMENT ? 'http://localhost:3001/' : '/';
}
