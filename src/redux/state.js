import StartApp from '../index';

let state = {
    nav: [{
            linkName: 'Home',
            link: '/'
        },
        {
            linkName: 'About',
            link: '/about'
        },
        {
            linkName: 'Contacts',
            link: '/contacts'
        }
    ],
    main: {
        title: 'Text Title',
        subtitle: 'Text sub title',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid fugiat possimus fuga, quisquam autem accusam     tempora cupiditate nihil, vero corrupti amet deserunt atque sunt! Non sequi temporibus excepturi saepe odio!'
    },
    googleData: [],
    dataBaseLink: 'https://spreadsheets.google.com/feeds/list/1rmjMVuj1tmp1K35vbPWC7UXadsP4C8vgxRvRECJw2Yk/od6/public/values?alt=json'
}

export let fetchData = (link) => {
    fetch(`${link}`)
        .then(googleTableData => {
            return googleTableData.json();
        })
        .then(googleTableData => {
            googleTableData = googleTableData["feed"]["entry"];
            arrayHelper(googleTableData);
        })
}

const arrayHelper = (googleTableData) => {
    let out = []
    googleTableData.forEach((data, i) => {
        let tempData = [];
        tempData['id'] = data.gsx$id.$t;
        tempData['url'] = data.gsx$url.$t;
        tempData['author'] = data.gsx$author.$t;
        tempData['year'] = data.gsx$year.$t;
        tempData['name'] = data.gsx$name.$t;
        tempData['price'] = data.gsx$price.$t;
        tempData['rating'] = data.gsx$rating.$t;
        out[data['gsx$id']['$t']] = tempData;
    })
    state.googleData = out;
    StartApp()
}

export default state