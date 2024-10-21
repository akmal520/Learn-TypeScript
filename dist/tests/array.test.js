"use strict";
describe('Array', function () {
    it('should same with javascript', function () {
        const names = ['mulyono', 'fufufafa', 'wakwaw'];
        const values = [100, 200, 300];
        console.info(names);
        console.info(values);
    });
    it('should support readonly array', function () {
        const hobbies = ['membaca', 'menulis'];
        console.info(hobbies[0]);
        console.info(hobbies[1]);
        // hobbies[0] = 'tidur';
    });
    it('should support tuple', function () {
        const person = [
            'akmal',
            'bentar',
            15,
        ];
        console.info(person);
        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);
        // person[0] = 'mulyono';
    });
});
