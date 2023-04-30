import { useState } from 'react';
import './carousel.css';
import Vertical from '../../assets/vertical.png'


const data = [
  {
    id: 1,
    title: 'Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!',
    avatar: 'https://i.ibb.co/8DZH8KJ/avatar1.png',
    name: 'Name 1',
    position: 'Director, Company',
    companyLogo: '../../assets/Logo.png',
},
{
    id: 2,
    title: 'Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!',
    avatar: 'https://i.ibb.co/bWCYLQL/avatar2.png',
    name: 'Name 2',
    position: 'Marketer, Company',
    companyLogo: '../../assets/Logo.png',
},
{
    id: 3,
    title: 'Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!',
    avatar: 'https://i.ibb.co/ykBF7nW/avatar.png',
    name: 'Name 3',
    position: 'Sales, Field',
    companyLogo: '../../assets/Logo.png',
  },
];

const CardCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="card-carousel">
        <img src={Vertical} alt="" />
        <div className="card-carousel__content">
            <h2 className="card-carousel__title">{data[activeIndex].title}</h2>
            <div className="card-carousel__info">
            <div className="card-carousel__avatar">
                <img src={data[activeIndex].avatar} alt="avatar" />
                <div className="avatar___deets">
                    <div className="card-carousel__name">{data[activeIndex].name}</div>
                    <div className="card-carousel__position">{data[activeIndex].position}</div>
                </div>
                <div className="card-carousel__company">
                    <img src={data[activeIndex].companyLogo} alt="company logo" />
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
        </div>
    </div>
  );
};

export default CardCarousel;
