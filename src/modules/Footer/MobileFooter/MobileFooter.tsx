import type { FC } from 'react'
import clsx from 'clsx'

import { Container } from '../../../components/Container/Container'

import Bot from '../../../assets/footer/bot.svg'
import GreenBall from '../../../assets/footer/green-ball.png'
import Eurica from '../../../assets/footer/eurica.svg'
import Horse from '../../../assets/footer/horse.png'
import CardBackground from '../../../assets/footer/card-bg-mobile.png'

import styles from './MobileFooter.module.sass'
import { FooterCard } from '../FooterCard/FooterCard'
import { FooterContacts } from '../FooterContacts/FooterContacts'
import { FooterLicense } from '../FooterLicense/FooterLicense'

interface MobileFooterProps {
	className?: string
}

export const MobileFooter: FC<MobileFooterProps> = ({ className }) => {
	return (
		<footer className={clsx(styles.footer, className)}>
			<Container>
				<div className={styles.wrapper}>
					<h3 className={styles.title}>
						Учиться <br /> по-новому <br /> с kursnova
						<img className={styles.bot} src={Bot} alt='Bot' />
						<img className={styles.greenBall} src={GreenBall} alt='GreenBall' />
						<img className={styles.eurica} src={Eurica} alt='Eurica' />
						<img className={styles.horse} src={Horse} alt='Horse' />
					</h3>
					<FooterCard
						backgroundImage={CardBackground}
						className={styles.card}
					/>
					<FooterContacts className={styles.contacts} />
					<FooterLicense className={styles.license} />
				</div>
			</Container>
		</footer>
	)
}
