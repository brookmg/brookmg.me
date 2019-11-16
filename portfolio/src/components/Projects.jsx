import React, {Component} from 'react'
import ProjectItem from './ProjectItem.jsx'
import Kuwas from '../img/Kuwas.jpg'

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
                                projectImage={Kuwas}
                                projectLink="https://play.google.com/store/apps/details?id=app.kuwas.android"
                                projectPlacement="Google Play"
                            />

                            <ProjectItem
                                projectName="Hulu Radio"
                                projectDescription="A radio app designed for Ethiopian people. Contains mostly stations from local broadcasters"
                                projectImage={Kuwas}
                                projectLink="https://play.google.com/store/apps/details?id=app.huluradio.android"
                                projectPlacement="Google Play"
                            />

                            <ProjectItem
                                projectName="Azemari"
                                projectDescription="A music streaming app that aggregates content from varies well known music publishers in Ethiopia. Not available on Google play but working other distribution methods"
                                projectImage={Kuwas}
                                projectLink="https://play.google.com/store/apps/details?id=app.kuwas.android"
                                projectPlacement="Google Play"
                            />

                            <ProjectItem
                                projectName="Kuwas"
                                projectDescription="A sport app designed for Ethiopian premier league. Currently available in the google playstore."
                                projectImage={Kuwas}
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