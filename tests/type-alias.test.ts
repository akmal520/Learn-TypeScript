import { Category, Product } from '../src/type-alias';

describe('Type Alias', function () {
    it('should support in typescript', function () {
        const category: Category = {
            id: 1,
            name: 'Handphone',
        };

        const product: Product = {
            id: '1',
            name: 'Samsung 20',
            price: 2000000,
            category: category,
        };

        console.info(category);
        console.info(product);
    });
});
