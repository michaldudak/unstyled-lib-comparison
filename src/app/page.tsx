import { ComponentDemos, ComponentGrid, ComponentHeader, Demo } from '@/ComponentGrid';
import classes from './page.module.css';

import { Button as AriakitButton } from '@/design-systems/ariakit/Button';
import { Button as BaseUIButton } from '@/design-systems/base-ui/Button';
import { Button as ReactAriaButton } from '@/design-systems/react-aria/Button';

import { Switch as BaseUISwitch } from '@/design-systems/base-ui/Switch';
import { Switch as ReactAriaSwitch } from '@/design-systems/react-aria/Switch';
import { Switch as RadixUISwitch } from '@/design-systems/radix-ui/Switch';

export default function Home() {
	return (
		<div className={classes.root}>
			<h1>Unstyled component comparison</h1>
			<ComponentGrid libraries={['Base UI', 'Ariakit', 'Radix UI', 'React Aria']}>
				<ComponentHeader>Button</ComponentHeader>
				<ComponentDemos section="Basic">
					<Demo>
						<BaseUIButton>Button</BaseUIButton>
					</Demo>
					<Demo>
						<AriakitButton>Button</AriakitButton>
					</Demo>
					<Demo>not available</Demo>
					<Demo>
						<ReactAriaButton>Button</ReactAriaButton>
					</Demo>
				</ComponentDemos>
				<ComponentDemos section="With custom element">
					<Demo>
						<BaseUIButton slots={{ root: 'span' }}>Button</BaseUIButton>
					</Demo>
					<Demo>
						<AriakitButton render={<span />}>Button</AriakitButton>
					</Demo>
					<Demo>not available</Demo>
					<Demo>not available</Demo>
				</ComponentDemos>

				<ComponentHeader>Switch</ComponentHeader>
				<ComponentDemos section="Basic">
					<Demo>
						<BaseUISwitch>Button</BaseUISwitch>
					</Demo>
					<Demo>not available</Demo>
					<Demo>
						<RadixUISwitch>Button</RadixUISwitch>
					</Demo>
					<Demo>
						<ReactAriaSwitch>Button</ReactAriaSwitch>
					</Demo>
				</ComponentDemos>
			</ComponentGrid>
		</div>
	);
}
