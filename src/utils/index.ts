import Share from 'react-native-share';

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
