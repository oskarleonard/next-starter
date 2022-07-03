import React, { PureComponent } from 'react';
import classNames from 'classnames';
import Link from 'components/atoms/link/Link';
import styles from './errorBoundary.module.css';

class ErrorBoundary extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
    });

    console.error('ErrorBoundary error ===== ', error);
    console.error('ErrorBoundary info ===== ', info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.boundary}>
          <div className={styles.content}>
            <h1 className={classNames()}>PAGE 500</h1>
            <h4 className={classNames()}>Woops!</h4>
            <p className={classNames()}>
              Something went wrong, please try again
            </p>
            <p className={classNames()}>or</p>
            <Link href={process.env.APP_URL}>
              <a target={'_self'}>Go to the start page</a>
            </Link>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
