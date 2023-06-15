import {httpClient} from './httpClient';

export function getMyInfo(){
    return httpClient.get("/user/profile");
}

export function updateProfile(profileDto, id){
    return httpClient.put(`/user/profile/${id}`, profileDto);
}