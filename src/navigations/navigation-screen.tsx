// Screen
import { ChangePassword } from 'screens/change-password';
import { EditProfile } from 'screens/edit-profile';
import { Inventory } from 'screens/inventory';
import MapsView from 'screens/maps-view';
import { Notifications } from 'screens/notifications';
import { SignIn } from 'screens/sign-in';
import { SignUp } from 'screens/sign-up';
import { TransactionDetails } from 'screens/transaction-details';
import { SessionDetails } from 'screens/session-details';
import { ParkingBooking } from 'screens/parking-booking';
import  BookingScreen from 'screens/booking';
import BookingConfirmationScreen from 'screens/booking-confirmation';

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
    name: 'EditProfile',
    screen: EditProfile,
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
  }
];
