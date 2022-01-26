import React from "react"
import EventsBtm from "./EventsPageBtm"

const EventsBottomArray = [
    {
        id: 1,
        desc: "Option 1",
        img: "https://placeimg.com/640/480/nature"
    },
    {
        id: 2,
        desc: "Option 2",
        img: "https://placeimg.com/640/480/nature"
    },
    {
        id: 3,
        desc: "Option 3",
        img: "https://placeimg.com/640/480/nature"
    }
]

const EventsPageContent = () => {
    return (
        <div className="events-bottom-grid grid">
            {
                EventsBottomArray.map(content => {
                    return(
                        <div className="bg-white" style={{"text-align": "center"}}>
                            <EventsBtm key={content.id} {...content}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default EventsPageContent;