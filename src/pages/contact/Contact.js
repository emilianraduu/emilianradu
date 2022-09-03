import React from "react";
import RouteLink from "../../components/fileTypes/RouteLink";
import Back from "../../components/back/Back";
import OutsideLink from "../../components/fileTypes/OutsideLink";

const Contact = () => {
    return (
        <div className={'page'}>
            <div className={'header'}>
                <Back/>
                <h2 className={'title'}>CONTACT</h2>
            </div>
            <div className={'content'}>
                <OutsideLink text={'Phone'} image={require('../../assets/icons/phone.png')} pathname={'/contact'}/>
                <RouteLink text={'Email'} pathname={'/links'}/>
            </div>
        </div>
    )
}

export default Contact