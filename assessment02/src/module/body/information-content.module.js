import React, { Component } from 'react';
import styles from '../../style/body/information-content.module.css';
import Button from 'react-bootstrap/Button';
import PlayImage from '../../play-button.png';
import StarImage from '../../star.png';
import SpeechImage from '../../speech-bubble.png';

class InformationContent extends Component {
    constructor(props){
        super(props);
        this.description = [
            'Lorem ipsum dolor sit amet, qui democritum ullamcorper voluptatibus et, et ipsum velit iracundia eum, cum partem corrumpit deterruisset ad. Et amet laoreet eos, summo putent urbanitas ut est, albucius platonem eu eam. Rationibus philosophia te mea, accusam efficiantur eum id. Eu purto assum apeirian pro, ubique quidam eirmod in mei, et sit reque propriae. Ne purto assentior duo.',
            'Per ubique efficiantur id. Vel te saperet postulant, et eum natum movet placerat. Ut mea invidunt phaedrum, sale fastidii suavitate sed te, sed ne deserunt inciderint. Malorum delenit posidonium ea cum, te nostro epicuri quo, mucius vocibus at vim. Eruditi accumsan ut per. An facilisis comprehensam mel, has hinc postea ex, vel elitr iudicabit posidonium eu.',
            'Vis an eripuit propriae insolens, te idque eligendi nominati per. Eu soleat platonem vim, ut qui feugiat tractatos reprehendunt. Ad dicant semper qui, mei alienum voluptaria et, lorem graece referrentur mei an. Vis probo facer in, oratio omittantur eum at, libris accusata nominati te eos. Velit regione delenit sea id.',
            'Saepe dolore imperdiet ut eam. Vim cu veniam sapientem, numquam offendit prodesset eum te. Solum percipit ea sea, postulant repudiare vis ad. Nec at dolore mediocritatem. Molestie ullamcorper cum cu. Ignota maiorum eu cum, mea an animal alienum, libris iisque facilisi cum no.',
            'Ei dolore cetero oportere vel. Illud maluisset per an, volumus pertinax id vim, labores splendide torquatos ius ex. Cum etiam vocibus ne, ei diam bonorum mel. Sea imperdiet efficiendi ei, quem audire cotidieque quo id, mei in saepe vocent dissentiet. Te quo homero dolore scripserit.'
        ]
        this.contents = [
            { text: 'บทนำ', type: 'header' },
            { text: 'แนะนำคอร์สออนไลน์', type: 'content' },
            { text: 'ความสำคัญของ Design Thinking', type: 'header' },
            { text: '01. อะไรคือ Design Thinking?', type: 'content' },
            { text: '02. ความแตกต่างของ Design Thinking กับกระบวนการคิดรูปแบบอื่น', type: 'content' },
            { text: '03. ความเป็นมาของ Design Thinking', type: 'content' },
            { text: 'องค์ประกอบของ Design Thinking', type: 'header' },
            { text: '04. ขั้นตอนของกระบวนการคิดเชิงออกแบบ: (Design Thinking Process) - Heart / Head / Hand', type: 'content' },
            { text: 'วิธีการตั้งโจทย์ Design Thinking', type: 'header' },
            { text: '05. การกำหนดและหาโจทย์ Design Thinking', type: 'content' },
        ]
        this.personDetails = [
            'กรรมการผู้จัดการและผู้ร่วมก่อตั้ง Asian Leadership Academy / LUKKID',
            'ที่ปรึกษาเรื่องการคิดเชิงออกแบบ (Design Thinking) ให้กับบริษัทชั้นนำของประเทศไทย',
            'หัวหน้าทีมคิดเชิงออกแบบที่ Hasso Plattner Institute of Design ที่ Stanford (d.school)',
            'จบการศึกษาปริญญาโทสาขา MBA จาก Stanford Graduate School of Business',
            'จบการศึกษาปริญญาตรีสาขา Bioengineering จาก University of Pennsylvania'
        ]
        this.universityDetails = [
            'สถาบันวิชาการชั้นนำของเอเชีย ที่ได้มาตรฐานสากลในการผลิตบัณฑิต การสร้างองค์ความรู้ และการแก้ปัญหาต่าง ๆ',
            'ยึดมั่นในคุณธรรมและการรับใช้ประชาชน ดังคำขวัญของมหาวิทยาลัยที่กล่าวว่า เป็นเลิศ เป็นธรรม ร่วมนำสังคม'
        ]
        this.state = {
            isExpend: false
        }
    }
    render() {
        return <div className={styles['information-container']}>
            <div className={styles['information-main-item']}>
                <div style={{display: 'flex', borderBottom: '1px solid #7B7B7B'}}>
                    <div style={{borderBottom: '5px solid #00532a'}} className={styles['information-container-nav-bar']}>รายละเอียด</div>
                    <div className={styles['information-container-nav-bar-inactive']}>วิธีการชำระเงิน</div>
                    <div className={styles['information-container-nav-bar-inactive']}>ห้องสนทนา</div>
                    <div className={styles['information-container-nav-bar-inactive']}>รีวิว</div>
                </div>
                <div>
                    <div style={{ 'max-height': this.state.isExpend ? '25rem' : '5rem', 'overflow-y': 'hidden' }}>
                        {this.description.map(text => {
                            return <p style={{textAlign: 'left'}}>{text}</p>
                        })}
                    </div>
                    <div>
                        <Button onClick={this.Expaned} variant="link">{ this.state.isExpend ? 'ซ่อน' : 'อ่านทั้งหมด'}</Button>
                    </div>
                </div>
                <div>
                    <p style={{textAlign: 'left', marginBottom: '0px'}}>เนื้อหาของคอร์สนี้</p>
                    <div className={styles['information-content-container']}>
                        {this.contents.map((content => {
                            return <div className={content.type === 'header' ? styles['information-content-header'] : styles['information-content-item']}>{content.text}</div>
                        }))}
                    </div>
                </div>
            </div>
            <div className={styles['information-techer-item']}>
                <div style={{display: 'flex', borderBottom: '1px solid #7B7B7B'}}>
                    <div className={styles['information-container-nav-bar']}>ผู้สอน</div>
                </div>
                <div>
                    <PersonDetail image='https://resource.skilllane.com/users/images/001/162/361/ms/Untitled.png?1566569677'
                        name='เมษ์ ศรีพัฒนาสกุล'
                        points='4.7'
                        review='656'
                        course='1'
                        details={this.personDetails}
                    />
                    <PersonDetail image='https://resource.skilllane.com/users/images/001/149/067/ms/1200px-Emblem_of_Thammasat_University.svg.png?1565079967'
                        name='มหาวิทยาลัยธรรมศาสตร์'
                        points='4.7'
                        review='3,881'
                        course='40'
                        details={this.universityDetails}
                    />
                </div>
            </div>
        </div>
    }
    Expaned = () => {
        this.setState({
            isExpend: !this.state.isExpend
        });
    }
}

const PersonDetail = (props) => {
    return <div style={{borderBottom: '1px solid #7B7B7B', marginBottom: '10px'}}>
        <div style={{display: 'flex'}}>
            <img width="90" height="90" src={props.image} alt={props.name}/>
            <div>
                <p style={{marginBottom: '0px', color: '#00532a'}}>{props.name}</p>
                <span style={{display: 'flex'}}>
                    <img width="15" height="15" src={StarImage} alt='points'/>
                    <p className={styles['p-detail']}>{props.points + 'คะแนนเฉลี่ย'}</p>
                </span>
                <span  style={{display: 'flex'}}>
                    <img width="15" height="15" src={SpeechImage} alt='review'/>
                    <p className={styles['p-detail']}>{props.review + 'รีวิว'}</p>
                </span>
                <span  style={{display: 'flex'}}>
                    <img width="15" height="15" src={PlayImage} alt='course'/>
                    <p className={styles['p-detail']}>{props.course + 'คอร์ส'}</p>
                </span>
            </div>
        </div>
        <div>
            <ul>
                {props.details.map(detail => {
                    return <li className={styles['p-detail']}>{detail}</li>
                })}
            </ul>
        </div>
    </div>
}

export default InformationContent;