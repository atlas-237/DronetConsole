export type Random = () => number;
export function createLCG(initialSeed = Date.now() >>> 0): Random { let seed = initialSeed >>> 0; return () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; }; }
export function seedFromString(value: string, salt = 0): number { let seed = salt >>> 0; for (const character of value) seed = (seed * 33 + character.charCodeAt(0)) >>> 0; return seed; }
export function pick<T>(random: Random, values: T[]): T | undefined { return values[Math.floor(random() * values.length)]; }
