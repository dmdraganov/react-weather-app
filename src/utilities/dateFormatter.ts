export const formatDate = (date: Date, locale = 'en-US') => {
	const dayName = date.toLocaleString(locale, {
		weekday: 'long',
	});
	const month = date.toLocaleString(locale, {
		month: 'short',
	});
	return [dayName, date.getDate(), month, date.getFullYear()];
};
