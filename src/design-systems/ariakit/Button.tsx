'use client';

import { Button as AriakitButton, ButtonProps } from '@ariakit/react';
import classes from '../common/Button.module.css';

export function Button(props: ButtonProps) {
	return <AriakitButton {...props} className={classes.button} />;
}
