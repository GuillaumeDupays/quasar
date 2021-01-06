import db from '../shared/db'

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
    achats: []
}

const mutations = {
    AJOUTER_ACHAT(state, achat) {
        state.achats = [achat, ...state.achats];
    }
}

const actions = {
    ajouterAchat({ commit }, achat) {
      db.ajouter().then(() => {
        commit("AJOUTER_ACHAT", achat);
      });
    }
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
