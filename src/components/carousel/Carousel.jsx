import { useState } from 'react';
import './carousel.css';
import Vertical from '../../assets/vertical.png'


const data = [
  {
    id: 1,
    title: 'Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!',
    avatar: 'https://i.ibb.co/8DZH8KJ/avatar1.png',
    name: 'John Doe',
    position: 'Director, Company',
    companyLogo: 'https://i.ibb.co/tMrJFTX/Logo.png',
},
{
    id: 2,
    title: 'Working with Finsweet has been an absolute pleasure. I have been a loyal customer for several months, and every interaction has been consistently positive.',
    avatar: 'https://i.ibb.co/bWCYLQL/avatar2.png',
    name: 'Jane Smith',
    position: 'Marketer, Company',
    companyLogo: 'https://i.ibb.co/tMrJFTX/Logo.png',
},
{
    id: 3,
    title: 'I highly recommend Finsweet as a business partner. I have been using their services for a few months and have had an excellent experience.',
    avatar: 'https://i.ibb.co/ykBF7nW/avatar.png',
    name: 'Christopher Wallace',
    position: 'Sales, Field',
    companyLogo: 'https://i.ibb.co/tMrJFTX/Logo.png',
  },
];

const CardCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <div className="card-carousel">
            <img src={Vertical} alt="" />
            <div className="card-carousel__content">
            <div className="card-carousel__card">
                <h2 className="card-carousel__title">{data[activeIndex].title}</h2>
                <div className="card-carousel__info">
                <div className="card-carousel__avatar">
                    <img src={data[activeIndex].avatar} alt="avatar" />
                    <div className="avatar___deets">
                    <div className="card-carousel__name">{data[activeIndex].name}</div>
                    <div className="card-carousel__position">{data[activeIndex].    position}</div>
                    </div>
                </div>
                </div>
                
            </div>
            </div>
        </div>
        <div className="card-carousel__dots">
        {data.map((item, index) => (
            <span
            key={item.id}
            className={`card-carousel__dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
            ></span>
        ))}
    </div>
        </>
    );
};


export default CardCarousel;
