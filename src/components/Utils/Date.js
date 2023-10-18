import { parseISO, format } from 'date-fns';
import PropTypes from 'prop-types';

export default function Date({ dateString }) {
	const date = parseISO(dateString);
	const formattedDate = format(date, 'dd/MM/yyyy');

	return (
		<time dateTime={dateString}>
			<p>{formattedDate}</p>
		</time>
	);
}

Date.propTypes = {
	dateString: PropTypes.string.isRequired,
};
