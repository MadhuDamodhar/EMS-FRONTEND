import axios from 'axios';
const BASE_URL='https://ems-backend-53493.el.r.appspot.com/api/v1';

class Service{
empSave(emp){
  return axios.post(BASE_URL+"/add",emp);
}

getAllEmp(){
  return axios.get(BASE_URL+'/fetch');
}

getEmpById(id){
  return axios.get(BASE_URL+'/fetch/'+id);
}

deleteEmpById(id){
  return axios.get(BASE_URL+'/delete/'+id);
}

updateEmp(id,emp){
  return axios.post(BASE_URL+"/update/"+id,emp);
}

}export default new Service();