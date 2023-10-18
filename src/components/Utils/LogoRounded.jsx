import Image from 'next/image';
const LogoRounded = () => {
	return (
		<span className='flex items-center justify-center w-24 h-24 bg-white rounded-full '>
			<Image src='./assets/Logo_36x36.svg' width={48} height={48} alt='logo' className='object-contain' />
		</span>
	);
};

export default LogoRounded;
