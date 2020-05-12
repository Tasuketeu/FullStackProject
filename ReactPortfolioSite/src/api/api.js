import * as axios from "axios";

const API_KEY="37662c76ffc19e5cd1b95f37d77155fc";
const HOST_API_URL = 'http://localhost:8080';
const PORTFOLIO_API_URL = `${HOST_API_URL}/user/register?regName=thrh&regLogin=yonkers&regPassword=e`;
const Review_API_URL = `${HOST_API_URL}/movie/0133093/review?review=&rating`;
const instance=axios.create({
    withCredentials:true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT',
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers,Access-Control-Allow-Origin,Content-Type, Authorization, X-Requested-With, append,delete,entries,foreach,get,has,keys,set,values'
    }
}
);

export const reviewAPI={
    getReviews() {
        return  instance.get(`${HOST_API_URL}/review/views`)
        .then(response=>{
            return response.data;
        })
        .catch((error) => {
         console.log('Что-то пошло не так, а именно ' + error.message);
     });

        // return instance.post(`${PORTFOLIO_API_URL}`)
        //     .then(response=>{
        //         return response.data;
        //     })
        //     .catch((error) => {
        //      console.log('Что-то пошло не так, а именно ' + error.message);
        //  });
    },
    sendReview(review,name) {
        
        console.log(review,name);
        return  instance.post(`${HOST_API_URL}/review?review=${review}&login=${name}`)
        .then(response=>{
            return response.data;
        })
        .catch((error) => {
         console.log('Что-то пошло не так, а именно ' + error.message);
     });
    }
}


