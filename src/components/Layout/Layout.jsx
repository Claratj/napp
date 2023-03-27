import Header from '../Header/Header';
import style from './Layout.module.scss';

export default function Layout(props) {
	return (
		<div className={style.Layout}>
			<Header />
			<main>{props.children}</main>
		</div>
	);
}
