class UI {
  constructor(){
    this.profile = document.getElementById('profile');
  }

  // Shows profile in UI
  showProfile(user){
  this.profile.innerHTML= `
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="${user.avatar_url}">
          <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
          <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
          <span class="badge badge-success">Folowers: ${user.followers}</span>
          <span class="badge badge-info">Following: ${user.following}</span>
          <br>
          <br>
          <ul class="list-group">
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Website/Blog: ${user.blog}</li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Member Since: ${user.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
  `;
  }

  // Show alert if no user profile matching typed text
  showAlert(message, className){
    // Clear any remaining alerts
    this.clearAlert();
    // Create div
    const div = document.createElement('div');
    // Add class name to div
    div.className = className;
    // Add text to div
    div.appendChild(document.createTextNode(message));
    // Get parent node to insert div
    const container = document.querySelector('.searchContainer');
    // Get search box
    const search = document.querySelector('.search');
    // Insert the alert into UI - 1 param what you want to insert, 2 - what you want to insert before
    container.insertBefore(div, search);

    // Timeout after 3 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear alert message when multiple profiles not found
  clearAlert(){
    // Get the current alert
    const currentAlert = document.querySelector('.alert');
    // Check to see if there is an alert
    if(currentAlert){
      currentAlert.remove();
    }
  }

  // Clear Profile when there is no text in the input
  clearProfile(){
    this.profile.innerHTML ='';
  }
}