var getUserRepos = function(user){
    // //calls to ServerSide API to retreive/fetch data
    // var response = fetch("https://api.github.com/users/octocat/repos");
    
    // //see the JSON file retrived by the fetch call in the console. Returns Promise Object
    // console.log(response);

    //Since a project object was returned, we use the .then method
    fetch("https://api.github.com/users/octocat/repos").then(function(response){
        //formats the response data into JSON. If a resource returns non-JSON data text() would be used instead
        //json()method returns another promise. Use then()
        response.json().then(function(data){
            console.log(data);
        });
    });
};

getUserRepos(user);

