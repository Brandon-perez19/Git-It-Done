var getUserRepos = function(){
    // //Test to see if function worked
    // console.log("function was called");

    //calls to ServerSide API to retreive/fetch data
    fetch("https://api.github.com/users/octocat/repos");
};

getUserRepos();

//ping api.github.com is a terminal command to verify api endpoint/ test connection itself