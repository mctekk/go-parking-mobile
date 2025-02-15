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
  },
];

export const vehicleTypes = [
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


export const Original_DummyData = [
  {
    'id': 1,
    'name': 'Parking Multipiso Covadonga',
    'address': '104 Paseo Covadonga, PR-38 Calle Juan Antonio Corretjer, San Juan, PR 00901',
    'phone': '(787) 721-0115',
    'coordinates': {
      'latitude': 18.465235,
      'longitude': -66.111265,
    },
    'parkingHours': {
      'open': '06:00',
      'close': '22:00',
    },
    'price': {
      'amount': 4.50,
      'currency': 'USD',
    },
    'totalParkingSpaces': 100,
    'occupiedParkingSpaces': 50,
    'isPrivate': true,
  },
  {
    'id': 2,
    'name': 'Estacionamiento La Puntilla',
    'address': 'Paseo de la Princesa, FV7M+57M, Calle C. Arturo Schomburg, San Juan, PR 00901',
    'phone': null,
    'coordinates': {
      'latitude': 18.463449,
      'longitude': -66.117866,
    },
    'parkingHours': {
      'open': '06:00',
      'close': '22:00',
    },
    'price': {
      'amount': 3.75,
      'currency': 'USD',
    },
    'totalParkingSpaces': 100,
    'occupiedParkingSpaces': 50,
    'isPrivate': true,
  },
  {
    'id': 3,
    'name': 'Parking Doña Fela',
    'address': 'Calle del Recinto Sur 318, San Juan, Puerto Rico. 00901',
    'phone': '(787) 722-3558',
    'coordinates': {
      'latitude': 18.464303,
      'longitude': -66.114154,
    },
    'parkingHours': {
      'open': '06:00',
      'close': '22:00',
    },
    'price': {
      'amount': 2.50,
      'currency': 'USD',
    },
    'totalParkingSpaces': 100,
    'occupiedParkingSpaces': 50,
    'isPrivate': true,
  },
  {
    'id': 4,
    'name': 'Parking Plaza de la Convalecencia',
    'address': '9XW2+Q5C, C. Georgetti, San Juan, 00925',
    'phone': null,
    'coordinates': {
      'latitude': 18.397651,
      'longitude': -66.052274,
    },
    'parkingHours': {
      'open': '06:00',
      'close': '22:00',
    },
    'price': {
      'amount': 4.00,
      'currency': 'USD',
    },
    'totalParkingSpaces': 100,
    'occupiedParkingSpaces': 50,
    'isPrivate': true,
  },
  {
    'id': 5,
    'name': 'Estacionamiento Av. Magdalena',
    'address': '1361 Av. Magdalena, San Juan, PR 00907',
    'phone': null,
    'coordinates': {
      'latitude': 18.454311,
      'longitude': -66.068553,
    },
    'parkingHours': {
      'open': '06:00',
      'close': '22:00',
    },
    'price': {
      'amount': 3.25,
      'currency': 'USD',
    },
    'totalParkingSpaces': 100,
    'occupiedParkingSpaces': 50,
    'isPrivate': true,
  },
  {
    'id': 6,
    'name': 'Public Parking Ashford',
    'address': '1390 Av. Ashford, San Juan, PR 00907',
    'phone': null,
    'coordinates': {
      'latitude': 18.4548151,
      'longitude': -66.0696033,
    },
    'parkingHours': {
      'open': '06:00',
      'close': '22:00',
    },
    'price': {
      'amount': 4.75,
      'currency': 'USD',
    },
    'totalParkingSpaces': 100,
    'occupiedParkingSpaces': 50,
    'isPrivate': true,
  },
  {
    'id': 7,
    'name': 'Estacionamiento Parroquia Stella Maris',
    'address': '1359 Calle Luchetti San Juan, PR 00907',
    'phone': null,
    'coordinates': {
      'latitude': 18.4536746,
      'longitude': -66.0713217,
    },
    'parkingHours': {
      'open': '06:00',
      'close': '22:00',
    },
    'price': {
      'amount': 3.00,
      'currency': 'USD',
    },
    'totalParkingSpaces': 100,
    'occupiedParkingSpaces': 50,
    'isPrivate': true,
  },
  {
    'id': 8,
    'name': 'Estacionamiento Ashford Laguna Lot',
    'address': '1309 Ave. Ashford, San Juan, PR 00907',
    'phone': null,
    'coordinates': {
      'latitude': 18.4560931,
      'longitude': -66.0730023,
    },
    'parkingHours': {
      'open': '06:00',
      'close': '22:00',
    },
    'price': {
      'amount': 2.75,
      'currency': 'USD',
    },
    'totalParkingSpaces': 100,
    'occupiedParkingSpaces': 50,
    'isPrivate': true,
  },
  {
    'id': 9,
    'name': 'Estacionamiento Terra Luna Parking',
    'address': '1050 Ave. Ashford, San Juan, PR 00907',
    'phone': null,
    'coordinates': {
      'latitude': 18.4570989,
      'longitude': -66.0730023,
    },
    'parkingHours': {
      'open': '06:00',
      'close': '22:00',
    },
    'price': {
      'amount': 4.25,
      'currency': 'USD',
    },
    'totalParkingSpaces': 100,
    'occupiedParkingSpaces': 50,
    'isPrivate': true,
  },
  {
    'id': 10,
    'name': 'Estacionamiento 1019 Ahford Lot',
    'address': '1019 Avenida Ashford, San Juan, PR 00907',
    'phone': null,
    'coordinates': {
      'latitude': 18.4605432,
      'longitude': -66.0795357,
    },
    'parkingHours': {
      'open': '06:00',
      'close': '22:00',
    },
    'price': {
      'amount': 3.50,
      'currency': 'USD',
    },
    'totalParkingSpaces': 100,
    'occupiedParkingSpaces': 50,
    'isPrivate': true,
  },
  {
    'id': 11,
    'name': 'Estacionamiento José de Diego Parking',
    'address': '405 Av. José de Diego, San Juan, PR 00912',
    'phone': null,
    'coordinates': {
      'latitude': 18.4124865,
      'longitude': -66.1070241,
    },
    'parkingHours': {
      'open': '06:00',
      'close': '22:00',
    },
    'price': {
      'amount': 2.25,
      'currency': 'USD',
    },
    'totalParkingSpaces': 100,
    'occupiedParkingSpaces': 50,
    'isPrivate': true,
  },
  {
    'id': 12,
    'name': 'Calle 01 - 125 plazas',
    'address': 'Av. Ashford, Esquina 1305 Av. Magdalena. San Juan, PR 00907',
    'phone': null,
    'coordinates': {
      'latitude': 18.454615,
      'longitude': -66.0725578,
    },
    'parkingHours': {
      'open': '06:00',
      'close': '22:00',
    },
    'price': {
      'amount': 3.75,
      'currency': 'USD',
    },
    'isPrivate': false,
  },
  {
    'id': 13,
    'name': 'Calle 02 - 200 plazas',
    'address': '1369 Av. Ashford, San Juan, 00907, Esq. 13 Calle Candina. San Juan, PR 00907',
    'phone': null,
    'coordinates': {
      'latitude': 18.4552539,
      'longitude': -66.0702639,
    },
    'parkingHours': {
      'open': '06:00',
      'close': '22:00',
    },
    'price': {
      'amount': 4.50,
      'currency': 'USD',
    },
    'isPrivate': false,
  },
  {
    'id': 14,
    'name': 'Calle 03 - 100 plazas',
    'address': '1337 Av. Ashford, Esq. 53 Calle Cervantes. San Juan, PR 00907',
    'phone': null,
    'coordinates': {
      'latitude': 18.4552081,
      'longitude': -66.0739698,
    },
    'parkingHours': {
      'open': '06:00',
      'close': '22:00',
    },
    'price': {
      'amount': 2.00,
      'currency': 'USD',
    },
    'isPrivate': false,
  },
  {
    'id': 15,
    'name': 'Calle 04 - 250 plazas',
    'address': '1310 Av. Ashford & 55 Calle Caribe. San Juan, PR 00907',
    'phone': null,
    'coordinates': {
      'latitude': 18.455481,
      'longitude': -66.070431,
    },
    'parkingHours': {
      'open': '06:00',
      'close': '22:00',
    },
    'price': {
      'amount': 3.25,
      'currency': 'USD',
    },
    'isPrivate': false,
  },
  {
    'id': 16,
    'name': 'Calle 05 - 250 plazas',
    'address': 'Intersección Av. Ashford & 13 Calle Delcasse. San Juan, PR 00907',
    'phone': null,
    'coordinates': {
      'latitude': 18.4571632,
      'longitude': -66.0748954,
    },
    'parkingHours': {
      'open': '06:00',
      'close': '22:00',
    },
    'price': {
      'amount': 4.00,
      'currency': 'USD',
    },
    'isPrivate': false,
  },
  {
    'id': 17,
    'name': 'Calle 06 - 233 plazas',
    'address': '1504 Ave. Ashford & 57 C. F. Krug. San Juan, PR 00907',
    'phone': null,
    'coordinates': {
      'latitude': 18.454073,
      'longitude': -66.062022,
    },
    'parkingHours': {
      'open': '06:00',
      'close': '22:00',
    },
    'price': {
      'amount': 2.50,
      'currency': 'USD',
    },
    'isPrivate': false,
  },
];
