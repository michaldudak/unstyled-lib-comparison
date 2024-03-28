'use client';

import React from 'react';
import classes from './ComponentShowcase.module.css';

interface ComponentShowcaseProps {
	name: string;
	children: React.ReactNode;
}

export function ComponentShowcase({ name, children }: ComponentShowcaseProps) {
	const [expanded, setExpanded] = React.useState(true);

	const toggleExpanded = () => {
		setExpanded((prev) => !prev);
	};

	return (
		<div className={classes.root}>
			<h2 onClick={toggleExpanded}>{name}</h2>
			{expanded && children}
		</div>
	);
}

interface SectionProps {
	name: string;
	children: React.ReactNode;
}

export function Section({ name, children }: SectionProps) {
	return (
		<div className={classes.section}>
			<h3>{name}</h3>
			<div className={classes.demos}>{children}</div>
		</div>
	);
}

type SupportedLibraries = 'Base UI' | 'Ariakit' | 'Radix UI' | 'React Aria';

interface DemoProps {
	library: SupportedLibraries;
	children?: React.ReactNode;
	notAvailable?: boolean;
}

export function Demo({ library, children, notAvailable }: DemoProps) {
	return (
		<div className={classes.demo}>
			<span className={classes.libraryName}>{library}</span>
			{notAvailable ? <span>Not available</span> : children}
		</div>
	);
}
