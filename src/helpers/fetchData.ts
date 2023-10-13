import { data } from '../data';
import { ComponentData } from '../types';

export class FetchDataHelper<T> {
  public fetchData = (data: T[]): T[] => {
    return data;
  };
}

export const fetchDataHelper = new FetchDataHelper<ComponentData>().fetchData(
  data
);
