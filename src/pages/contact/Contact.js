import React from "react";
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
                <OutsideLink text={'Phone'} image={require('../../assets/icons/phone.png')} pathname={'tel:40757595727'}/>
                <OutsideLink  text={'Email'}
                             pathname={'mailto:emilianraduu@gmail.com'}
                             image={require('../../assets/icons/email.png')}/>
            </div>
        </div>
    )
}

export default Contact