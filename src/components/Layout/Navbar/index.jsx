import classNames from 'classnames';
import Link from 'next/link';
import SectionSkeleton from '../SectionSkeleton';

const Navbar = (props) => {
	const paragraph = classNames({
		'text-2xl': true,
		'font-body': true,
	});

	const paragraphEffect = classNames({
		relative: true,
		'inline-block': true,
		transition: true,
		transform: true,
		'duration-300': true,
		'text-2xl': true,

		//before
		'before:absolute': true,
		'before:top-full': true,
		'before:content-[attr(data-hover)]': true,
		'before:transform': true,
		'before:translate-z': true,
		'before:font-bold': true,
		uppercase: true,

		//hover
		'hover:transform': true,
		'hover:-translate-y-full': true,
		'hover:before:underline': true,

		//focus
		'focus:transform': true,
		'focus:-translate-y-full': true,
	});

	const link = classNames({
		'overflow-hidden': true,
		'h-8': true,
		'px-4': true,
	});

	const links = [
		{ slug: 'works', title: 'Works' },
		{ slug: 'about', title: 'About' },
		{ slug: 'contact', title: 'Contact' },
	];

	const strToUrl = (str) => `/${str.replace(' ', '')}`;

	const NavItem = ({ children, to = '/', dataLetters, classname }) => {
		return (
			<Link href={to} passHref className={link}>
				<span className={paragraphEffect} data-hover={dataLetters}>
					{children}
				</span>
			</Link>
		);
	};

	return (
		<SectionSkeleton>
			<nav className='flex justify-between w-full'>
				<div className='flex items-center justify-between w-full'>
					<Link href='/' passHref>
						<img src='./assets/Logo_36x36.svg' alt='logo' className='object-contain w-[48px] h-[48px]' />
					</Link>

					{links.map((link, index) => (
						<div className='flex items-center gap-2' key={index}>
							<NavItem to={strToUrl(link.slug)} dataLetters={link.title}>
								{link.title}
							</NavItem>
						</div>
					))}
					<div className='flex items-center gap-2'>
						<p className={paragraph}>Freelance</p>
						<p className={paragraph}>Brussels, Be</p>
					</div>
				</div>
			</nav>
		</SectionSkeleton>
	);
};

export default Navbar;
