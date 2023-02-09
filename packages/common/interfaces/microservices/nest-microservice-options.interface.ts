import { NestApplicationContextOptions } from '../nest-application-context-options.interface';
import { MicroserviceProvider } from './microservice-configuration.interface';

/**
 * @publicApi
 */
export type NestMicroserviceOptions = MicroserviceProvider &
  NestApplicationContextOptions;
