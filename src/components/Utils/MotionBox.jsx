import { motion } from 'framer-motion';

const _MotionBox = (props) => {
	const { children = null, style, ...rest } = props;

	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<div ref={ref} {...rest}>
			{children}
		</div>
	);
};

const MotionBox = motion(_MotionBox);

export default MotionBox;
