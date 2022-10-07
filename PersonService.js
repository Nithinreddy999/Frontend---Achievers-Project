import axios from 'axios'
const PERSON_API_BASE_URL = 'http://localhost:8080/api/auth/person_list';



class PersonService {

    getAllPersons(){
        return axios.get(PERSON_API_BASE_URL);
    }


    getPersonById(personId){
          return axios.get(PERSON_API_BASE_URL + '/' + personId);
         }

}



export default new PersonService();