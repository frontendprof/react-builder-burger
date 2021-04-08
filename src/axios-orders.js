
import axios from "axios";


const instance=axios.create({
    baseURL:"https://react-burger-builder-821d0-default-rtdb.firebaseio.com/"
});

export default instance;