import React, { Component } from 'react';

import Photo from './Photo'
import Infos from './Infos'

class Cover extends Component {
    render() {
        return (
            <div className="cover">
                <Photo />
                <Infos />
            </div>
        );
    }
}

export default Cover;