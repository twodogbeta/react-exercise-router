import React from "react";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div>
                <h1>This is a beautiful Home Page.</h1>
                <h1>And the url is '/'</h1>
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;