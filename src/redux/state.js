export let state = {
    nav: [],
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
    googleData: [],
    footer: [],
    dataBaseLink: 'https://spreadsheets.google.com/feeds/list/1rmjMVuj1tmp1K35vbPWC7UXadsP4C8vgxRvRECJw2Yk/od6/public/values?alt=json',
    cardItems: []
}

export default state