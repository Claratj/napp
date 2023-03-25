import { Link, useLocation } from 'react-router-dom';
import style from './Breadcrumbs.module.scss';

export default function Breadcrumbs() {
	const location = useLocation();

	let currentLink = '';

	const crumbs = location.pathname
		.split('/')
		.filter((crumb) => crumb !== '')
		.map((crumb, i) => {
			if (crumb.length > 20) {
				crumb = 'details';
			}
			currentLink = +`/${crumb}`;
			return (
				<div key={i} className={style.Breadcrumbs__crumbs}>
					<Link to={currentLink}>{crumb}</Link>
				</div>
			);
		});

	return <div className={style.Breadcrumbs}>{crumbs}</div>;
}
