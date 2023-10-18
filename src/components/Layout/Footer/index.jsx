import Link from 'next/link';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer>
			<div>
				<div className='flex items-center justify-between'>
					<p>Axel Nalesso &copy;{currentYear} </p>

					<Link href='/legal-mention' passHref>
						<p className=' font-body'>Legal Mention</p>
					</Link>

					<div className='flex gap-4'>
						<a href='www.github.com/axel-nalesso/' target='_blank'>
							<p className=' font-body'>Github</p>
						</a>

						<a href='www.linkedin.com/in/axel-nalesso/' target='_blank'>
							<p className=' font-body'>Linkedin</p>
						</a>

						<a href='www.twitter.com/axelnalesso/' target='_blank'>
							<p className=' font-body'>Twitter</p>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

Footer.propTypes = {};

export default Footer;
