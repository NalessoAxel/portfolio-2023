import SectionSkeleton from '@components/Layout/SectionSkeleton';
import classNames from 'classnames';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { twMerge } from 'tailwind-merge';

const Heading = () => {
	const refCircle = useRef();
	const refContainer = useRef();

	const { scrollYProgress } = useScroll({
		target: refContainer,
		offset: ['start end', 'end start'],
	});

	const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

	const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

	const headingH1 = classNames({
		uppercase: true,
		'font-semibold': true,
		' font-title': true,
		'text-[20rem]': true,
	});

	return (
		<SectionSkeleton ref={refContainer} className={twMerge('justify-between')}>
			<div className='flex flex-col'>
				<motion.h1 className={headingH1} style={{ opacity }}>
					Axel
				</motion.h1>

				<motion.h1 className={headingH1} style={{ opacity }}>
					Code
				</motion.h1>
			</div>

			<div className='relative h-full pt-12'>
				<motion.div ref={refCircle} className='sticky flex items-center justify-center w-24 h-24 bg-white rounded-full top-10' style={{ rotate }}>
					<Image src='./assets/Logo_36x36.svg' width={48} height={48} alt='logo' />
				</motion.div>
			</div>
		</SectionSkeleton>
	);
};

export default Heading;
