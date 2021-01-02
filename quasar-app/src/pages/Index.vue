<template>
  <q-page class="flex flex-center">
    <q-table
      title="Fichiers"
      :data="data"
      :columns="columns"
      row-key="filename"
    />
  </q-page>
</template>

<script>
import { format } from 'quasar';
const { humanStorageSize } = format;

export default {
  data () {
    return {
      columns: [
        {
          name: 'filename',
          label: 'Nom du fichier',
          align: 'left',
          field: row => row.filename,
          sortable: true
        },
        {
          name: 'storageSize',
          label: 'Poids du fichier',
          field: row => row.storageSize,
          format: val => val ? humanStorageSize(val) : val,
          sortable: true
        }
      ],
      data: [
        {
          filename: 'readme.md',
          storageSize: 15000
        },
        {
          filename: 'demo.avi',
          storageSize: 23700000
        }
      ]
    }
  }

}
</script>
