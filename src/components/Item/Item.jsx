import style from './Item.module.scss';

export default function Item({ image, brand, model, price, onClick }) {
	return (
		<div onClick={onClick} className={style.Item}>
			<div className={style.Item__figure}>
				<img className={style.Item__img} src={image} alt={`${brand} ${model}`} />
				<span className={style.Item__triangle}></span>
				<p className={style.Item__price}>
					{price ? `${price}` : ''}
					<span className={style.Item__currency}>€</span>
				</p>
			</div>
			<div className={style.Item__info}>
				<h3 className={style.Item__title}>
					{brand} - {model}
				</h3>
			</div>
		</div>
	);
}
