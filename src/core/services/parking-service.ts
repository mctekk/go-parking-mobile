// Core
import { client, adminClient } from 'core/kanvas_client';
import { cloneDeep } from 'lodash';
import { handleProductAttributes } from 'utils';

export class ParkingService {
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

export default new ParkingService();
