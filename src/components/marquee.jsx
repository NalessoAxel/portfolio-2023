import Marquee from 'react-fast-marquee';

const marquee = (props) => {
	return (
		<section className='h-full'>
			<div>
				<Marquee gradient={false} speed={40} pauseOnHover={true} autoFill={true}>
					<p className='h-full mx-8 text-4xl font-semibold uppercase text font-title'>currently working at mona studio</p>
				</Marquee>
			</div>
		</section>
	);
};

export default marquee;
