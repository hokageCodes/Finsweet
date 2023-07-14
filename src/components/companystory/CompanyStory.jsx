import Group from '../../assets/Group.png'
import './companystory.css'
export default function CStory() {
    return (
        <div className="story__container">
                <div className="story__left">
                    <div className="blue__box"></div>
                    <div className="story">
                        <h4>Our Story</h4>
                        <span>👇</span>
                    </div>
                    <h2>From Startups to Titans of Industry</h2>
                    <p>Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense of gay produce excited perceived do an a china mean its so ye when in explained Hearts am next over match mr partiality not shoud latter thus as out no passed forming middleton exercise up</p>
                </div>
                <div className="story__right">
                    <div className="group1">
                        <div className="group-1">
                            <p className='numbers'>1560+</p>
                            <img src={Group} alt='' />
                            <p className='text'>Projet Delivered</p>
                        </div>
                        <div className="group-2">
                            <p className='numbers'>950+</p>
                            <img src={Group} alt='' />
                            <p className='text'>Happy Client</p>
                        </div>
                    </div>
                    <div className="group2">
                        <div className="group-3">
                            <p className='numbers'>100+</p>
                            <img src={Group} alt='' />
                            <p className='text'>professional</p>
                        </div>
                    <div className="group-4">
                        <p className='numbers'>10 yrs</p>
                        <img src={Group} alt='' />
                        <p className='text'>Experience</p>
                    </div>
                    </div>
                </div>
            </div>
    )
}
