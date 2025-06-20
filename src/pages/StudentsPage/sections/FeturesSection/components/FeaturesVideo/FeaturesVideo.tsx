import type { FC } from 'react'

import styles from './FeaturesVideo.module.sass'
import clsx from 'clsx'

interface FeaturesVideoProps {
	className?: string
}

export const FeaturesVideo: FC<FeaturesVideoProps> = ({ className }) => {
	return <div className={clsx(styles.wrapper, className)}></div>
}
