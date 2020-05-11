import { ENDPOINT_CONFIG } from '../config/config.qa';
import { RafaEnvironment, RafaProductName } from './RAFAEnvironment';
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of 


export const environment = {
  environment: RafaEnvironment.QA,
  production: false,
  product: RafaProductName.cap,
  endpointConfig: ENDPOINT_CONFIG
};

