<template>
    <div class="content">
        <h1>Add a device!</h1>
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
            <div class="control">
                <button v-on:click="postDevice()" class="button is-link">Submit</button>
            </div>
        </div>
        <br/>
        <a href="../../">Back</a>
    </div>
</template>
<script>
    import appService from '../app.service.js'
    export default {
        data () {
            return {
                title: '',
                room: '',
                type: ''
            }
        },
        methods: {
            postDevice () {
                appService.postDevice({
                    'title': this.title,
                    'type': this.type,
                    'room': this.room
                })
            }
        }
    }
</script>