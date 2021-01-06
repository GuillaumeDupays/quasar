<template>
    <form @submit.prevent="inscription">
        <div class="row q-mb-md">
            <q-banner class="bg-grey-3">
            <template v-slot:avatar>
                <q-icon name="account_circle" color="primary" />
            </template>
                Veuillez vous {{ tab }} afin d'accéder aux achats
            </q-banner>
        </div>
        <div class="row q-mb-md">
            <q-input
                v-model="form.email"
                :rules="[ val => validerEmail(val) || 'Please use maximum 6 characters']"
                ref="email"
                lazy-rules
                outlined
                class="col"
                label="Email"
                stack-label
            />
        </div>
        <div class="row q-mb-md">
            <q-input
                v-model="form.password"
                :rules="[ val => val.length >= 6 || 'Please use maximum 6 characters']"
                ref="password"
                lazy-rules
                type="password"
                outlined
                class="col"
                label="Password"
                stack-label
            />
        </div>
        <div class="row">
            <q-space />
            <q-btn
                type="submit"
                color="primary"
                :label="tab"
            ></q-btn>
        </div>
    </form>
</template>

<script>
import { mapActions} from 'vuex'

    export default {
        ...mapActions('auth', ['inscrireUtilisateur']),
        props: ['tab'],
        data() {
            return {
                form: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            validerEmail(email) {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            },
            inscription() {
                this.$refs.email.validate()
                this.$refs.password.validate()
                if(!this.$refs.email.hasError && this.$refs.password.hasError) {
                    this.connexion();
                }
            },
            connexion() {
                if (this.tab === 'login') {
                    console.log('utilisateur connecté')
                }
                else {
                    this.inscrireUtilisateur(this.form)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
