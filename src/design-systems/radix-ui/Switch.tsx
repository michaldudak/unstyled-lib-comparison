'use client';

import * as React from 'react';
import * as UnstyledSwitch from '@radix-ui/react-switch';
import classes from '../common/Switch.module.css';

export function Switch(props: UnstyledSwitch.SwitchProps) {
	return (
		<UnstyledSwitch.Root {...props} className={classes.root}>
			<UnstyledSwitch.Thumb className={classes.thumb} />
		</UnstyledSwitch.Root>
	);
}
