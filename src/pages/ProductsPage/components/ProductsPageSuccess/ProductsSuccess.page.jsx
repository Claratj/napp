import Item from 'src/components/Item/Item';
import Search from 'src/components/Search/Search';
import style from '../../ProductsPage.module.scss';
import useProductsSuccess from './useProductsSuccess';

export default function ProductsSuccessPage(props) {
	const { querySearch, search, handleQuerySearch, onProductClick } = useProductsSuccess();

	console.log(props);

	return (
		<div className={style.Products}>
			<div className={style.Products__search}>
				<Search placeholder={'Search'} value={querySearch} onSearchChange={(e) => handleQuerySearch(e)} />
			</div>
			<div className={style.Products__gallery}>
				{search(props.products)?.map((product) => (
					<Item
						key={product.id}
						image={product.imgUrl}
						brand={product.brand}
						model={product.model}
						price={product.price}
						onClick={() => onProductClick(product.id)}
					/>
				))}
			</div>
		</div>
	);
}
