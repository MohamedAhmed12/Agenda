import React from 'react'
import '../assets/sass/components/footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faFacebook,
	faTwitter,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons'

function Agenda() {
	return (
		<footer className=' footer'>
			<div className='footer-content row'>
				<div className='footer-content--left col-8 text-left'>
					<div className='footer-input'>
						<a
							className='btn-newsletter'
							href='https://eepurl.com/bNEeTr'
							target='_blank'
							rel='noopener noreferrer'
						>
							Sign up to our Newsletter
						</a>
					</div>
					<div className='social-media mt-4 '>
						<h3>Stay Connected</h3>
						<ul className='list-unstyled ml-2'>
							<li>
								<a
									className='fb m-1'
									href='https://www.facebook.com/riseupsummit/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<FontAwesomeIcon icon={faFacebook} />
								</a>
							</li>
							<li>
								<a
									className='inst m-1'
									href='https://www.instagram.com/riseupsummit/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<FontAwesomeIcon icon={faInstagram} />
								</a>
							</li>
							<li>
								<a
									className='tw m-1'
									href='https://twitter.com/riseupsummit/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<FontAwesomeIcon icon={faTwitter} />
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className='footer-content--right col-4 text-left'>
					<h3>Quick links</h3>
					<ul className='list-unstyled'>
						<li>
							<a
								target='_blank'
								rel='noopener noreferrer'
								href='https://riseupco.typeform.com/to/Nzkhm3'
								className='text-white small'
							>
								Apply as a Partner
							</a>
						</li>
						<li>
							<a
								target='_blank'
								rel='noopener noreferrer'
								href='https://riseupco.typeform.com/to/syz8jkXs'
								className='text-white small'
							>
								Apply As a Startup
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className='copyrights--subtitle'>
				<h6>
					© 2019 RiseUp LLC. All rights reserved. CONNECTING STARTUPS TO THE
					MOST RELEVANT RESOURCES WORLDWIDE
				</h6>
			</div>
		</footer>
	)
}

export default Agenda
