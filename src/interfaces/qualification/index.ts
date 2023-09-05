import { GetQueryInterface } from 'interfaces';

export interface QualificationInterface {
  id?: string;
  name: string;
  description?: string;
  level?: number;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface QualificationGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
}
