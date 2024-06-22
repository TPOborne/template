import { useState } from 'react';
import Home from './pages/Home'
;
const View = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNext = () => setCurrentIndex((prev) => prev + 1);
	const handleRestart = () => setCurrentIndex(0);

	return (
		<main>
			<div className="contents">
				{currentIndex === 0 && <Home nextHandler={handleNext} />}
				{currentIndex === 1 && <>Page 2</>}
			</div>
			<div className="actions">
				{currentIndex !== 0 && <button onClick={handleNext}>continue</button>}
			</div>
		</main>
	);
}

export default View;