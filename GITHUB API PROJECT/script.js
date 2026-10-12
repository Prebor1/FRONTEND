//Készíts egy weboldalt, ahol a felhasználó beír egy GitHub-felhasználónevet, 
// és az alkalmazás megjeleníti a profilját, a repository-it, valamint azok adatait.

const searchBar = document.getElementById("searchBar");
const searchButton = document.getElementById("searchButton");
const div = document.getElementById("profileData")
const div2 = document.getElementById("repoDatas")

const repoSearchBar = document.createElement("input");
repoSearchBar.placeholder = "Search repositories";

const repoSearchButton = document.createElement("button");
repoSearchButton.innerText = "Search";

repoSearchButton.addEventListener("click", displayRepo);
repoSearchBar.addEventListener("keydown", (event) => {
    if (event.key === "Enter"){
        displayRepo();
    }
})

async function getUserData(){

    div.innerHTML = "";

    let username = searchBar.value.toLowerCase().trim();

    if (!username){
        alert("A username must be given")
        return;
    }

    try{

        const response = await fetch(`https://api.github.com/users/${username}`)

        // A fetch csak hálózati hiba esetén dob hibát, ezért a HTTP-hibákat
        // külön kell ellenőrizni (például ha a felhasználó nem létezik).
        if (!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }

        const userData = await response.json();

        //check data
        console.log(userData)

        //username
        const userName = document.createElement("p");
        userName.innerText = `Username: ${userData.login}`;
        div.appendChild(userName);

        //avatar
        const userAvatar = document.createElement("img");
        userAvatar.src = userData.avatar_url;
        userAvatar.height = 200 //beallitja a widthet is, es forditva, mert mindig kocka marad a pfp
        div.appendChild(userAvatar);

        //bio
        const userBio = document.createElement("p");
        userBio.innerText = `Bio: ${userData.bio || "No bio"}`;
        div.appendChild(userBio);

        //repos
        const userRepoNum = document.createElement("p");
        userRepoNum.innerText = `Number of repositories: ${userData.public_repos}`;
        div.appendChild(userRepoNum);

        getRepos();
    }
    catch (error){
        // A try blokkban keletkező hibák ide kerülnek, így az alkalmazás nem áll le.
        console.error("User data fetch has failed:", error);
        alert("Unknown user or network error.");
    }
}

async function getRepos(){

    const reps = document.createElement("p");
    reps.innerText = "REPOSITORIES:";
    div2.appendChild(reps);

    //////////////////////////////////////////////////

    //reposearchbar
    div.appendChild(repoSearchBar);

    //reposearchbutton
    div.appendChild(repoSearchButton);

    //////////////////////////////////////////////////

    try {
        let username = searchBar.value.trim();

        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const repoData = await response.json();

        //see data
        console.log(repoData)
        
        for (let i = 0; i < repoData.length; i++){

            const repository = document.createElement("p");
            const repoDiv = document.createElement("div");
            repository.innerText = (`${repoData[i].name}\nStars: ${repoData[i].stargazers_count} · Forks: ${repoData[i].forks}\n${repoData[i].description || "No description"}\n Last Updated: ${repoData[i].updated_at.substring(0, 10)}`);

            const repoLink = document.createElement("a");
            repoLink.href = repoData[i].html_url;
            repoLink.target = "_blank";
            repoLink.innerText = "Go to repository page";
            repoDiv.appendChild(repository);
            repoDiv.appendChild(repoLink);
            div2.appendChild(repoDiv);

            const br = document.createElement("br");
            div2.appendChild(br)

            //repoDiv.id = "repoDiv";
        }
    }
    catch (error){
        console.error("Repositories fetch has failed:", error);
        alert("Repository fetch failed");
    }
}

async function displayRepo(){
    const username = searchBar.value.trim();
    const repoName = repoSearchBar.value.trim().toLowerCase();

    // Stop searching when either the GitHub username or repository name is missing.
    if (!username || !repoName) {
        return;
    }

    
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }

    const repoData = await response.json();

    for (let i = 0; i < repoData.length; i++) {

        if (repoData[i].name.toLowerCase() === repoName) {

            div2.innerHTML = ""

            const repository = document.createElement("p");
            const repoDiv = document.createElement("div");
            repository.innerText = `${repoData[i].name}\nStars: ${repoData[i].stargazers_count} · Forks: ${repoData[i].forks}\n${repoData[i].description || "No description"}\nLast Updated: ${repoData[i].updated_at.substring(0, 10)}`;

            const repoLink = document.createElement("a");
            repoLink.href = repoData[i].html_url;
            repoLink.target = "_blank";
            repoLink.innerText = "Go to repository page";
            repoDiv.appendChild(repository);
            repoDiv.appendChild(repoLink);
            div2.appendChild(repoDiv);
        }
    }
    
}

searchButton.addEventListener("click", getUserData);
searchBar.addEventListener("keydown", (event) => {
    if (event.key === "Enter"){
        getUserData();
    }
})