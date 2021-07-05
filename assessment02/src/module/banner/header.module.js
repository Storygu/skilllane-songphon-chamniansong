import React, { Component } from 'react';
import styles from '../../style/banner/banner.module.css';

class Header extends Component {
    render() {
        return <div className={styles['banner-course-detail-header']}>
            <h1>{this.props.message}</h1>
        </div>
    }
}

export default Header;