import React from "react";
import Folder from "../../components/fileTypes/Folder";
import Back from "../../components/back/Back";

const Contact = () => {
    return (
        <div className={'page'}>
            <div className={'header'}>
                <Back/>
                <h2 className={'title'}>CONTACT</h2>
            </div>
            <div className={'content'}>
                <Folder text={'Phone'} pathname={'/contact'}/>
                <Folder text={'Email'} pathname={'/links'}/>
            </div>
        </div>
    )
}

export default Contact