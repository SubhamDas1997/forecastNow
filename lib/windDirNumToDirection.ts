const windDirNumToDirection: {
    [key: number] : {
        label: string
    }
} = {
    1: {
        label: 'N'
    },
    2: {
        label: 'NNE'
    },
    3: {
        label: 'NE'
    },
    4: {
        label: 'ENE'
    },
    5: {
        label: 'E'
    },
    6: {
        label: 'ESE'
    },
    7: {
        label: 'SE'
    },
    8: {
        label: 'SSE'
    },
    9: {
        label: 'S'
    },
    10: {
        label: 'SSW'
    },
    11: {
        label: 'SW'
    },
    12: {
        label: 'WSW'
    },
    13: {
        label: 'W'
    },
    14: {
        label: 'WNW'
    },
    15: {
        label: 'NW'
    },
    16: {
        label: 'NNW'
    },
    17: {
        label: 'N'
    }
}

export default windDirNumToDirection