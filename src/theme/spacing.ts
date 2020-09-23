const baseUnit = 16

type SpacingArg = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 'auto'

export const spacing = (...props: SpacingArg[]) =>
	props.reduce((acc: string, curr: SpacingArg, currIndex) => {
		const value = typeof curr === 'number' ? `${curr * baseUnit}px` : curr
		const space = currIndex !== 0 ? ' ' : ''
		return acc + space + value
	}, '')
