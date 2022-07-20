// Package JSON (for app version number)
import packageJson from '../../package.json';

export const environment = {
  appVersion: packageJson.version,
  production: true,
};
