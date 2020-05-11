import { ENDPOINT_CONFIG } from '../config/config.qa';
import { RafaEnvironment, RafaProductName } from './RAFAEnvironment';

export const environment = {
  environment: RafaEnvironment.QA,
  production: true,
  product: RafaProductName.cap,
  endpointConfig: ENDPOINT_CONFIG
};
