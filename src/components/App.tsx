import { useEffect, useState } from 'react';
import Header from './sections/header/Header';
import Details from './sections/details/Details';
import DayForecast from './sections/day-forecast/DayForecast';
import Activities from './sections/activities/Activities';
import NavMenu from './sections/nav-menu/NavMenu';
import type { IWeatherData } from '../types/weatherAPI';

function App() {
	const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);

	//variables for API request
	const [location, setLocation] = useState('Lobnya');

	const apiKey = 'd2269f3a17594db4a68213744252005';
	const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&lang=en`;

	//API Request
	useEffect(() => {
		const abortController = new AbortController();

		const fetchData = async () => {
			try {
				const response = await fetch(url, { signal: abortController.signal });
				if (!response.ok) throw new Error(String(response.status));
				const data = await response.json();

				setWeatherData(data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();

		return () => abortController.abort('abort reason: component unmount');
	}, [location]);

	return (
		<div className='flex-container flex-container--column'>
			{!!weatherData && (
				<Header
					location={location}
					condition={weatherData.current.condition.text}
					temp={weatherData.current.temp_c}
				/>
			)}
			<main className='main flex-container__flex-item'>
				<div className='container flex-container'>
					<NavMenu />
					<div className='flex-container__flex-item'>
						<Activities />
						<DayForecast />
					</div>
					<Details />
				</div>
			</main>
		</div>
	);
}

export default App;
