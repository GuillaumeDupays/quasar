<template>
    <form @submit.prevent="inscription">
        <div class="row q-mb-md">
            <q-banner class="bg-grey-3">
            <template v-slot:avatar>
                <q-icon name="account_circle" color="primary" />
            </template>
            Veuillez vous inscire afin d'accéder à la liste des achats
            </q-banner>
        </div>
        <div class="row q-mb-md">
            <q-input
                v-model="form.email"
                outlined
                class="col"
                label="Email"
                stack-label
                :dense="dense"
            />
        </div>
        <div class="row q-mb-md">
            <q-input
                v-model="form.password"
                type="password"
                outlined
                class="col"
                label="Password"
                stack-label
                :dense="dense"
            />
        </div>
        <div class="row">
            <q-space />
            <q-btn 
                type="submit"
                color="primary"
                label="S'inscrire"
            ></q-btn>
        </div>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            inscription() {
                console.log('inscription')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>