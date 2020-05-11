import * as RAFAEnvironment from './RAFAEnvironment';
import { ENDPOINT_CONFIG } from '../config/config.stg';

export const environment = {
  environment: RAFAEnvironment.RafaEnvironment.STG,
  production: true,
  product: RAFAEnvironment.RafaProductName.cap,
  endpointConfig: ENDPOINT_CONFIG
};