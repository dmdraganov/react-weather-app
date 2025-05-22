import { useState } from 'react';
import './Header.scss';
import { formatDate } from '../../../utilities/dateFormatter';

const Header = ({ location, ...weatherData }) => {
	const currentDate = new Date();
	const [weekday, ...rest] = formatDate(currentDate);

	return (
		<header className='header'>
			<div className='container'>
				<div className='header__container'>
					<div className='header__info'>
						<a className='header__locations-button' href='#'>
							<img src='./' alt='' />
							{location}
							<img src='./' alt='' />
						</a>
						<span className='header__weather-condition'>
							{weatherData.condition.text}
						</span>
						<span className='header__weather-temp'>
							{weatherData.temp} &deg;C
						</span>
						<time dateTime={''}>
							{weekday} | {rest.join(' ')}
						</time>
					</div>
					<img src='' alt='' />
				</div>
			</div>
		</header>
	);
};

export default Header;
