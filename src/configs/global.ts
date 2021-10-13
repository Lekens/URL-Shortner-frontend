declare global {
  interface Window {
    ENV: any;
  }
}

const getEnvVariable = (variableName: string) => {
  // Variables from window.ENV have a higher priority
  // We're using process.env variables as a fallback because
  // the window object is not defined in some cases - like when running tests
  if (typeof window !== 'undefined' && window.ENV) {
    return window.ENV[variableName];
  }
  return process.env[variableName];
};


const variables = {
  PORT: getEnvVariable('PORT'),
  REACT_APP_API_URL: getEnvVariable('REACT_APP_API_URL'),
};

export const { PORT, REACT_APP_API_URL } =
  variables;

export default variables;
