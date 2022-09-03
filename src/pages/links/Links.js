import React from "react";
import Folder from "../../components/fileTypes/Folder";
import Back from "../../components/back/Back";

const Links = () => {
    return (
        <div className={'page'}>
            <div className={'header'}>
                <Back/>
                <h2 className={'title'}>LINKS</h2>
            </div>
            <div className={'content'}>
                <Folder text={'Github'} pathname={'/contact'}/>
                <Folder text={'Linkedin'} pathname={'/links'}/>
            </div>
        </div>
    )
}

export default Links