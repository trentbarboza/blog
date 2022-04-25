let userData = {}

function checkToken(){
    let result = false;
    let lsData = localStorage.getItem('Token');
    if(lsData && lsData != null)
    {
        result = true;
    }
    return result;
}

//DRYCODE 
//one method for 
// async function sendData(endpoint, data ){
//     let res = await fetch(`http://localhost:5231/${endpoint}`, {
//         method:"POST",
//         headers:{
//             'Content-Type': "application/json"
//         },
//         body:JSON.stringify(data)
//     });
//     if(!res.ok)
//     {
//         const message = `An Error has Occured ${res.status}`
//         throw new Error(message)
//     }

//     let data = await res.json();
//     console.log(data)
// }


async function createAccount(createdUser){
    let res = await fetch('https://trentbarbozablog.azurewebsites.net/User/AddUsers', {
        method:"POST",
        headers:{
            'Content-Type': "application/json"
        },
        body:JSON.stringify(createdUser)
    });
    if(!res.ok)
    {
        const message = `An Error has Occured ${res.status}`
        throw new Error(message)
    }

    let data = await res.json();
    console.log(data)
}

async function login(loginUser){
    let res = await fetch('https://trentbarbozablog.azurewebsites.net/User/Login', {
        method:"POST",
        headers:{
            'Content-Type': "application/json"
        },
        body:JSON.stringify(loginUser)
    });
    if(!res.ok)
    {
        const message = `An Error has Occured ${res.status}`
        throw new Error(message)
    }

    let data = await res.json();
    // if(data.token != null){
    //     localStorage.setItem("Token", data.token);
    // }
    return data;
}

async function GetLoggedInUserData(username){
    let res = await fetch(`https://trentbarbozablog.azurewebsites.net/User/userbyusername/${username}`);
    let data = await res.json();
    userData = data;
    console.log(userData);
}

function LoggedInData(){
    return userData;
}


async function addBlogItems(blogItems){
    let res = await fetch('https://trentbarbozablog.azurewebsites.net/BlogItem/AddBlogItem', {
        method:"POST",
        headers:{
            'Content-Type': "application/json"
        },
        body:JSON.stringify(blogItems)
    });
    if(!res.ok)
    {
        const message = `An Error has Occured ${res.status}`
        throw new Error(message)
    }

    let data = await res.json();
    return data;
}

async function getBlogItems(){
    let res = await fetch('https://trentbarbozablog.azurewebsites.net/BlogItem/GetBlogItems');
    let data = await res.json();
    return data;
}

async function getBlogItemsByUserId(userId){
    let res = await fetch(`https://trentbarbozablog.azurewebsites.net/BlogItem/GetItemsByUserID/${userId}`);
    let data = await res.json();
    return data;
}


async function updateBlogItems(blogItems){
    let res = await fetch('https://trentbarbozablog.azurewebsites.net/BlogItem/UpdateBlogItem', {
        method:"POST",
        headers:{
            'Content-Type': "application/json"
        },
        body:JSON.stringify(blogItems)
    });
    if(!res.ok)
    {
        const message = `An Error has Occured ${res.status}`
        throw new Error(message)
    }

    let data = await res.json();
    return data;
}


async function getPublishedBlogItems(){
    let res = await fetch('https://trentbarbozablog.azurewebsites.net/BlogItem/GetPublishedItems');
    let data = res.json();
    return data;
}


export {checkToken, createAccount, login, GetLoggedInUserData, LoggedInData, addBlogItems, getBlogItemsByUserId, getBlogItems, updateBlogItems, getPublishedBlogItems};