import classes from './page.module.css';

import ButtonDemos from '@/demos/ButtonDemos';
import SwitchDemos from '@/demos/SwitchDemos';

export default function Home() {
	return (
		<div className={classes.root}>
			<h1>Unstyled components comparison</h1>
			<ButtonDemos />
			<SwitchDemos />
		</div>
	);
}
