import React, { Component } from 'react';
import styles from '../../style/body/preview-content.module.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Check from '../../check.png'
import Cross from '../../cancel.png'
import PreviewImage from '../../image.jpg'

class PreviewContent extends Component {
    constructor(props){
        super(props);
        this.withoutCredit = [
            { text: 'สามารถเรียนที่ไหน เมื่อไหร่ก็ได้ตลอดชีพ', isCheck: true },
            { text: 'เนื้อหาทั้งหมด 40 วิดีโอ ความยาวรวมกัน 7 ชั่วโมง 46 นาที', isCheck: true },
            { text: 'เอกสารประกอบ', isCheck: true },
            { text: 'แบบทดสอบทั้งหมด 4 แบบทดสอบ', isCheck: false },
            { text: 'ข้อสอบทั้งหมด 1 ข้อสอบ', isCheck: false },
            { text: 'เก็บหน่วยกิตเรียนปริญญาโท', isCheck: false },
            { text: 'ประกาศนียบัตร', isCheck: false },
        ]
        this.withCredit = [
            { text: 'สามารถเรียนที่ไหน เมื่อไหร่ก็ได้ตลอดชีพ', isCheck: true },
            { text: 'เนื้อหาทั้งหมด 40 วิดีโอ ความยาวรวมกัน 7 ชั่วโมง 46 นาที', isCheck: true },
            { text: 'เอกสารประกอบ', isCheck: true },
            { text: 'แบบทดสอบทั้งหมด 4 แบบทดสอบ', isCheck: true },
            { text: 'ข้อสอบทั้งหมด 1 ข้อสอบ', isCheck: true },
            { text: 'เก็บหน่วยกิตเรียนปริญญาโท', isCheck: true },
            { text: 'ประกาศนียบัตร', isCheck: true },
        ]
    }
    render() {
        return <div className={styles['preview-container']}>
            <PreviewImages></PreviewImages>
            <BoxData active={false} data={this.withoutCredit}/>
            <BoxData active={true} data={this.withCredit}/>
        </div>
    }
}

const PreviewImages = (props) => {
    return <div className={styles['preview-image']}>
        <img alt='preview' src={PreviewImage} width="555" height="312"></img>
    </div>
}

const BoxData = (props) => {
    return <Card border={props.active ? 'success': 'secondary'} style={{ width: '18rem', 'margin-right': '2rem' }}>
                <Card.Body>
                    <Card.Title>1500 บาท</Card.Title>
                    <Button style={{ marginBottom: '10px' }} variant={props.active ? 'success': 'secondary'}>{props.active ? 'ชำระเงินเรียนเก็บหน่วยกิต': 'ชำระเงินเรียนไม่เก็บหน่วยกิต'}</Button>
                    {props.data.map((value) => {
                        return <Card.Text style={{ 'font-size': '12px', padding: '0', margin: '0' }}>
                                    <div style={{ 'display': 'flex' }}>
                                        <img style={{ 'marginTop': '4px', 'marginRight': '5px' }} alt='isCheck' src={value.isCheck ? Check : Cross} width="12" height="12"></img>
                                        <p style={{ 'textAlign': 'left' }}>{value.text}</p>
                                    </div>
                                </Card.Text>
                    })}
                    
                </Card.Body>
            </Card>
}

export default PreviewContent;