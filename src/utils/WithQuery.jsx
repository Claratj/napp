import AppLoader from 'src/components/AppLoader/AppLoader';
import ErrorComponent from 'src/components/ErrorComponent/ErrorComponent';

/**
 * High order component that returns a spinner when the hook provided is on a pending status.
 */
export default function WithQuery({ useHook, Component, Loader = AppLoader, Error = ErrorComponent }) {
	function WrappedComponent(originalProps) {
		const { status, props } = useHook(originalProps);

		if (status === 'PENDING' || status === 'loading') {
			return <Loader {...props} />;
		}

		if (status === 'SUCCESS' || status === 'FAILED' || status === 'success' || status === 'error') {
			return <Component {...props} />;
		}

		if (status === 'FAILED' || status === 'error') {
			return <Error {...props} />;
		}

		return null;
	}

	WrappedComponent.displayName = `WithQuery_${Component.displayName || Component.name}`;

	return WrappedComponent;
}
