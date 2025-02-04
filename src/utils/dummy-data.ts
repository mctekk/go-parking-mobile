// Icons
import BikeIcon from 'assets/icons/bike-icon';
import BusIcon from 'assets/icons/bus-icon';
import CarIcon from 'assets/icons/car-icon';
import ScooterIcon from 'assets/icons/scooter-icon';
import TruckIcon from 'assets/icons/truck-icon';

export const dummyVehicleTypes = [
  {
    id: 1,
    name: 'Car',
    icon: CarIcon,
  },
  {
    id: 2,
    name: 'Bike',
    icon: BikeIcon,
  },
  {
    id: 3,
    name: 'Bus',
    icon: BusIcon,
  },
  {
    id: 4,
    name: 'Truck',
    icon: TruckIcon,
  },
  {
    id: 5,
    name: 'Scooter',
    icon: ScooterIcon,
  },
];

export const parking_dummy_list = [
  {
    id: 1,
    name: 'Parking La Puntilla',
    street: 'C. Arturo Schomburg, San Juan, 00901',
    price: {
      amount: 10,
      currency: 'USD',
    },
    duration_time: '2',
    parkingsLeft: 10,
    tags: [
      {
        id: 1,
        name: 'Car',
      },
      {
        id: 2,
        name: 'Bike',
      },
      {
        id: 3,
        name: 'Bus',
      },
    ],
    locations: {
      latitude: '37.7749',
      longitude: '-122.4194',
    },
  },
{
  id: 2,
  name: 'Parking Plaza Las Americas',
  street: '525 Av. Franklin Delano Roosevelt, San Juan, 00918',
  price: {
    amount: 15,
    currency: 'USD',
  },
  duration_time: '3',
  parkingsLeft: 5,
  tags: [
    {
      id: 1,
      name: 'Car',
    },
    {
      id: 2,
      name: 'Bike',
    },
    {
      id: 3,
      name: 'Bus',
    },
  ],
  locations: {
    latitude: '18.4233',
    longitude: '-66.0628',
  },
},
{
  id: 3,
  name: 'Parking Condado',
  street: 'Ashford Ave, San Juan, 00907',
  price: {
    amount: 20,
    currency: 'USD',
  },
  duration_time: '1',
  parkingsLeft: 2,
  tags: [
    {
      id: 1,
      name: 'Car',
    },
    {
      id: 2,
      name: 'Bike',
    },
    {
      id: 3,
      name: 'Bus',
    },
  ],
  locations: {
    latitude: '18.4568',
    longitude: '-66.0852',
  },
}
]
