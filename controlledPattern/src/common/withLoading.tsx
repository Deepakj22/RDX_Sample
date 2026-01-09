import "./spinner.css";

function withLoading(WrappedComponent: React.FC<any>) {
  return function WithLoading(props: any) {
    if (props.isLoading) {
      return (
        <div className="spinner-wrapper">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
}

export default withLoading;


