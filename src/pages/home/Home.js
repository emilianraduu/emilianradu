import React from "react";
import Folder from "../../components/fileTypes/Folder";
import './home.scss'
import Pdf from "../../components/fileTypes/Pdf";

const Home = () => {
    return (
        <div className={'page'}>
            <div className={'header'}>
            <h2 className={'title'}>EMILIAN RADU</h2>
            </div>
            <div className={'content'}>
                <Folder text={'Contact'} pathname={'/contact'}/>
                <Folder text={'Links'} pathname={'/links'}/>
                <Folder text={'Projects'} pathname={'/projects'}/>
                <Pdf text={'Curriculum Vitae'} link={require('./home.scss')}/>
            </div>
        </div>
    )
}

export default Home