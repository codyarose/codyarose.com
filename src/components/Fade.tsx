import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

interface Props {
	show: boolean
	children: any
}

const Fade = ({ show, children }: Props) => {
	const [shouldRender, setShouldRender] = useState(show)

	useEffect(() => {
		if (show) setShouldRender(true)
	}, [show])

	const onAnimationEnd = () => {
		if (!show) setShouldRender(false)
	}

	return shouldRender ? (
		<StyledFade
			style={{ animation: `${show ? 'fadeIn' : 'fadeOut'} 1s` }}
			onAnimationEnd={onAnimationEnd}
		>
			{children}
		</StyledFade>
	) : (
		<div />
	)
}

export default Fade

const StyledFade = styled.div`
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@keyframes fadeOut {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
`
