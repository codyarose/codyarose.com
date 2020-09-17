const asLiterals = <T extends string>(arr: T[]): T[] => arr

const keys = asLiterals(['xs', 'sm', 'md', 'lg', 'xl'])

type Values = { [K in typeof keys[number]]: number }

type BreakpointArg = typeof keys[number] | number

const values: Values = {
	xs: 0,
	sm: 600,
	md: 960,
	lg: 1280,
	xl: 1920,
}

const up = (key: BreakpointArg) => {
	if (typeof key === 'number') return `@media (min-width: ${key}px)`

	const value = typeof values[key] === 'number' ? values[key] : key
	return `@media (min-width: ${value}px)`
}

const down = (key: BreakpointArg) => {
	if (typeof key === 'number') return `@media (max-width: ${key - 5 / 100}px)`

	const endIndex = keys.indexOf(key) + 1
	const upperBound = values[keys[endIndex]]

	if (endIndex === keys.length) {
		return up('xs')
	}

	const value = upperBound
	return `@media (max-width: ${value - 5 / 100}px)`
}

const between = (start: BreakpointArg, end: BreakpointArg) => {
	if (typeof start === 'number' && typeof end === 'number') {
		return `@media (min-width:${start}px) and (max-width: ${end -
			5 / 100}px)`
	}

	const endIndex = typeof end === 'string' && keys.indexOf(end)

	if (endIndex === keys.length - 1) {
		return up(start)
	}

	const startValue = typeof start === 'number' ? start : values[start]

	const endValue =
		typeof end === 'number' ? end : values[keys[keys.indexOf(end) + 1]]

	return `@media (min-width:${startValue}px) and (max-width: ${endValue -
		5 / 100}px)`
}

const only = (key: BreakpointArg) => between(key, key)

export const breakpoints = {
	keys,
	values,
	up,
	down,
	between,
	only,
}
