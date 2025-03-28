/**
 * Extracts specified properties from an object
 * @param data The source object
 * @param keys Array of property names to extract
 * @returns A new object containing only the specified properties
 */
export function extractKeysInPayload<T extends Record<string, any>, K extends string>(
    payload: T | null | undefined,
    keys: K[]
  ): Partial<Record<K, any>> {
    if (!payload) return {};
    
    return keys.reduce((acc, key) => {
      if (key in payload) {
        acc[key] = payload[key];
      }
      return acc;
    }, {} as Partial<Record<K, any>>);
  }