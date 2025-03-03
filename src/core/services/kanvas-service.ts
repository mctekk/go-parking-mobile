// Core
import { client, adminClient } from 'core/kanvas_client';
import { cloneDeep } from 'lodash';
import { handleCustomFields, handleProductAttributes } from 'utils';

export class KanvasService {
  /**
   * Retrieves user data from the server.
   * @returns {Promise<any>} A promise that resolves with the formatted user data.
   * @throws {Error} If there is an error fetching the user data.
   */
  async getUserData() {
    const withSocial = true;

    try {
      const response = await client.users.getUserData(withSocial);
      const formatResponse = handleCustomFields(response);
      return formatResponse;
    } catch (error) {
      console.log('Error:', error);
      throw new Error(`Error fetching user data: ${error}`);
    }
  }

  /**
   * Updates the user data for a given user ID.
   *
   * @param userId - The ID of the user to update.
   * @param values - The updated values for the user data.
   * @returns The formatted response after updating the user data.
   * @throws If there is an error updating the user data.
   */
  async updateUserData(userId: number, values: any) {
    const withSocial = true;

    try {
      const response = await client.users.updateUserData(userId, values, withSocial);
      const formatResponse = handleCustomFields(response);
      return formatResponse;
    } catch (error) {
      console.log('Error:', error);
      throw new Error(`Error updating user data: ${error}`);
    }
  }

  /**
   * Retrieves parkings data from the server.
   *
   * @returns {Promise<any>} A promise that resolves with the parkings data.
   * @throws {Error} If there is an error fetching the parkings data.
   */
  async getParkings(pageNumber: number = 1, productTypeId?: number) {
    const formatParkingData: any = [];
    try {
      const parkings = await adminClient.inventory.getProduct({
        first: 10,
        page: pageNumber,
        whereCondition: {
          column: 'IS_PUBLISHED',
          operator: 'EQ',
          value: true,
          //AND: [{ column: 'PRODUCTS_TYPES_ID', operator: 'EQ', value: productTypeId }],
        },
      });

      const new_parkings = cloneDeep(parkings);

      parkings?.products?.data?.map((parking: any) => {
        const formatResponse = handleProductAttributes(parking);
        formatParkingData.push(formatResponse);
      });

      new_parkings.products.data = formatParkingData;

      console.log('==Formatted Parkings==', new_parkings);
      return new_parkings;
    } catch (error) {
      console.log('Error:', error);
      throw new Error(`Error fetching products data: ${error}`);
    }
  }
}

export default new KanvasService();
