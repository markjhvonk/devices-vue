<template>
    <div class="content">
        <h1>Title: {{ device.title }}</h1>
        <span class="tag is-light">{{ device._id }}</span>
        <br/><br/>
        <dl>
            <dt><strong>Room:</strong></dt>
            <dd>{{ device.room }}</dd>
            <dt><strong>Type:</strong></dt>
            <dd>{{ device.type }}</dd>
            <dt><strong>Status:</strong></dt>
            <dd>{{ device.state }}</dd>
        </dl>
        <a :href="edit" class="button is-warning">Edit</a>
        <a v-on:click="deleteDevice(device._id)" class="button is-danger">Delete</a>
        <br/><br/>
        <a href="../../">Back</a>
    </div>
</template>
<script>
    import appService from '../app.service.js'

    export default {
        data() {
            // console.log(this.$route.params.id)
            return {
                id: this.$route.params.id,
                edit: '/device/' + this.$route.params.id + '/edit',
                device: []
            }
        },
        methods: {
            loadDevices () {
                appService.getSingleDevice(this.id).then(data => {
                    this.device = data
                })
            },
            deleteDevice(id) {
                appService.deleteDevice(id)
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