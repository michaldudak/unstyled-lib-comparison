'use client';

import * as React from 'react';
import classes from './ComponentGrid.module.css';

interface ComponentGridProps {
	libraries: string[];
	children: React.ReactNode;
}

interface ComponentGridContextValue {
	libraryCount: number;
}

const ComponentGridContext = React.createContext<ComponentGridContextValue | undefined>(undefined);

export function ComponentHeader({ children }: React.PropsWithChildren<{}>) {
	const context = React.useContext(ComponentGridContext);
	if (!context) {
		throw new Error('ComponentHeader must be used within a ComponentGrid');
	}

	return (
		<tr className={classes.header}>
			<td colSpan={context.libraryCount}>
				<h2>{children}</h2>
			</td>
		</tr>
	);
}

interface ComponentDemosProps {
	children: React.ReactNode;
	section: string;
}

export function ComponentDemos({ children, section }: ComponentDemosProps) {
	const context = React.useContext(ComponentGridContext);
	if (!context) {
		throw new Error('ComponentHeader must be used within a ComponentGrid');
	}

	return (
		<>
			<tr className={classes.subheader}>
				<td colSpan={context.libraryCount}>
					<h3>{section}</h3>
				</td>
			</tr>
			<tr>{children}</tr>
		</>
	);
}

export function Demo({ children }: React.PropsWithChildren<{}>) {
	return (
		<td>
			<div className={classes.demo}>{children}</div>
		</td>
	);
}

export function ComponentGrid(props: ComponentGridProps) {
	const { libraries, children } = props;
	const libraryCount = libraries.length;

	return (
		<ComponentGridContext.Provider value={{ libraryCount }}>
			<table className={classes.grid}>
				<thead>
					<tr>
						{libraries.map((library) => (
							<th className={classes.columnHeader} key={library}>
								{library}
							</th>
						))}
					</tr>
				</thead>
				<tbody>{children}</tbody>
			</table>
		</ComponentGridContext.Provider>
	);
}
