"use strict";
describe('If Statemnet', () => {
    it('should support in typescript', () => {
        const examValue = 59;
        if (examValue >= 80) {
            console.info('Good');
        }
        else if (examValue >= 60) {
            console.info('Not Bad');
        }
        else {
            console.info('Try Again');
        }
    });
    it('should support ternary operator', () => {
        const value = 70;
        const say = value >= 75 ? 'Congratulation' : 'Try Again';
        console.info(say);
    });
    it('should support switch statement', () => {
        function sayHello(name) {
            switch (name) {
                case 'Akmal':
                    return 'Hello Akmal';
                case 'Mulyono':
                    return 'Hello Mulyono';
                default:
                    return 'Hello';
            }
        }
        console.info(sayHello('Akmal'));
        console.info(sayHello('Mulyono'));
        console.info(sayHello('Joko'));
    });
});
