
export let state = {
    main: {
        title: 'Text Title',
        subtitle: 'Text sub title',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid fugiat possimus fuga, quisquam autem accusam     tempora cupiditate nihil, vero corrupti amet deserunt atque sunt! Non sequi temporibus excepturi saepe odio!'
    },
    paginations: {
        cardsPerPage: 12,
        paginationList: [],
        paginationListActive: 0,
        cardItemStart: 0,
        cardItemEnd: 12
    },
    dataBaseLink: 'https://spreadsheets.google.com/feeds/list/1rmjMVuj1tmp1K35vbPWC7UXadsP4C8vgxRvRECJw2Yk/od6/public/values?alt=json',
    nav: [],
    googleData: [],
    footer: []
}

getGoogleData(state.dataBaseLink)
function getGoogleData(link) {
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
    let googledata = [];
    let footer = [];
    let nav = [];

    googleTableData.forEach((data, i) => {
        let tempData = [];
        let tempNav = {};
        let tempFooter = {};

        tempData['id'] = data.gsx$id.$t;
        tempData['url'] = data.gsx$url.$t;
        tempData['author'] = data.gsx$author.$t;
        tempData['year'] = data.gsx$year.$t;
        tempData['name'] = data.gsx$name.$t;
        tempData['price'] = data.gsx$price.$t;
        tempData['rating'] = data.gsx$rating.$t;

        if (data.gsx$footercontent.$t) tempFooter.footerContent = data.gsx$footercontent.$t;
        if (data.gsx$footerlinktitle.$t) tempFooter.footerLinkTitle = data.gsx$footerlinktitle.$t;
        if (data.gsx$footertitle.$t) tempFooter.footerTitle = data.gsx$footertitle.$t;
        if (data.gsx$footerlink.$t) tempFooter.footerLink = data.gsx$footerlink.$t;
        if (data.gsx$footercontent.$t) footer.push(tempFooter)

        if (data.gsx$menulink.$t) tempNav.link = data.gsx$menulink.$t
        if (data.gsx$menuname.$t) tempNav.linkName = data.gsx$menuname.$t
        if (data.gsx$menulink.$t) nav.push(tempNav)

        googledata[data['gsx$id']['$t']] = tempData;
    })
    state.googleData = googledata;
    state.footer = footer;
    state.nav = nav;
    start();
}

// observer ==========================
let start = () =>{};
export let reStartApp = (observer) => {
    start = observer;
}

export default state