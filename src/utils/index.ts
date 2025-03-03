// Modules
import Share from 'react-native-share';
import moment from 'moment';

export const capitalize = (text: string = '') => {
  if (text) {
    const firstLetter = text[0].toLocaleUpperCase();
    return `${firstLetter}${text.slice(1)}`;
  }
  return '';
};

/**
 * Handle the custom fields from the user data
 * @param userData - The user data to handle
 * @returns A new user object with the custom fields as properties
 */
export const handleCustomFields = (userData: IUser) => {
  let new_user = { ...userData };
  const customFields = userData?.custom_fields.data;
  customFields.forEach((item: { name: string | number; value: any }) => {
    new_user[item.name] = item.value;
  });
  return new_user;
};

export const wait = (milliseconds: number): Promise<number> =>
  new Promise(resolve => {
    setTimeout(() => resolve(milliseconds), milliseconds);
  });

export const ShareUtil = (title: string, url: string) => {
  const shareOptions = {
    title: title,
    url: url,
  };

  Share.open(shareOptions)
    .then((res: any) => {
      console.log(res);
    })
    .catch((err: any) => {
      err && console.log('shareOptions', err);
    });
};

/**
 * Formats the given time in milliseconds to a string in 'HH:mm:ss' format.
 *
 * @param milliseconds - The time duration in milliseconds to be formatted.
 * @returns The formatted time string in 'HH:mm:ss' format.
 */
export const getFormattedRemainingTime = (milliseconds: number) => {
  const formattedTime = moment.utc(milliseconds).format('HH:mm:ss');
  return formattedTime;
};

export const getCardTypeImage = (cardType: string) => {
  switch (cardType) {
    case 'visa':
      return require('assets/images/card-types/visa.png');
    case 'mastercard':
      return require('assets/images/card-types/master_card.png');
    case 'amex':
      return require('assets/images/card-types/amex.png');
    default:
      return '';
  }
};

/**
 * Handle the attributes from the kanvas data
 * @param data - The kanvas data to handle
 * @returns A data object with the attributes as properties
 */
export const handleProductAttributes = (data: any) => {
  let new_data = { ...data };
  const attributes = data?.attributes;
  attributes.forEach((item: { name: string | number; value: any }) => {
    new_data[item.name] = item.value;
  });
  new_data['price'] = {
    amount: data?.variants[0]?.channel?.price,
  };
  return new_data;
};
