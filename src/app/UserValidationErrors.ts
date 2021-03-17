import {Address} from './address';

export interface UserValidationErrors {
  username?: string[];
  role?: string[];
  password?: string[];
}
