<template>
      <q-table
        title="Achats"
        :data="achats"
        :columns="columns"
        row-key="name">
      </q-table>
</template>

<script>
    import { mapGetters } from "vuex";

    export default {
        computed: {
            ...mapGetters('achats', ['achats'])
        },
    }
</script>

<style lang="scss" scoped>

</style>