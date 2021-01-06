<template>
  <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit.prevent="ajouterAchat"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="achat.marque"
        label="Marque *"
        hint="Marque de l'article"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Quelle est la marque du produit ?']"
      />

      <q-input
        filled
        type="number"
        v-model="achat.pointure"
        label="Pointure *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Veuillez ajouter la pointure',
          val => val > 0 && val < 100 || 'Il me faut la pointure !'
        ]"
      />

      <q-input
        filled
        type="number"
        v-model="achat.prixAchat"
        label="Prix d'achat *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Veuillez ajouter le prix d\'achat',
          val => val > 0 && val < 100 || 'Il me faut le prix acheté !'
        ]"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
      </div>
    </q-form>

  </div>
</template>

<script>


    export default {
      data() {
        return {
          achat: {
            marque: '',
            pointure: '',
            prixAchat: ''
          }
        }
      },
      methods: {
        ajouterAchat() {
          this.$store.dispatch("AJOUTER_ACHAT", this.achat);
          this.achat= "";
        },
      }
    }
</script>

<style lang="scss" scoped>

</style>
