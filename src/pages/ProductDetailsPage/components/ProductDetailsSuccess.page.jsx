import { useNavigate } from 'react-router-dom';
import style from '../ProductDetailsPage.module.scss';
import useProductDetailsSuccess from './useProductDetailsSuccess';

export default function ProductDetailsSuccessPage(props) {
	const navigate = useNavigate();

	const { handleSelect, handleAddToCart } = useProductDetailsSuccess(props.details);

	const colorSelector = props.details?.options?.colors.map((color, index) => (
		<label key={index} className={style.Details__label} htmlFor={color.code}>
			<input name="colorCode" type="radio" id={color.code} value={color.code} onChange={handleSelect} />
			<span>{color.name}</span>
		</label>
	));

	const storageSelector = props.details?.options?.storages.map((storage, index) => (
		<label key={index} className={style.Details__label} htmlFor={storage.code}>
			<input name="storageCode" type="radio" id={storage.code} value={storage.code} onChange={handleSelect} />
			<span>{storage.name}</span>
		</label>
	));

	return (
		<section className={style.Details__section}>
			<div className={style.Details__content}>
				<div className={style.Details__photo}>
					<img src={props.details?.imgUrl} alt={`${props.details?.brand} ${props.details?.model}`} />
				</div>
				<div className={style.Details__info}>
					<div className={style.Details__description}>
						<h3 className={style.Details__title}>
							{props.details?.brand} - {props.details?.model}
						</h3>
						<h4 className={style.Details__subtitle}>Characteristics: </h4>
						<ul className={style.Details__ul}>
							<li className={style.Details__li}>
								<p>CPU:</p>
								<p> {props.details?.cpu}</p>
							</li>
							<li className={style.Details__li}>
								<p>RAM:</p>
								<p> {props.details?.ram}</p>
							</li>
							<li className={style.Details__li}>
								<p>OS:</p>
								<p> {props.details?.os}</p>
							</li>
							<li className={style.Details__li}>
								<p>Display resolution:</p>
								<p> {props.details?.displayResolution}</p>
							</li>
							<li className={style.Details__li}>
								<p>Battery:</p>
								<p> {props.details?.battery}</p>
							</li>
							<li className={style.Details__li}>
								<p>Primary camera:</p>
								<p> {props.details?.primaryCamera?.toString().replaceAll(',', ' ') || '-'}</p>
							</li>
							<li className={style.Details__li}>
								<p>Secondary camera: </p>
								<p>{props.details?.secondaryCmera?.toString().replaceAll(',', ', ') || '-'}</p>
							</li>
							<li className={style.Details__li}>
								<p>Dimentions: </p>
								<p>{props.details?.dimentions}</p>
							</li>
							<li className={style.Details__li}>
								<p>Weight: </p>
								<p>{props.details?.weight || '-'}</p>
							</li>
						</ul>
					</div>
					<form
						className={style.Details__form}
						onSubmit={handleAddToCart}
						data-testid="form-add-to-cart"
						aria-label="add to cart form"
					>
						<h4 className={style.Details__subtitle}>Options available: </h4>
						<div className={style.Details__form__container}>
							<div className={style.Details__select}>
								<p>Select a color: </p>
								<div className={style.Details__input}>{colorSelector}</div>
							</div>
							<div className={style.Details__select}>
								<p>Select a storage: </p>
								<div className={style.Details__input}>{storageSelector}</div>
							</div>
						</div>
						<div className={style.Details__action}>
							<p className={style.Details__select}>{props.details?.price} €</p>
							<button className={style.Details__add}>Add to cart</button>
						</div>
					</form>
				</div>
			</div>
			<button type="button" className={style.Details__back} onClick={() => navigate(-1)}>
				<span className="material-symbols-outlined">arrow_back</span>
				<span className="text-sm">Back</span>
			</button>
		</section>
	);
}
