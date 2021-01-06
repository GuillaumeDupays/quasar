<template>
    <q-page padding>
        <q-card class="auth-tabs">
            <q-tabs
                v-model="tab"
                dense
                class="text-grey"
                active-color="primary"
                indicator-color="primary"
                align="justify"
                narrow-indicator
                >
                <q-tab name="connecter" label="Connexion" />
                <q-tab name="inscrire" label="Inscription" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="connecter">
                    <connexion-inscription :tab="tab"/>
                </q-tab-panel>

                <q-tab-panel name="inscrire">
                   <connexion-inscription :tab="tab"/>
                </q-tab-panel>
            </q-tab-panels>
        </q-card>
    </q-page>
</template>

<script>

export default {
    data () {
        return {
            tab: 'connexion'
        }
    },
    components : {
        'connexion-inscription' : require('../components/Authentification/ConnexionInscription').default
    }
}
</script>
<style>
	.auth-tabs {
		max-width: 500px;
		margin: 0 auto;
	}
</style>
