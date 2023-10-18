import SectionSkeleton from '@components/Layout/SectionSkeleton';
import classNames from 'classnames';

const WorkSection = () => {
	const Work = [
		{
			project: 'MMWBA',
			slug: 'mmwba',
			title: 'Developement & Design',
			id: 1,
		},

		{
			project: 'Louise Vandervorst',
			slug: 'louise-vandervorst',
			title: 'Developement & Design',
			id: 2,
		},

		{ project: 'Les Terres Happy', slug: 'les-terres-happy', title: 'Developement & Design', id: 3 },

		{
			project: 'Ioda Restaurant',
			slug: 'ioda-restaurant',
			title: 'Developement',
			id: 4,
		},
	];

	const heading = classNames({
		'font-medium': true,
		'font-title': true,
		'text-5xl': true,
	});

	return (
		<SectionSkeleton>
			<div className='flex flex-col items-center justify-center w-full gap-16'>
				{Work.map((work) => (
					<div className='flex items-center justify-between w-full gap-12' key={work.id}>
						<h2 className={heading}>{work.project}</h2>
						<h2 className={heading}>{work.title}</h2>
					</div>
				))}
			</div>
		</SectionSkeleton>
	);
};

export default WorkSection;
