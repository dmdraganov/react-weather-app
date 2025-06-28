import './Header.scss';
import { formatDate } from '../../../utilities/dateFormatter';
import sprite from '/src/assets/icons/sprite.svg';

interface IProps {
	location: string;
	condition: string;
	temp: number;
}

const Header = ({ location, condition, temp }: IProps) => {
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
						<span className='header__weather-condition'>{condition}</span>
						<span className='header__weather-temp'>{temp} &deg;C</span>
						<time dateTime={''}>
							{weekday} | {rest.join(' ')}
						</time>
					</div>
					<svg>
						<use xlinkHref={sprite + '#' + condition.replace(' ', '-')} />
					</svg>
				</div>
			</div>
		</header>
	);
};

export default Header;
