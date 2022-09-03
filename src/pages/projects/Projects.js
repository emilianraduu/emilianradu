import React from "react";
import RouteLink from "../../components/fileTypes/RouteLink";
import './projects.scss'
import Back from "../../components/back/Back";

const Projects = () => {
    return (
        <div className={'page'}>
            <div className={'header'}>
                <Back/>
                <h2 className={'title'}>PROJECTS</h2>
            </div>
            <div className={'content'}>
                <RouteLink text={'Super12'} pathname={'/projects/super12'}/>
                <RouteLink text={'Interns'} pathname={'/projects/intern'}/>
                <RouteLink text={'Bachelors'} pathname={'/projects/bachelors'}/>
            </div>
        </div>
    )
}

export default Projects