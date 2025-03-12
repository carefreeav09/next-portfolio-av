'use client';
import {ErrorBoundary, FallbackProps} from 'react-error-boundary';

function fallbackRenderer({error, resetErrorBoundary}: FallbackProps) {
  return (
    <div role='alert'>
      <p>Something went wrong:</p>
      <pre style={{color: 'red'}}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Retry</button>
    </div>
  );
}

const ErrorBoundaryHandler = ({children}: {children: React.ReactNode}) => {
  return (
    <ErrorBoundary
      fallbackRender={fallbackRenderer}
      onReset={(details) => {
        // Reset the state of your app so the error doesn't happen again
      }}
    >
      {children}
    </ErrorBoundary>
  );
};

export default ErrorBoundaryHandler;
