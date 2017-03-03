import React, { Component } from 'react';
import { connect } from 'react-redux'

import Item from './Item'

class List extends Component {
    render() {
        const { songs } = this.props

        return (
            <ul>
                {
                    songs.map(song => (
                        <Item key={ song.id } song={ song } />
                    ))
                }
            </ul>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        songs: store.songs
    }
}

export default connect(mapStateToProps)(List);