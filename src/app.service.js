import axios from 'axios'

axios.defaults.baseURL = 'http://www.markvonk.com:8000/api'

const appService = {
    getDevices(url) {
        return new Promise((resolve) => {
            axios.get(`/devices/` + url)
                .then(response => {
                    // console.log(response.data)
                    resolve(response.data)
                })
        })
    },
    getSingleDevice(id) {
        // console.log('device id: ' + id)
        return new Promise((resolve) => {
            var headers = { 'Content-Type': 'application/json', 'Accept': 'application/json' }
            axios.get(`/devices/` + id, headers)
                .then(response => {
                    // console.log(response.data)
                    resolve(response.data)
                })
        })
    },
    patchDeviceState(state, id) {
        console.log('device id: ' + id)
        console.log('device state' + state)
        return new Promise((resolve) => {
            var headers = { 'Content-Type': 'application/json' }
            axios.patch(`/devices/` + id, state, headers)
                .then(response => {
                    // console.log(response.data)
                    resolve(response.data)
                })
        })
    },
    editDevice(data, id) {
        return new Promise((resolve) => {
            var headers = { 'Content-Type': 'application/json' }
            axios.put(`/devices/` + id, data, headers)
                .then(response => {
                    // console.log(response.data)
                    resolve(response.data)
                    window.location.href = '../../device/' + id
                })
        })
    },
    deleteDevice(id) {
        return new Promise((resolve) => {
            axios.delete(`/devices/` + id)
                .then(response => {
                    window.location.href = '/'
                })
        })
    },
    postDevice(deviceData) {
        console.log('deviceData = ' + deviceData.title)
        return new Promise((resolve, reject) => {
            var headers = { 'Content-Type': 'application/json' }
            axios.post(`/devices`, deviceData, headers)
                .then(response => {
                    resolve(response.data)
                    console.log('response: ' + response)
                    console.log('data posted')
                    window.location.href = '/'
                }).catch(response => {
                    reject(response.status)
                    console.log('response: ' + response)
                    console.log('data not posted')
                })
        })
    }
}

export default appService
