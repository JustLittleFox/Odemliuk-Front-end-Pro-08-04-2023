import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import first from '../images/first.jpg';
import second from '../images/second.jpg';
import third from '../images/third.jpg';

const ImageSlider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const images = [first, second, third];

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {images.map((image, idx) => (
                <Carousel.Item key={idx}>
                    <img
                        className="w-150 slide-img"
                        src={image}
                        alt={`Slide ${idx}`}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default ImageSlider;
