import PropTypes from 'prop-types';
import styles from './Container.module.css';

function Container({ customClass, children }) {
    return (
        <div className={`${styles.container} ${customClass ? styles[customClass] : ''}`}>
            {children}
        </div>
    );
}

Container.propTypes = {
    customClass: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default Container;
