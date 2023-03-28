import classNames from 'classnames';
import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { cartContext } from 'src/providers/CartProvider';
import { PRODUCTS_ROUTE } from 'src/router/routes';
import Breadcrumbs from './components/Breadcrumbs';
import style from './Header.module.scss';
import logo from './images/logo.svg';

export default function Header() {
	const [scrollNav, setScrollNav] = useState(false);
	const changeNav = () => {
		window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', changeNav);
	}, []);

	const { cartValue } = useContext(cartContext);
	return (
		<div className={scrollNav ? [`${style.Header} ${style.Header__active}`] : style.Header} data-testid="header">
			<div className={style.Header__nav}>
				<Link to={PRODUCTS_ROUTE}>
					<div className={style.Header__logo}>
						<img src={logo} alt="mobile shop logo" data-testid="logo" />
					</div>
				</Link>
				<NavLink
					className={({ isActive }) =>
						isActive ? classNames(style.Nav__link, style['Nav__link--active']) : style.Nav__link
					}
					exact
					to={PRODUCTS_ROUTE}
				>
					Products
				</NavLink>
				<div className={style.Header__breadcrumbs}>
					<Breadcrumbs />
				</div>
			</div>

			<div className={style.Header__shop}>
				<span className={`material-symbols-outlined  ${style.Header__cart}`}>shopping_cart</span>
				<span className={style.Header__num}>{cartValue}</span>
			</div>
		</div>
	);
}
