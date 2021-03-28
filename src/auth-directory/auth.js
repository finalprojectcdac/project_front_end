class Auth {
  constructor() {
    this.authenticated = false;
    this.admin = false;
  }

  login(cb) {
    this.authenticated = true;
    localStorage.setItem("isAuthenticated", true);
    cb();
  }

  logout(cb) {
    this.authenticated = false;
    localStorage.removeItem("isAuthenticated");
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }

  setAdmin() {
    this.admin = true;
    localStorage.setItem("isAdmin", true);
  }

  unsetAdmin() {
    this.admin = false;
    localStorage.removeItem("isAdmin");
  }

  isPrivileged() {
    return this.admin;
  }
}

export default new Auth();
