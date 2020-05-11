import { ENDPOINT_CONFIG } from '../config/config.ea';
import { RafaEnvironment, RafaProductName } from './RAFAEnvironment';

export const environment = {
  environment: RafaEnvironment.EA,
  production: false,
  product: RafaProductName.cap,
  endpointConfig: ENDPOINT_CONFIG
};