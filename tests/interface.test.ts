import { Employee, Manager } from '../src/employee';
import { Person } from '../src/person';
import { Seller } from '../src/seller';

describe('Interface', function () {
    it('should support in typescript', function () {
        const seller: Seller = {
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
        interface AddFunction {
            (value1: number, value2: number): number;
        }

        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        };

        expect(add(13, 2)).toBe(15);
    });

    it('should support indexable interface', function () {
        interface StringArray {
            [index: number]: string;
        }

        const names: StringArray = ['Akmal', 'Bentar', 'Sakumbara'];
        console.info(names);
    });

    it('should support indexable interface for none number index', function () {
        interface StringDictionary {
            [key: string]: string;
        }

        const dictionary: StringDictionary = {
            name: 'Akmal',
            address: 'Indonesia',
        };
        expect(dictionary['name']).toBe('Akmal');
        expect(dictionary['address']).toBe('Indonesia');
    });

    it('should support extends interface', function () {
        const employee: Employee = {
            id: 1,
            name: 'Akmal',
            division: 'IT',
        };

        console.info(employee);

        const manager: Manager = {
            id: 1,
            name: 'Bentar',
            division: 'IT Manager',
            numberOfEmployees: 10,
        };

        console.info(manager);
    });

    it('should support function in interface', function () {
        const person: Person = {
            name: 'Akmal',
            address: 'Indonesia',
            sayHello: function (name: string): string {
                return `Hello ${name}, my name is ${this.name}, and i'm from ${this.address}`;
            },
        };

        console.info(person.sayHello('Mulyono'));
    });

    it('should support intersection types', function () {
        interface HasName {
            name: string;
        }

        interface HasId {
            id: number;
        }

        type Domain = HasId & HasName;

        const domain: Domain = {
            id: 1,
            name: 'Akmal',
        };

        console.info(domain);
    });
});
