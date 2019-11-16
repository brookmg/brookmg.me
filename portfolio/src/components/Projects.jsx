import React, {Component} from 'react'
import ProjectItem from './ProjectItem.jsx'
import NewsIcon from '../img/news.png'

class Projects extends Component {

    render() {
        return (
            <section className="hero">
                <div className="container">
                    <div className="hero-body section projects" style={{width: `100%`}}>
                        <h1 className="has-text-black is-size-4"><b> Projects </b></h1>
                        <div className="columns is-centered">

                            <ProjectItem
                                projectName="Kuwas"
                                projectDescription="A sport app designed for Ethiopian premier league. Currently available in the google playstore."
                                projectImage={NewsIcon}
                                projectLink="https://play.google.com/store/apps/details?id=app.kuwas.android"
                                projectPlacement="Google Play"
                            />

                            <ProjectItem
                                projectName="Kuwas"
                                projectDescription="A sport app designed for Ethiopian premier league. Currently available in the google playstore."
                                projectImage={NewsIcon}
                                projectLink="https://play.google.com/store/apps/details?id=app.kuwas.android"
                                projectPlacement="Google Play"
                            />

                            <ProjectItem
                                projectName="Kuwas"
                                projectDescription="A sport app designed for Ethiopian premier league. Currently available in the google playstore."
                                projectImage={NewsIcon}
                                projectLink="https://play.google.com/store/apps/details?id=app.kuwas.android"
                                projectPlacement="Google Play"
                            />

                            <ProjectItem
                                projectName="Kuwas"
                                projectDescription="A sport app designed for Ethiopian premier league. Currently available in the google playstore."
                                projectImage={NewsIcon}
                                projectLink="https://play.google.com/store/apps/details?id=app.kuwas.android"
                                projectPlacement="Google Play"
                            />

                        </div>
                    </div>
                </div>
            </section>
        );
    }

}

export default Projects;