import React from "react";
import Folder from "../../components/fileTypes/Folder";
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
                <Folder text={'Super12'} pathname={'/projects/super12'}/>
                <Folder text={'Intern Project'} pathname={'/projects/super12'}/>
            </div>
        </div>
    )
}

export default Projects