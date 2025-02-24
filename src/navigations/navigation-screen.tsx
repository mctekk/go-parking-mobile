// Screen
import { ChangePassword } from 'screens/change-password';
import { Inventory } from 'screens/inventory';
import MapsView from 'screens/maps-view';
import { Notifications } from 'screens/notifications';
import { SignIn } from 'screens/sign-in';
import { SignUp } from 'screens/sign-up';
import { TransactionDetails } from 'screens/transaction-details';
import { SessionDetails } from 'screens/session-details';
import { ParkingBooking } from 'screens/parking-booking';
import { MyVehicles } from 'screens/my-vehicles';
import BookingConfirmationScreen from 'screens/booking-confirmation';
import AllParkings from 'screens/all-parkings';
import { Settings } from 'screens/settings';
import MyCardsScreen from 'screens/my-cards';
import MyInformation from 'screens/my-information';

const navigationDefaultOptions = {
  headerShown: false,
};

export const navigationScreen = [
  {
    name: 'SignIn',
    screen: SignIn,
    options: {
      navigationDefaultOptions,
    },
  },
  {
    name: 'SignUp',
    screen: SignUp,
    options: {
      navigationDefaultOptions,
    },
  },
  {
    name: 'ChangePassword',
    screen: ChangePassword,
    options: {
      navigationDefaultOptions,
    },
  },
  {
    name: 'Inventory',
    screen: Inventory,
    options: {
      navigationDefaultOptions,
    },
  },
  {
    name: 'Notifications',
    screen: Notifications,
    options: {
      navigationDefaultOptions,
      presentation: 'modal',
    },
  },
  {
    name: 'TransactionDetails',
    screen: TransactionDetails,
    options: {
      navigationDefaultOptions,
    },
  },
  {
    name: 'MapView',
    screen: MapsView,
    options: {
      navigationDefaultOptions,
    },
  },
  {
    name: 'SessionDetails',
    screen: SessionDetails,
    options: {
      navigationDefaultOptions,
    },
  },
  {
    name: 'ParkingBooking',
    screen: ParkingBooking,
    options: {
      navigationDefaultOptions,
    },
  },
  {
    name: 'BookingConfirmationScreen',
    screen: BookingConfirmationScreen,
    options: {
      navigationDefaultOptions,
    },
  },
  {
    name: 'AllParkingScreen',
    screen: AllParkings,
    options: {
      navigationDefaultOptions,
    },
  },
  {
    name: 'MyVehicles',
    screen: MyVehicles,
    options: {
      navigationDefaultOptions,
    },
  },
  {
    name: 'Settings',
    screen: Settings,
    options: {
      navigationDefaultOptions,
    },
  },
  {
    name: 'MyCardsScreen',
    screen: MyCardsScreen,
    options: {
      navigationDefaultOptions,
    },
  },
  {
    name: 'MyInformation',
    screen: MyInformation,
    options: {
      navigationDefaultOptions,
    },
  }
];
