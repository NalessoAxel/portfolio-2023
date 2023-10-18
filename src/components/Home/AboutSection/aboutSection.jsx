import SectionSkeleton from '@components/Layout/SectionSkeleton';
import LogoRounded from '@components/Utils/LogoRounded';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

const AboutSection = () => {
	const text =
		'Hello world, i’m Axel Nalesso a web developer and web designer based in Brussels, Belgium. I work as a freelancer. I help people, small or established buissiness to have a nice and quality prescense on the internet.';

	return (
		<SectionSkeleton className={twMerge('py-[128px] px-16 flex-col h-full')}>
			<div className='flex gap-20'>
				<div className='relative min-w-[649px] min-h-[702px]'>
					<Image src='/assets/About_img.jpg' layout='fill' alt='logo' objectFit='contain' />
				</div>

				<div>
					<div className='flex flex-col items-start justify-start w-full gap-32'>
						<div className='flex items-center justify-start w-full gap-8'>
							<LogoRounded />

							<h1 className='text-6xl leading-tight font-title'>
								About <i>Me</i>
							</h1>
						</div>

						<p className='text-4xl leading-loose tracking-wide font-body drop-shadow-xl'>{text}</p>
					</div>
				</div>
			</div>

			<div>
				<h2 className='font-bold leading-tight uppercase text-8xl font-title'>Contact Me</h2>
			</div>
		</SectionSkeleton>
	);
};

export default AboutSection;
