import classNames from 'classnames';

const SectionSkeleton = ({ children, className }) => {
	return <section className={classNames('flex w-full px-16', className)}>{children}</section>;
};

export default SectionSkeleton;
