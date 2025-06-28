import type { ReactNode } from 'react';
import styles from './LinkButton.module.scss';

interface IProps {
	children: ReactNode;
}

const LinkButton = ({ children, ...props }: IProps) => {
	return <button className={styles.button}>{children}</button>;
};

export default LinkButton;
