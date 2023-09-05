import { GetQueryInterface } from 'interfaces';

export interface AddressInterface {
  id?: string;
  street?: string;
  city?: string;
  state?: string;
  country?: string;
  postal_code?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface AddressGetQueryInterface extends GetQueryInterface {
  id?: string;
  street?: string;
  city?: string;
  state?: string;
  country?: string;
  postal_code?: string;
}
