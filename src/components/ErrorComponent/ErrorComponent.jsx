import { Navigate } from 'react-router-dom';
import { ERROR_ROUTE } from 'src/router/routes';

/**
 * This component is designed to be used in the WithQuery HOC.
 *
 * When some error happens, WithQuery will fallback to this component that just
 * redirects to a generic error page.
 *
 * This should be the behavior for fatal (irrecoverable) errors.
 * Expected and recoverable errors should be handled by the components.
 */

export default function ErrorComponent() {
	return <Navigate to={ERROR_ROUTE} />;
}
