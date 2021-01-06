import Firebase from 'firebase/app';
import 'firebase/firestore';
import fsConfig from './config';

const config = fsConfig;

const App = Firebase.initializeApp(config);
const Firestore = App.firestore();
Firestore.settings({ timestampsInSnapShots : true });

export default {
    ajouter(achat) {
        return Firestore.collection('achats').add(achat);
    },
    afficher() {
        return Firestore.collection('achats').get();
    }
}
