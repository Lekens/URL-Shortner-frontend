export function getCurrentTab(pathname: string, path: string) {
  return pathname.indexOf(path) === 0;
}
