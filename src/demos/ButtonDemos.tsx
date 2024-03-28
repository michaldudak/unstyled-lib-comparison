import { ComponentShowcase, Section, Demo } from '@/ComponentShowcase';

import { Button as AriakitButton } from '@/design-systems/ariakit/Button';
import { Button as BaseUIButton } from '@/design-systems/base-ui/Button';
import { Button as ReactAriaButton } from '@/design-systems/react-aria/Button';

export default function ButtonDemos() {
	return (
		<ComponentShowcase name="Button">
			<Section name="Basic">
				<Demo library="Base UI">
					<BaseUIButton>Button</BaseUIButton>
				</Demo>
				<Demo library="Ariakit">
					<AriakitButton>Button</AriakitButton>
				</Demo>
				<Demo library="Radix UI" notAvailable />
				<Demo library="React Aria">
					<ReactAriaButton>Button</ReactAriaButton>
				</Demo>
			</Section>

			<Section name="With custom element">
				<Demo library="Base UI">
					<BaseUIButton slots={{ root: 'span' }}>Button</BaseUIButton>
				</Demo>
				<Demo library="Ariakit">
					<AriakitButton render={<span />}>Button</AriakitButton>
				</Demo>
				<Demo library="Radix UI" notAvailable />
				<Demo library="React Aria" notAvailable />
			</Section>
		</ComponentShowcase>
	);
}
