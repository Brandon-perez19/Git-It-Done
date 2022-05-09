var issueContainerEl = document.querySelector("#issues-container");
var limitWarningEl = document.querySelector("#limit-warning");

var getRepoIssues = function(repo){
    console.log(repo);
    
    var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";
    fetch(apiUrl).then(function(response){
        //request was successful
        if(response.ok) {
            response.json().then(function(data){
                console.log(data);
                //pass response data to DOM function
                displayIssues(data);

                //check if api has paginated issues
                if(response.headers.get("Link")){
                    displayWarning(repo);
                };
            });

        } else {
            alert("There was a problem with your request!");
        };
    });
};

var displayIssues = function(issues) {

    //if repositories have no open issues
    if(issues.length === 0) {
        issueContainerEl.textContent = "This repo has no open issues!";
        return;
    };

    for (let i = 0; i < issues.length; i++) {
        //create hyperlink element
        var issueEl = document.createElement("a");
        // give hyperlink class, source and allow it to open in a new tab
        issueEl.classList = "list-item flex-row justify-space-between align-center";
        issueEl.setAttribute ("href", issues[i].html_url);
        issueEl.setAttribute("target","_blank");

        //creating span to hold issue title
        var titleEl =document.createElement("span");
        titleEl.textContent = issues[i].title;
        
        //append to container
        issueEl.appendChild(titleEl);

        //creating a type element
        var typeEl = document.createElement("span");

        //check if issue is an actual issue or a pull request
        if (issues[i].pull_request){
            typeEl.textContent = "(Pull Request)";
        } else {
            typeEl.textContent = "(Issue)";
        }

        //append to container
        issueEl.appendChild(typeEl);

        //append to main container element on single.html
        issueContainerEl.appendChild(issueEl);
    };
};

var displayWarning = function(repo){
    //add text to warning container
    limitWarningEl.textContent = "To see more than 30 issues, visit ";

    var linkEl =document.createElement("a");
    linkEl.textContent = "See More Issues on Github.com";
    linkEl.setAttribute("href","https://github.com/" + repo + "/issues");
    linkEl.setAttribute("target","_blank");

    limitWarningEl.appendChild(linkEl);
};

getRepoIssues("facebook/react");