import React from "react";
import Back from "../../components/back/Back";
import OutsideLink from "../../components/fileTypes/OutsideLink";

const Links = () => {
    return (
        <div className={'page'}>
            <div className={'header'}>
                <Back/>
                <h2 className={'title'}>LINKS</h2>
            </div>
            <div className={'content'}>
                <OutsideLink text={'GitHub'} pathname={'https://github.com/emilianraduu'}/>
                <OutsideLink image={require('../../assets/icons/linkedin.png')} text={'LinkedIn'}
                             pathname={'https://www.linkedin.com/in/emilianraduu/'}/>
            </div>
        </div>
    )
}

export default Links