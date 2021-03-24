import api from "./api";


const end_point = 'products';

export default {
    create(obj) {
        return api.post(end_point,obj);
    }
}