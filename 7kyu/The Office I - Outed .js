function outed(meet, boss){

    const happinessTeamRating = Object.values(meet).reduce((a,b) => (a + b) , 0) + (meet[boss])
    return happinessTeamRating / Object.values(meet).length > 5
        ? 'Nice Work Champ!'
        : 'Get Out Now!'
}