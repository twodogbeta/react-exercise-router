import React from "react";

class ProductItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                "bicycle": {
                    "id": 1,
                    "name": "Bicycle",
                    "price": 30,
                    "quantity": 15,
                    "desc": "Bicycle is Good"
                },
                "TV": {
                    "id": 2,
                    "name": "TV",
                    "price": 40,
                    "quantity": 16,
                    "desc": "TV is good"
                },
                "pencil": {
                    "id": 3,
                    "name": "Pencil",
                    "price": 50,
                    "quantity": 17,
                    "desc": "Pencil is good"
                }
            },
            currentData: {}
        };
    }

    componentDidMount() {
        this.setState(() => {
            console.log(this.state.data)
            for (const [key, value] of Object.entries(this.state.data)) {
                console.log(value)
                if (value.id == this.props.match.params.id) {
                    console.log(value)
                    return {currentData: value};
                }
            }
            return null;
        })
    }

    render() {
        return (
            <div>
                <h3>name: {this.state.currentData.name}</h3>
                <h3>id: {this.state.currentData.id}</h3>
                <h3>price: {this.state.currentData.price}</h3>
                <h3>quantity: {this.state.currentData.quantity}</h3>
                <h3>description: {this.state.currentData.desc}</h3>
            </div>
        );
    }
}

ProductItem.propTypes = {};

export default ProductItem;