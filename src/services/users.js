import data from './data';

function getUsers(){
    data.get("users").then(({ d }) => {
        console.log(d); 
    })
}

export default getUsers;