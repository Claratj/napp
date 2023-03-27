import WithQuery from '../../utils/WithQuery';
import ProductsFailedPage from './components/ProductsFailed.page';
import ProductsLoadingPage from './components/ProductsLoading.page';
import ProductsSuccessPage from './components/ProductsPageSuccess/ProductsSuccess.page';
import useProducts from './useProducts';

export default WithQuery({
	useHook: useProducts,
	Component: ProductsSuccessPage,
	Error: ProductsFailedPage,
	Loader: ProductsLoadingPage,
});
