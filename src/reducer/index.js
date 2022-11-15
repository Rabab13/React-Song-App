import {combineReducers} from 'redux'

const songReducer = () =>{
    return [
        {title: 'Good bye', duration:'4:05'},
        {title: 'Hello', duration:'4:15'},
        {title: 'All stars', duration:'3:07'},
        {title: 'My love', duration:'5:10'},
        {title: 'World', duration:'2:03'},
    ]
}

const selectedSongReducer = (selectedSong = null, action) =>{
    if(action.type === 'SONG-SELECTED'){
        return action.payload
    }

    return selectedSong; 
}

//create a key of each reducer
export default combineReducers ({
    songs : songReducer,
    selectedSong : selectedSongReducer
})