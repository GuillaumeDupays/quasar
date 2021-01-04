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
                <q-tab name="connexion" label="Connexion" />
                <q-tab name="inscription" label="Inscription" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="connexion">
                    <div class="text-h6">Connexion</div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </q-tab-panel>

                <q-tab-panel name="inscription">
                   <Inscription />
                </q-tab-panel>
            </q-tab-panels>
        </q-card>
    </q-page>
</template>

<script>
import Inscription from '../components/Authentification/Inscription.vue'
export default {
    data () {
        return {
            tab: 'connexion'
        }
    },
    components : {
        Inscription
    }
}
</script>

<style lang="scss" scoped>
    .auth-tabs {
        max-width: 500px;
        margin: auto;
    }
</style>