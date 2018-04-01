<template>
  <div>
    <div class="columns">
        <div class="column is-one-third device" v-for="(device, title) in devices" v-bind:key="device.id">
            <app-device :device="device">
                <h3 slot="title">{{device.title}}</h3>
            </app-device>
        </div>
    </div>
    <nav class="pagination" role="navigation" aria-label="pagination">
      <a v-if="!(pagination._links.previous.page <= 0)" v-on:click="pagernation(pagination._links.previous.href)" class="pagination-previous">Previous</a>
      <a v-if="!(pagination._links.next.page > pagination.totalPages)" v-on:click="pagernation(pagination._links.next.href)" class="pagination-next">Next page</a>
      <ul class="pagination-list" style="list-style-type:none;">
        <li>
          <a v-on:click="pagernation(pagination._links.first.href)" class="pagination-link" aria-label="Goto first page">{{pagination._links.first.page}}</a>
        </li>
        <li>
          <span class="pagination-ellipsis">&hellip;</span>
        </li>
        <li v-if="!(pagination._links.previous.page <= 0)">
          <a v-on:click="pagernation(pagination._links.previous.href)" class="pagination-link" aria-label="Goto previous page">{{pagination._links.previous.page}}</a>
        </li>
        <li>
          <a class="pagination-link is-current" aria-label="Current page" aria-current="page">{{pagination.currentPage}}</a>
        </li>
        <li v-if="!(pagination._links.next.page > pagination.totalPages)">
          <a v-on:click="pagernation(pagination._links.next.href)" class="pagination-link" aria-label="Goto next page">{{pagination._links.next.page}}</a>
        </li>
        <li>
          <span class="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
          <a v-on:click="pagernation(pagination._links.last.href)" class="pagination-link" aria-label="Goto last page">{{pagination._links.last.page}}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import Device from './Device.vue'
import appService from '../app.service.js'
export default {
  components: {
    'app-device': Device
  },
  data() {
    return {
      id: this.$route.params.id,
      devices: [],
      pagination: [],
      route: ''
    }
  },
  methods: {
    loadDevices(link) {
      var url
      if (link !== undefined) {
        url = link
      } else {
        url = '?start=0&limit=5'
      }
      appService.getDevices(url).then(data => {
        this.devices = data.items
        this.pagination = data.pagination
      })
    },
    pagernation(link) {
      var url = link.slice(40)
      console.log(url)
      this.loadDevices(url)
    }
  },
  watch: {
    $route(to, from) {
      this.id = to.params.id
      this.loadDevices()
    }
  },
  created() {
    this.loadDevices()
    // console.log('page = ' + this.$route.query.page)
  }
}
</script>
