import React from "react";
import Back from "../../../components/back/Back";
import Gallery from "../../../components/gallery/Gallery";
import AppLink from "../../../components/fileTypes/AppLink";

const images = [
    require('../../../assets/licenta/friends.png'),
    require('../../../assets/licenta/kustubg.png'),
    require('../../../assets/licenta/list.png'),
    require('../../../assets/licenta/map.png'),
    require('../../../assets/licenta/mail.png'),
    require('../../../assets/licenta/notification.png'),
    require('../../../assets/licenta/reservation.png'),
    require('../../../assets/licenta/reviews.png'),
]

const Bachelors = () => {
    return(
        <div className={'page'}>
            <div className={'header'}>
                <Back/>
                <h2 className={'title'}>BACHELOR'S THESIS</h2>
            </div>
            <div className={'content'}>
                <Gallery images={images}/>
                <div className={'footer'}>
                    <AppLink
                        pathname={'https://github.com/emilianraduu/meetup'}
                        image={require('../../../assets/icons/ghbutton.png')}/>
                </div>
            </div>
        </div>
    )
}

export default Bachelors