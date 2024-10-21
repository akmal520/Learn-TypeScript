describe('Array', function () {
    it('should same with javascript', function () {
        const names: string[] = ['mulyono', 'fufufafa', 'wakwaw'];
        const values: number[] = [100, 200, 300];

        console.info(names);
        console.info(values);
    });

    it('should support readonly array', function () {
        const hobbies: ReadonlyArray<string> = ['membaca', 'menulis'];
        console.info(hobbies[0]);
        console.info(hobbies[1]);

        // hobbies[0] = 'tidur';
    });

    it('should support tuple', function () {
        const person: readonly [string, string, number] = [
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
