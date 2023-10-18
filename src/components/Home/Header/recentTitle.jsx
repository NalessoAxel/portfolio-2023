import classNames from 'classnames';

const RecentTitle = () => {
	const heading3 = classNames({
		'font-semibold': true,
		'font-title': true,
		'text-5xl': true,
	});

	return (
		<section className='pb-16'>
			<div>
				<div className='flex flex-col items-center justify-center w-full gap-4'>
					<h3 className={heading3}>Recent</h3>

					<h3 className={heading3}>Work</h3>

					<img src='./assets/Arrow_recent-work.svg' alt='arrow' />
				</div>
			</div>
		</section>
	);
};

export default RecentTitle;
