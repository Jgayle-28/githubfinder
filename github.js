class GitHub {
  constructor() {
    this.client_id = '723c8eb675e9c7cfdfe9';
    this.client_secret = '2ce190072b03470a00395797f42fd0222efd08fc';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}