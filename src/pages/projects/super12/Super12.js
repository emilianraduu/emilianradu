import React from "react";
import Back from "../../../components/back/Back";
import Gallery from "../../../components/gallery/Gallery";
import AppLink from "../../../components/fileTypes/AppLink";

const images = [
    require('../../../assets/s12/app.PNG'),
    require('../../../assets/s12/details.PNG'),
    require('../../../assets/s12/friend.PNG'),
    require('../../../assets/s12/hamb.PNG'),
    require('../../../assets/s12/home.PNG'),
    require('../../../assets/s12/predictions.PNG'),
]

const Super12 = () => {
    return (
        <div className={'page'}>
            <div className={'header'}>
                <Back/>
                <h2 className={'title'}>SUPER12</h2>
            </div>
            <div className={'content'}>
                <Gallery images={images}/>
                <div className={'footer'}>
                    <AppLink
                        pathname={'https://apps.apple.com/ro/app/super12/id1506179719?l=ro'}
                        image={require('../../../assets/icons/app_store.png')}/>
                    <AppLink
                        pathname={'https://play.google.com/store/apps/details?id=com.super12&hl=ro&gl=US'}
                        image={require('../../../assets/icons/play_store.png')}/>
                </div>
            </div>
        </div>
    )
}

export default Super12