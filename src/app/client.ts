import {Address} from './address';
import {Deposit} from './deposit';
import {Loan} from './loan';
import {Mortgage} from './mortgage';

export interface Client{
  id?: number;
  firstName: string;
  lastName: string;
  pesel: string;
  addresses?: Address [];
  accounts?: Account[];
  deposits?: Deposit[];
  loans?: Loan[];
  mortgages?: Mortgage[];
}
