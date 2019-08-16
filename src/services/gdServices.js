import API from '../api'
import {FetchGet, FetchPost} from '../common/fetch'

//请求红人数据
export function getSensationList() {
    return new Promise((response, reject) => {
        FetchGet(API.SENSATION_LIST_URL)
        .then(
            (data) => {
                console.log(data);
                //resolve(data.map( ({uid, imageUrl, nickname}) => ({uid, imageUrl, nickname}) ));
            }
        )
    })
}