function meeting(rooms){
    const idxSpareRoom = rooms.indexOf('O')
    return idxSpareRoom >= 0 ? idxSpareRoom : 'None available!'
}