import publicIp from 'public-ip';

const getIpAddress = async()=>{
    var ans =await publicIp.v4();
    return ans;
} 

export default getIpAddress;