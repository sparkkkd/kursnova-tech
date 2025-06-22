import type { FC } from 'react'
import { motion } from 'framer-motion'

import styles from './IconsGroup.module.sass'
import clsx from 'clsx'

interface IconsGroupProps {
	className?: string
	groups: React.FC<React.SVGProps<SVGSVGElement>>[][]
	transforms: { opacity: any; translateY: any }[][]
}

export const IconsGroup: FC<IconsGroupProps> = ({
	groups,
	transforms,
	className,
}) => {
	return (
		<div className={clsx(styles.wrapper, className)}>
			{groups.map((group, i) =>
				group.map((Icon, j) => (
					<motion.div
						key={`${i}-${j}`}
						className={`${styles.icon} ${styles[`pos0_${j}`]}`}
						style={{
							opacity: transforms[i][j].opacity,
							translateY: transforms[i][j].translateY,
						}}
					>
						<Icon />
					</motion.div>
				))
			)}
		</div>
	)
}
