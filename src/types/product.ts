import { ICommonObject } from './common';

export interface IProductDetail extends ICommonObject {
  _id: string;
  brand_info: {
    id: string;
    name: string;
    url: string;
  };
  description: string;
  image_url: string;
  name: string;
  price: string;
  review: {
    number: number;
    rating: number;
  };
}
