import { ComponentShowcase, Section, Demo } from '@/ComponentShowcase';

import { Switch as BaseUISwitch } from '@/design-systems/base-ui/Switch';
import { Switch as ReactAriaSwitch } from '@/design-systems/react-aria/Switch';
import { Switch as RadixUISwitch } from '@/design-systems/radix-ui/Switch';

export default function SwitchDemos() {
	return (
		<ComponentShowcase name="Switch">
			<Section name="Basic">
				<Demo library="Base UI">
					<BaseUISwitch aria-label="Toggle something" />
				</Demo>
				<Demo library="Ariakit" notAvailable />
				<Demo library="Radix UI">
					<RadixUISwitch aria-label="Toggle something" />
				</Demo>
				<Demo library="React Aria">
					<ReactAriaSwitch aria-label="Toggle something" />
				</Demo>
			</Section>
			<Section name="Disabled">
				<Demo library="Base UI">
					<BaseUISwitch disabled aria-label="Toggle something" />
				</Demo>
				<Demo library="Ariakit" notAvailable />
				<Demo library="Radix UI">
					<RadixUISwitch disabled aria-label="Toggle something" />
				</Demo>
				<Demo library="React Aria">
					<ReactAriaSwitch isDisabled aria-label="Toggle something" />
				</Demo>
			</Section>
		</ComponentShowcase>
	);
}
