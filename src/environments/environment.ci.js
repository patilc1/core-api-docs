import { ENDPOINT_CONFIG } from '../config/config.ci';
import { RafaEnvironment, RafaProductName } from './RAFAEnvironment';

export const environment = {
  environment: RafaEnvironment.CI,
  production: false,
  product: RafaProductName.cap,
  endpointConfig: ENDPOINT_CONFIG
};
