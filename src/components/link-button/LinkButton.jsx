import styles from './LinkButton.module.scss';

const LinkButton = ({ children, ...props }) => {
	return <button className={styles.button}>{children}</button>;
};

export default LinkButton;
