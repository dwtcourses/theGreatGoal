import axios from "axios";

export default {
    // Get all analysis from MongoDB
    getAllData: function(){
        return axios.get('/getAllData')
    },
    
    // Get latest analysis from MongoDB
    getData: function(data){
        var path = "/getData/"+data.firstName+"/"+data.lastName+"/"+data.email
        return axios.get(path)
    },

    //Send data to Server
    sendData: function(data){
        return axios.post('/sendData', data)

    },

    //Get scenario from Server
    getScenario: function(){
        return axios.get('/getScenario')
    },

    //Send data to Server
    sendCont: function(data){
        return axios.post('/sendCont', data)
    }
}