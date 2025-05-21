import { useEffect, useState } from 'react';
import CurrentInfo from './sections/current-info/CurrentInfo';

function App() {
	// API variables
	const [location, setLocation] = useState('Lobnya');
	let dataType = 'current';
	const apiKey = 'd2269f3a17594db4a68213744252005';
	const url = `http://api.weatherapi.com/v1/${dataType}.json?key=${apiKey}&q=${location}&lang=ru`;

	//fetchRequest
	useEffect(() => {
		const abortController = new AbortController();
		const fetchData = async () => {
			try {
				const response = await fetch(url, { signal: abortController.signal });
				if (!response.ok) throw new Error(response.status);
				const parsedJSON = await response.json();
				console.log(parsedJSON);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();

		return () => abortController.abort('abort reason: component unmount');
	}, []);

	return (
		<>
			<CurrentInfo />
		</>
	);
}

export default App;
