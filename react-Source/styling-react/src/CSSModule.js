import styles from './CSSModule.module.css';
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const CSSModule = () => {
    return (
            <div className={cx('wrapper', 'inverted')} align='center'>
        {/* // <div className={`${styles.wrapper} ${styles.inverted}`} align="center" > */}
            안냐세요, 저는<span className='something'>CSS Module!</span>
            
        </div>
    );
};

export default CSSModule;