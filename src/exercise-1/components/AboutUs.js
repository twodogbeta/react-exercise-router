import React from "react";
import {Link} from "react-router-dom";

class AboutUs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div>
                <h1>Company: ThoughtWorks Local</h1>
                <h1>Location: Shenzhen</h1>
                <h1>For more information, please</h1>
                <h1>view our <Link to='/'>website</Link>.</h1>
            </div>
        );
    }
}

AboutUs.propTypes = {};

export default AboutUs;