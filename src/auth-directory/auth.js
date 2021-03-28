class Auth {
  constructor() {
    this.authenticated = false;
    this.admin = false;
  }

  login(cb) {
    this.authenticated = true;
    cb();
  }

  logout(cb) {
    this.authenticated = false;
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }

  setAdmin() {
    this.admin = true;
  }

  unsetAdmin() {
    this.admin = false;
  }

  isPrivileged() {
    return this.admin;
  }
}

export default new Auth();
