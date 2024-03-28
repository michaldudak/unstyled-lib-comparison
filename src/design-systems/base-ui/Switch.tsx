'use client';

import * as React from 'react';
import { Switch as UnstyledSwitch, SwitchProps } from '@mui/base/Switch';
import classes from '../common/Switch.module.css';

export function Switch(props: SwitchProps) {
	return (
		<UnstyledSwitch {...props} className={classes.root}>
			<UnstyledSwitch.Thumb className={classes.thumb} />
		</UnstyledSwitch>
	);
}
