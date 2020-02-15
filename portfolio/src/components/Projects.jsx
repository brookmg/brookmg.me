import React, {Component} from 'react'
import ProjectItem from './ProjectItem.jsx'
import Kuwas from '../img/Kuwas.png'
import Azemari from '../img/Azemari.png'
import Hulu from '../img/Hulu.png'
import Flick from '../img/Flick.png'

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
                                projectStatus="Active"
                                projectLink="https://play.google.com/store/apps/details?id=app.kuwas.android"
                                projectPlacement="Google Play"
                            />

                            <ProjectItem
                                projectName="Azemari"
                                projectStatus="Coming Soon"
                                projectDescription="A music streaming app that aggregates content from varies well known music publishers in Ethiopia. Not available on Google play but working other distribution methods"
                                projectImage={Azemari}
                            />

                            <ProjectItem
                                projectName="Hulu Radio"
                                projectStatus="Active"
                                projectDescription="A radio app designed for Ethiopian people. Contains mostly stations from local broadcasters"
                                projectImage={Hulu}
                                projectLink="https://play.google.com/store/apps/details?id=app.huluradio.android"
                                projectPlacement="Google Play"
                            />


                            <ProjectItem
                                projectName="Flick"
                                projectStatus="Paused"
                                projectDescription="Lead dev on an app designed for providing cinema schedule for foreign movies in around Addis Abeba, Ethiopia."
                                projectImage={Flick}
                                projectLink="https://play.google.com/store/apps/details?id=com.mnettechnology.flick"
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