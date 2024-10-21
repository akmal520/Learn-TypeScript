import { sayHello } from '../src/say-hello';
describe('sayHello', function () {
    it('should return hello akmal', function () {
        expect(sayHello('akmal')).toBe('Hello akmal');
    });
});
