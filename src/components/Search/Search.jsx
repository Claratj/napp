import style from './Search.module.scss';

export default function Search({ placeholder, value, onSearchChange }) {
	return (
		<div className={style.Search}>
			<label htmlFor="search" className={style.Search__label}>
				Search
			</label>
			<input
				id="search"
				name="search"
				className={style.Search__input}
				type="search"
				placeholder={placeholder}
				value={value}
				onChange={onSearchChange}
			/>
		</div>
	);
}
