import SectionSkeleton from '@components/Layout/SectionSkeleton';
import classNames from 'classnames';

const SectionNumbers = () => {
	const flexClass = classNames({
		flex: true,
		'flex-col': true,
		'items-center': true,
		'justify-center': true,
		'w-full': true,
		'h-full': true,
	});

	const span = classNames({
		relative: true,
		'font-numbers': true,
		'text-black': true,
		'text-8xl': true,
	});

	const paragraph = classNames({
		uppercase: true,
		'font-semibold': true,
		'text-black': true,
		'text-4xl': true,
		'text-body': true,
		absolute: true,
	});

	return (
		<SectionSkeleton>
			<div className={flexClass}>
				<span className={span}>01</span>
				<p className={paragraph}>Develop</p>
			</div>

			<div className={flexClass}>
				<span className={span}>02</span>
				<p className={paragraph}>Design</p>
			</div>
		</SectionSkeleton>
	);
};

export default SectionNumbers;
