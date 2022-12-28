import axios from "axios";

const getUser = (user_id) => {

    return new Promise(async (resolve, reject) => {
        const { data } = await axios('https://jsonplaceholder.typicode.com/users/' + user_id)
        resolve(data);
    });

}

const getPosts = (user_id) => {

    return new Promise(async (resolve, reject) => {
        const { data } = await axios('https://jsonplaceholder.typicode.com/posts?userId=' + user_id)
        resolve(data)
    })
}

const getData = async () => {
    try {
        await getUser(1);
        await getPosts(1);
    } catch (e) {
        console.log(e)
    };

}

export default getData;