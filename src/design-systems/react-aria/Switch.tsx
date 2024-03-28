'use client';

import * as React from 'react';
import { Switch as UnstyledSwitch, SwitchProps } from 'react-aria-components';
import classes from './Switch.module.css';

export function Switch(props: SwitchProps) {
	return (
		<UnstyledSwitch {...props} className={classes.root}>
			<div className={classes.thumb} />
		</UnstyledSwitch>
	);
}
