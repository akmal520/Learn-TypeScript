describe('Function', function () {
    it('should support in typescript', function () {
        const sayHello = (name: string): string => {
            return `Hello ${name}`;
        };
        expect(sayHello('Akmal')).toBe('Hello Akmal');

        const printHello = (name: string): void => {
            console.info(`Hello ${name}`);
        };
        printHello('Akmal');
    });

    it('should support default value', function () {
        const sayHello = (name: string = 'Guest'): string => {
            return `Hello ${name}`;
        };

        expect(sayHello()).toBe('Hello Guest');
        expect(sayHello('Akmal')).toBe('Hello Akmal');
    });

    it('should support rest parameter', () => {
        function sum(...values: number[]): number {
            let total = 0;

            for (const value of values) {
                total += value;
            }

            return total;
        }

        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });

    it('should support optional parameter', () => {
        const sayHello = (firstName: string, lastName?: string): string => {
            if (lastName) {
                return `Hello ${firstName} ${lastName}`;
            } else {
                return `Hello ${firstName}`;
            }
        };

        expect(sayHello('Akmal')).toBe('Hello Akmal');
        expect(sayHello('Akmal', 'Bentar')).toBe('Hello Akmal Bentar');
    });

    it('should support function overloading', () => {
        function callMe(value: string): string;
        function callMe(value: number): number;

        function callMe(value: any): any {
            if (typeof value === 'string') {
                return value.toUpperCase();
            } else if (typeof value === 'number') {
                return value * 10;
            }
        }

        expect(callMe('Akmal')).toBe('AKMAL');
        expect(callMe(5)).toBe(50);
    });

    it('should support function as parameter', () => {
        function sayHello(
            name: string,
            filter: (name: string) => string
        ): string {
            return `Hello ${filter(name)}`;
        }

        function toUpper(name: string): string {
            return name.toUpperCase();
        }

        expect(sayHello('Akmal', toUpper)).toBe('Hello AKMAL');

        expect(
            sayHello('akmal', (name: string): string => {
                return name.toUpperCase();
            })
        ).toBe('Hello AKMAL');
    });
});
