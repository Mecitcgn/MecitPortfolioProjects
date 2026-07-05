import {
	GENERATED_ALGORITHMS,
	GENERATED_ALGO_SUBS,
} from './algorithms.generated.js';

export const ALGORITHMS = GENERATED_ALGORITHMS;
export const ALGO_SUBS = GENERATED_ALGO_SUBS;

export const searchAlgorithms = (query, sub = 'Tümü') => {
	let list =
		sub === 'Tümü' ? ALGORITHMS : ALGORITHMS.filter((a) => a.sub === sub);
	if (!query) return list;
	const q = query.toLowerCase();
	return list.filter(
		(a) =>
			a.title.toLowerCase().includes(q) ||
			a.description.toLowerCase().includes(q) ||
			a.sub.toLowerCase().includes(q) ||
			a.concepts?.some((c) => c.toLowerCase().includes(q)),
	);
};
