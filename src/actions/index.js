//Action creators 
export const selectSong = song =>{
    //return an action
    return {
        type: 'SONG-SELECTED',
        payload: song
    }
}