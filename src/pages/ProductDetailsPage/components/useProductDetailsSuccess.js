import { useContext, useState } from 'react';
import { cartContext } from 'src/providers/CartProvider';
import { useAddToCartProductQuery } from 'src/queries/products.queries';

export default function useProductDetailsSuccess(details) {
	const [selected, setSelected] = useState({
		colorCode: 0,
		storageCode: 0,
	});
	const { cartValue, setCartValue } = useContext(cartContext);
	const addCartResult = useAddToCartProductQuery(selected);

	console.log(details);
	console.log(selected);

	console.log(addCartResult.data);

	function handleSelect(e) {
		const target = e.target;
		if (target.name === 'colorCode') {
			setSelected({ ...selected, colorCode: Number(target.value) });
		}
		if (target.name === 'storageCode') {
			setSelected({ ...selected, storageCode: Number(target.value) });
		}
	}

	function handleAddToCart(e) {
		e.preventDefault();
		if (selected.storageCode !== 0 && selected.colorCode !== 0) {
			setSelected({
				id: details.id,
				...selected,
			});

			setCartValue(cartValue + 1);
		} else {
			window.alert('Please select color and storage');
		}
	}

	return { handleSelect, handleAddToCart };
}
