import Config from 'react-native-config';

const BOOLEAN_VALUES = [
  '1',
  'a',
  'activated',
  'active',
  'enable',
  'enabled',
  'on',
  's',
  'si',
  't',
  'true',
  'y',
  'yes',
];

const ENV = Config.ENV;
export const isProduction = ENV === 'production';

export const API_URL = isProduction ? Config.PROD_API_URL : Config.STAGING_API_URL;
export const LOG_REQUESTS: boolean = BOOLEAN_VALUES.includes(Config.LOG_REQUESTS?.toLowerCase());
