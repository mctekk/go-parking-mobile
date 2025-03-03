export interface IParkingProps {
  id: string | number;
  name: string;
  street: string;
  locations: IParkingLocation;
  tags: ITagsProps[];
  price: IParkingPrice;
  duration_time: string;
  parkingsLeft: number;
}

export interface IParkingPrice {
  amount: number;
  currency: string;
}

export interface ITagsProps {
  name: string;
  id: string | number;
}

export interface IParkingLocation {
  latitude: string;
  longitude: string;
}