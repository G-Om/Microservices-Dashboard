import axios from 'axios';


class MicroserviceApi{

    addService(data){
        return axios.post('http://localhost:8080/services/api/dashboard/microservice', data);
    }

    getService(id){
        return axios.get('http://localhost:8080/services/api/dashboard/microservice/'+id);
    }

    getAllServices(){
        return axios.get('http://localhost:8080/services/api/dashboard/microservice');
    }
}

export default new MicroserviceApi()