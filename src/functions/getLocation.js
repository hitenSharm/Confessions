import axios from "axios";
var url="http://ip-api.com/json/";

const getLocationFromIp = async() =>{        
    try{
        var resp = await axios.get(url);
        return resp;
    }catch(err){
        var res={
            "error":"AD Block!"
        }
        return res;
    }
}

export default getLocationFromIp;