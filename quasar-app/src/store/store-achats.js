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
       /* { name: 'dateAchat', label: 'Date d\'achat', field: 'dateAchat'},*/
    ],
    achats: {}
}

const mutations = {
    AJOUTER_ACHAT(state, payload) {
        const id = Date.now();
        state.achats[id] = payload;
        db.ajouter(payload)
        .then(achat => {
            console.log(achat)
        })
        .catch(error => {
            console.log(error)
        })
    }
}

const actions = {

}

const getters = {
    achats: (state) => { return state.achats }
}
import db from '../shared/db'
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}