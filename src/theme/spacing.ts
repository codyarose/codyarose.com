const baseUnit = 8

type SpacingArg = number | 'auto'

export const spacing = (...props: SpacingArg[]) =>
	props.reduce((acc: string, curr: SpacingArg, currIndex) => {
		const value = typeof curr === 'number' ? `${curr * baseUnit}px` : curr
		const space = currIndex !== 0 ? ' ' : ''
		return acc + space + value
	}, '')
