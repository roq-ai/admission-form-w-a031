import { GetQueryInterface } from 'interfaces';

export interface PhoneInterface {
  id?: string;
  number: string;
  type?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface PhoneGetQueryInterface extends GetQueryInterface {
  id?: string;
  number?: string;
  type?: string;
}
