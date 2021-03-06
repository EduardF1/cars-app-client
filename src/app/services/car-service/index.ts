import { GET_ALL_CARS } from './queries';
import { GetCars_cars } from './__generated__/GetCars';
import {apolloClient} from '../../graphql-client';

class CarService {
    public async getCars(): Promise<GetCars_cars[]> {
        const response = await apolloClient
            .query({ query: GET_ALL_CARS })
            .catch((err: any) => {
                throw err;
            });
        console.log(response)
        if (response && response.data && response.data.cars && response.data.cars)
            return response.data.cars as GetCars_cars[];

        return [];
    }
}

export default new CarService();
