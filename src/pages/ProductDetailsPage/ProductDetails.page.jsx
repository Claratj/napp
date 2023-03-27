import AppLoader from 'src/components/AppLoader/AppLoader';
import ErrorComponent from 'src/components/ErrorComponent/ErrorComponent';
import WithQuery from 'src/utils/WithQuery';
import ProductDetailsSuccessPage from './components/ProductDetailsSuccess.page';
import useProductDetails from './useProductDetails';

export default WithQuery({
	useHook: useProductDetails,
	Component: ProductDetailsSuccessPage,
	Error: ErrorComponent,
	Loader: AppLoader,
});
