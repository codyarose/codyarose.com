import React, { FC, SVGProps } from 'react'
import GithubIcon from '../../svg/github.svg'
import LinkedinIcon from '../../svg/linkedin.svg'
import DocIcon from '../../svg/doc.svg'
import SendIcon from '../../svg/send.svg'
import TwitterIcon from '../../svg/twitter.svg'
import ChevronRightIcon from '../../svg/chevronRight.svg'

interface Props {
	variant: 'github' | 'linkedin' | 'doc' | 'send' | 'twitter' | 'chevronRight'
}

const variants: { [key: string]: any } = {
	github: GithubIcon,
	linkedin: LinkedinIcon,
	doc: DocIcon,
	send: SendIcon,
	twitter: TwitterIcon,
	chevronRight: ChevronRightIcon,
}

const Icon: FC<Props & SVGProps<SVGElement>> = ({ variant, ...props }) => {
	const SelectedIcon = variants[variant]
	return <SelectedIcon {...props} />
}

export default Icon
