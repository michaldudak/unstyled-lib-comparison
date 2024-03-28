'use client';

import { Button as BaseUIButton, ButtonProps } from '@mui/base';
import classes from '../common/Button.module.css';

export function Button(props: ButtonProps) {
	return <BaseUIButton {...props} className={classes.button} />;
}
