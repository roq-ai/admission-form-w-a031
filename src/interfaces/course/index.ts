import { GetQueryInterface } from 'interfaces';

export interface CourseInterface {
  id?: string;
  name: string;
  description?: string;
  duration?: number;
  start_date?: any;
  end_date?: any;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface CourseGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
}
