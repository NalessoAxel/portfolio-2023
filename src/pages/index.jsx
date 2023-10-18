import AboutSection from '@components/Home/AboutSection/aboutSection';
import Heading from '@components/Home/Header/heading';
import RecentTitle from '@components/Home/Header/recentTitle';
import WorkSection from '@components/Home/WorkSection/workSection';
import SectionNumbers from '@components/Home/sectionNumbers';

export default function Home() {
	return (
		<>
			<Heading />
			<SectionNumbers />
			<RecentTitle />
			<WorkSection />
			<AboutSection />
		</>
	);
}
