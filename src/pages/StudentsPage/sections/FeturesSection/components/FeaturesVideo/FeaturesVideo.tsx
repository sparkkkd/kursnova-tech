import type { FC } from 'react'
import {
	FeaturesDescription,
	type FeaturesDescriptionProps,
} from '../FeaturesDescription/FeaturesDescription'
import clsx from 'clsx'

import { Container } from '../../../../../../components/Container/Container'
import { FeaturesButton } from '../FeaturesButton/FeaturesButton'

import PhoneIcon from '../../../../../../assets/features/video-phone.svg?react'
import VideoTag from '../../../../../../assets/features/video-tag.svg?react'
import VideoPlayIcon from '../../../../../../assets/features/video-play.svg?react'
import EyeIcon from '../../../../../../assets/features/eyes.svg?react'
import TimerIcon from '../../../../../../assets/features/timer.svg?react'
import reelsVideo from '../../../../../../assets/features/reels.mp4'

import styles from './FeaturesVideo.module.sass'

interface FeaturesVideoProps {
	className?: string
}

export const FeaturesVideo: FC<FeaturesVideoProps> = ({ className }) => {
	return (
		<Container className={styles.container}>
			<div className={clsx(styles.wrapper, className)}>
				<div className={styles.left}>
					<div className={styles.title}>Смотри</div>
					<div className={styles.text}>
						<div>
							ви
							<PhoneIcon className={styles.phoneIcon} />
						</div>
						<div>део</div>
						<VideoTag className={styles.videoTag} />
						<button className={styles.button}>
							<VideoPlayIcon className={styles.playIcon} />
							Смотреть пример
						</button>
					</div>
				</div>
				<div className={styles.center}>
					<video className={styles.video} src={reelsVideo}></video>
				</div>
				<div className={styles.right}>
					{FEATURES_DESCRIPTIONS.map((props, index) => (
						<FeaturesDescription key={index} {...props} />
					))}
					<FeaturesButton />
				</div>
			</div>
			<FeaturesButton className={styles.tryButton} />
		</Container>
	)
}

const FEATURES_DESCRIPTIONS: FeaturesDescriptionProps[] = [
	{
		icon: <EyeIcon />,
		title: 'Более 300 видео',
		description: 'на нашей платформе',
	},
	{
		icon: <TimerIcon />,
		title: '5-10 минут',
		description: (
			<>
				длится один ролик kursnova. <br /> Ещё и на задачки остаётся!
			</>
		),
	},
]
