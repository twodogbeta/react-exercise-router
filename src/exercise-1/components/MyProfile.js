import React from "react";

class MyProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div>
                <h3>Username: Chen Sicong</h3>
                <h3>Gender: Male</h3>
                <h3>Work: IT</h3>
                <h3>Website: '/my-profile'</h3>
            </div>
        );
    }
}

MyProfile.propTypes = {};

export default MyProfile;