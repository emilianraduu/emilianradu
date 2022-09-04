import React from "react";
import Back from "../../../components/back/Back";
import Gallery from "../../../components/gallery/Gallery";
import AppLink from "../../../components/fileTypes/AppLink";

const images = [
    require('../../../assets/summer/quote.png'),
    require('../../../assets/summer/quote_details.png'),
    require('../../../assets/summer/quote_search.png'),
    require('../../../assets/summer/set_avatar.png'),
    require('../../../assets/summer/avatars.png'),
    require('../../../assets/summer/messaging.png'),
    require('../../../assets/summer/musica.png'),
    require('../../../assets/summer/details_music.png'),
    require('../../../assets/summer/movies.png'),
    require('../../../assets/summer/details_movies.png'),
    require('../../../assets/summer/profile.png'),
]

const Intern = () => {
    return (
        <div className={'page'}>
            <div className={'header'}>
                <Back/>
                <h2 className={'title'}>INTERNS PROJECT</h2>
            </div>
            <div className={'content'}>
                <Gallery images={images}/>
                <div className={'footer'}>
                    <AppLink
                        pathname={'https://mega.nz/file/ZR1TjDhJ#2Z7yKi-IugV3ePB2cfwbdsaMla011tzZlhBh0rnIklo'}
                        image={require('../../../assets/icons/play_store.png')}/>
                    <AppLink
                        pathname={'https://github.com/Stellar-Intern-Programme/SWGMMMA'}
                        image={require('../../../assets/icons/ghbutton.png')}/>
                </div>
            </div>
        </div>
    )
}

export default Intern