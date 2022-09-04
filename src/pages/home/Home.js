import React from "react";
import RouteLink from "../../components/fileTypes/RouteLink";
import Pdf from "../../components/fileTypes/Pdf";

const Home = () => {
    return (
        <div className={'page'}>
            <div className={'header'}>
            <h2 className={'title'}>EMILIAN RADU</h2>
            </div>
            <div className={'content'}>
                <RouteLink text={'Contact'} pathname={'/contact'}/>
                <RouteLink text={'Links'} pathname={'/links'}/>
                <RouteLink text={'Projects'} pathname={'/projects'}/>
                <Pdf text={'C.V.'} link={require('../../assets/Licenta.pdf')}/>
            </div>
        </div>
    )
}

export default Home