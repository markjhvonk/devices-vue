<template>
    <div class="card">
        <div class="card-content">
            <a>
                <a :href="'/device/' + device._id"><slot name="title"></slot></a>
            </a>
        </div>
        <footer class="card-footer" >
            <a v-on:click="updateDeviceState('false', device._id, device)" v-if="device.state === 'true'" class="card-footer-item button is-success">on</a>
            <a v-on:click="updateDeviceState('true', device._id, device)" v-else class="card-footer-item button is-danger">off</a>
        </footer>
    </div>
</template>
<script>
import appService from '../app.service.js'
export default {
  data: {
    collapsed: true
  },
  props: ['device'],
  methods: {
    updateDeviceState(state, deviceId, device) {
      var id = deviceId
      appService.patchDeviceState(
        {
          state: state
        },
        id
      )
      device.state = state
    }
  }
}
</script>
<style lang="scss" scoped>
.iscollapsed {
  display: none;
}
.card {
  padding-bottom: 40px;
  height: 100%;
}
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
}
</style>
