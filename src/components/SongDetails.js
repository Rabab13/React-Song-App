import React from 'react'
import {connect} from 'react-redux'

const SongDetails = ({song})=>{
    if(!song)
    {return <div>Select a song</div>}

    return (
        <div>
            <h2>Details For:</h2>
            <div>Titles: {song.title}</div>
            <div>Duration: {song.duration}</div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {song: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetails);