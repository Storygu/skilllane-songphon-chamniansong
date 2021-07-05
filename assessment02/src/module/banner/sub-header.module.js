import React, { Component } from 'react';
import styles from '../../style/banner/banner.module.css';

class SubHeader extends Component {
    render() {
        return <div className={styles['banner-course-detail-sub-header']}>
            <span className={styles['academic-icon']}><img src="https://resource.skilllane.com/tu/icon-tuxsa.png" alt='tuxsa'></img></span>
            {this.props.message}
        </div>
    }
}

export default SubHeader;