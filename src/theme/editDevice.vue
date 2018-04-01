<template>
    <div class="content">
        <h1>Edit device.</h1>
            <div class="field">
                <label class="label">Title</label>
                <div class="control">
                    <input v-model="title" class="input" type="text" placeholder="Text input">
                </div>
            </div>
            <div class="field">
                <label class="label">Room</label>
                <div class="control">
                    <input v-model="room" class="input" type="text" placeholder="Text input">
                </div>
            </div>
            <div class="field">
                <label class="label">Type</label>
                <div class="control">
                    <input v-model="type" class="input" type="text" placeholder="Text input">
                </div>
            </div>
            <div class="field">
                <label class="label">State</label>
                <label class="checkbox">
                <input v-model="state" type="checkbox">
                {{ state }}
                </label>
            </div>
            <div class="field">
                <div class="control">
                    <button v-on:click="editDevice(device._id)" class="button is-link">Submit</button>
                </div>
            </div>
    </div>
</template>
<script>
    import appService from '../app.service.js'
    export default {
        data () {
            return {
                title: '',
                room: '',
                type: '',
                state: '',
                id: this.$route.params.id,
                device: []
            }
        },
        methods: {
            editDevice (id) {
                appService.editDevice({
                    'title': this.title,
                    'type': this.type,
                    'room': this.room,
                    'state': String(this.state)
                }, id)
            },
            loadDevices () {
                appService.getSingleDevice(this.id).then(data => {
                    this.device = data
                    this.title = data.title
                    this.room = data.room
                    this.type = data.type
                    this.state = data.state
                })
            }
        },
        watch: {
            '$route' (to, from) {
                this.id = to.params.id
                this.loadDevices()
            }
        },
        created () {
            this.loadDevices()
            // console.log('page = ' + this.$route.query.page)
        }
    }
</script>