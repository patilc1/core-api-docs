import { ENDPOINT_CONFIG } from '../config/config.prod';
import { RafaEnvironment, RafaProductName } from './RAFAEnvironment';

export const environment = {
  environment: RafaEnvironment.PROD,
  production: true,
  product: RafaProductName.cap,
  endpointConfig: ENDPOINT_CONFIG
};
