class GitHub {
  constructor() {
    this.client_id = '723c8eb675e9c7cfdfe9';
    this.client_secret = '2ce190072b03470a00395797f42fd0222efd08fc';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user){
    // Fetching user profile data
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    // Fetching user repos data
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    // Profile data response
    const profile = await profileResponse.json();
    // Repo data response
    const repos = await repoResponse.json();


    return {
      profile,
      repos
    }
  }
}