describe('Interface', function () {
    it('should support in typescript', function () {
        const seller = {
            id: 1,
            name: 'Toko Akmal',
            nib: '1234325346',
            npwp: '56756756',
        };
        seller.id = 2;
        seller.name = 'Toko Mulyono';
        console.info(seller);
    });
    it('should support function interface', function () {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(13, 2)).toBe(15);
    });
    it('should support indexable interface', function () {
        const names = ['Akmal', 'Bentar', 'Sakumbara'];
        console.info(names);
    });
    it('should support indexable interface for none number index', function () {
        const dictionary = {
            name: 'Akmal',
            address: 'Indonesia',
        };
        expect(dictionary['name']).toBe('Akmal');
        expect(dictionary['address']).toBe('Indonesia');
    });
    it('should support extends interface', function () {
        const employee = {
            id: 1,
            name: 'Akmal',
            division: 'IT',
        };
        console.info(employee);
        const manager = {
            id: 1,
            name: 'Bentar',
            division: 'IT Manager',
            numberOfEmployees: 10,
        };
        console.info(manager);
    });
    it('should support function in interface', function () {
        const person = {
            name: 'Akmal',
            address: 'Indonesia',
            sayHello: function (name) {
                return `Hello ${name}, my name is ${this.name}, and i'm from ${this.address}`;
            },
        };
        console.info(person.sayHello('Mulyono'));
    });
    it('should support intersection types', function () {
        const domain = {
            id: 1,
            name: 'Akmal',
        };
        console.info(domain);
    });
});
export {};
