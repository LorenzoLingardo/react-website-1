import React from 'react'
import { Carousel } from 'react-bootstrap'

const EventCarousel = ({event}) => {
    console.log(event);
    return (
        <div className="events-main grid">
            {
                <Carousel className='events-carousel' interval={10000}>{
                    event.eventImg.map(imgURL => {
                        return(
                                <Carousel.Item key={imgURL}>
                                    <img 
                                        src={imgURL} 
                                        className='events-img'
                                        alt="" 
                                    />
                                </Carousel.Item>
                        )
                    })
                }
                </Carousel>
            }
        </div>
    )
}

export default EventCarousel;