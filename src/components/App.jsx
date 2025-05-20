import { useState } from 'react';

function App() {
	const [location, setLocation] = useState();

	return (
		<>
			<section className='current-info'>
				<div>
					<a href='#'>
						<img src='./' alt='' />
						New York
					</a>
					Cloudy
				</div>
			</section>
		</>
	);
}

export default App;
