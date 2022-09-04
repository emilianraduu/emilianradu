import React from "react";
import RouteLink from "../../components/fileTypes/RouteLink";
import './projects.scss'
import Back from "../../components/back/Back";
import Pdf from "../../components/fileTypes/Pdf";

const Projects = () => {
    return (
        <div className={'page'}>
            <div className={'header'}>
                <Back/>
                <h2 className={'title'}>PROJECTS</h2>
            </div>
            <div className={'content'}>
                <RouteLink text={'Super12'} pathname={'/projects/super12'}/>
                <RouteLink text={'Interns Project'} pathname={'/projects/intern'}/>
                <RouteLink text={`Bachelor's Thesis`} pathname={'/projects/bachelors'}/>
                <Pdf text={'Thesis'} link={require('../../assets/Licenta.pdf')}/>
            </div>
        </div>
    )
}

export default Projects