import { extractKeysInPayload } from './extract-keys-in-payload';

describe('extractKeysInPayload', () => {
	it('should extract specified keys from an object', () => {
		const testObj = {
			id: 123,
			name: 'Test',
			email: 'test@example.com',
			password: 'secret',
		};

		const result = extractKeysInPayload(testObj, ['id', 'name']);

		expect(result).toEqual({
			id: 123,
			name: 'Test',
		});
	});

	it('should handle missing keys gracefully', () => {
		const testObj = { id: 123, name: 'Test' };

		// @ts-ignore - Testing runtime behavior with invalid key
		const result = extractKeysInPayload(testObj, ['id', 'nonExistent']);

		expect(result).toEqual({ id: 123 });
	});

	it('should return empty object for empty input', () => {
		expect(extractKeysInPayload({}, ['id'])).toEqual({});
		expect(extractKeysInPayload({ id: 123 }, [])).toEqual({});
		expect(extractKeysInPayload(null as any, ['id'])).toEqual({});
	});
});