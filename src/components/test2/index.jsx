import React, {Component} from 'react';
import './index.scss';

export default class Test2 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }

    render() {
        return (
            <div className='test2'>
                <h2>some title</h2>
                <img src={require("../../images/pexels.jpeg")} alt="abcd" />
            </div>
        );
    }
}

