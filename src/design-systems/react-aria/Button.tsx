'use client';

import { Button as ReactAriaButton, ButtonProps } from 'react-aria-components';
import classes from '../common/Button.module.css';

export function Button(props: ButtonProps) {
	return <ReactAriaButton {...props} className={classes.button} />;
}
