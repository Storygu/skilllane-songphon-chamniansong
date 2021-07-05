import React, { Component } from 'react';
import styles from '../../style/banner/banner.module.css';
import SubHeader from './sub-header.module';
import Header from './header.module';
import Rating from '@material-ui/lab/Rating';

class Banner extends Component {
  render() {
    return <div className={styles['banner-background']}>
      <div className={styles['banner-container']}>
        <SubHeader message='หลักสูตรปริญญาโทออนไลน์'/>
        <Header message='Design Thinking กระบวนการคิดเชิงออกแบบ'/>
        <Degree message='ปริญญาโทบริหารธุรกิจ สาขา Business Innovation'/>
        <Review value={4.7} message='4.7 (656 รีวิว)' />
      </div>
    </div>
  }
}

const Review = (props) => {
  return <div className={styles['review-detail']}>
    <Rating readOnly name='rating-star' value={props.value} precision={0.1}/>
    <h3 style={{fontSize: '20px', textAlign: 'center', color: '#555'}}>{props.message}</h3>
  </div>
  
}

const Degree = (props) => {
  return <p className={styles['btn-degree']}>{props.message}</p>
}

export default Banner;