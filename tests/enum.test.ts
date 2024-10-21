import { Customer, CustomerType } from '../src/enum';

describe('Enum', function () {
    it('should support in typescript', function () {
        const costumer: Customer = {
            id: 1,
            name: 'Akmal',
            type: CustomerType.PLATINUM,
        };

        console.info(costumer);
    });
});
