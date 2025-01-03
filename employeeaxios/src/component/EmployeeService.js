import axios from 'axios';

const base_url='http://localhost:4000/';

class EmployeeService{
    getEmployees()
    {
        return axios.get(base_url+"employee")
    }
}

export default new EmployeeService;