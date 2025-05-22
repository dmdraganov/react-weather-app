import { useEffect, useState } from 'react';
import Header from './sections/header/Header';
import Details from './sections/details/Details';
import DayForecast from './sections/day-forecast/DayForecast';
import Activities from './sections/activities/Activities';

function App() {
	const [weather, setWeather] = useState(null);
	//variables for API request
	const [location, setLocation] = useState('Lobnya');
	let dataType = 'current';
	const apiKey = 'd2269f3a17594db4a68213744252005';
	const url = `http://api.weatherapi.com/v1/${dataType}.json?key=${apiKey}&q=${location}&lang=en`;

	//API Request
	useEffect(() => {
		const abortController = new AbortController();
		const fetchData = async () => {
			try {
				const response = await fetch(url, { signal: abortController.signal });
				if (!response.ok) throw new Error(response.status);
				const data = await response.json();

				setWeather(data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();

		return () => abortController.abort('abort reason: component unmount');
	}, [location]);

	return (
		<>
			{!!weather && (
				<Header
					location={location}
					condition={weather[dataType].condition}
					temp={weather[dataType].temp_c}
				/>
			)}
		</>
	);
}

export default App;
