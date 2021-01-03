const state = {
    columns: [
        {
            name: 'name',
            required: true,
            label: 'Label à définir',
            align: 'left',
            field: row => row.name,
            format: val => `${val}`,
            sortable: true
        },
        { name: 'id', align: 'center', label: 'Type', field: 'type', sortable: true },
        { name: 'marque', label: 'Marque', field: 'marque'},
        { name: 'pointure', label: 'Pointure', field: 'pointure'},
        { name: 'prixAchat', label: 'Prix d\'achat', field: 'prixAchat'},
        { name: 'dateAchat', label: 'Date d\'achat', field: 'dateAchat'},
    ],
    achats: [
        {
            id: 1,
            marque: 'Converse',
            pointure: '39',
            prixAchat: '15',
            dateAchat: '01/01/2021'
        },
        {
            id: 2,
            marque: 'Dr.Martens',
            pointure: '43',
            prixAchat: '45',
            dateAchat: '02/01/2021'
        }
    ]
}

const mutations = {

}

const actions = {

}

const getters = {
    achats: (state) => { return state.achats }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}