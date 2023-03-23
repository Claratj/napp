import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import { HOME_ROUTE, PRODUCTS_ROUTE } from 'src/router/routes';
import style from './Header.module.scss';
import logo from './images/logo.svg';

export default function Header() {
	return (
		<div className={style.Header} data-testid="header">
			<div className={style.Header__nav}>
				<Link to={HOME_ROUTE}>
					<div className={style.Header__logo}>
						<img src={logo} alt="mobile shop logo" data-testid="logo" />
					</div>
				</Link>

				<nav className={style.Nav}>
					<NavLink
						className={({ isActive }) =>
							isActive ? classNames(style.Nav__link, style['Nav__link--active']) : style.Nav__link
						}
						to={HOME_ROUTE}
					>
						Home
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? classNames(style.Nav__link, style['Nav__link--active']) : style.Nav__link
						}
						to={PRODUCTS_ROUTE}
					>
						Products
					</NavLink>
				</nav>
			</div>
			<Link to="/cart">
				<div className={style.Header__shop}>
					<span className={`material-symbols-outlined  ${style.Header__cart}`}>shopping_cart</span>
					<span className={style.Header__num}>{0}</span>
				</div>
			</Link>
		</div>
	);
}
