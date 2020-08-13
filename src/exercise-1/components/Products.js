import React from "react";
import {Link} from "react-router-dom";

class Products extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div>
                <h3>All Products: </h3>
                <ul>
                    <li><Link to='/products/1'>Bicycle</Link></li>
                    <li><Link to='/products/2'>TV</Link></li>
                    <li><Link to='/products/3'>Pencil</Link></li>
                </ul>
            </div>
        );
    }
}

Products.propTypes = {};

export default Products;