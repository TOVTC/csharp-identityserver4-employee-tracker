import { UserManager, WebStorageStateStore } from "oidc-client"

export default class AuthService {
  constructor() {
    const settings = {
      userStore: new WebStorageStateStore({ store: window.localStorage }),
      authority: "https://localhost:8080",
      client_id: "vuejs",
      redirect_uri: "https://localhost:8080/callback.html",
      automaticSilentRenew: true,
      silent_redirect_uri: "https://localhost:44357/silent-renew.html",
      response_type: "code",
      scope: "openid profile dataEventRecords",
      post_logout_redirect_uri: "https://localhost:8080/",
      filterProtocolClaims: true
    }

    this.userManager = new UserManager(settings)
  }

  getUser() {
    return this.userManager.getUser()
  }

  login() {
    return this.userManager.signinRedirect()
  }

  logout() {
    return this.userManager.signoutRedirect()
  }

  async getAccessToken() {
    let user = await this.userManager.getUser()
    return user.access_token
  }
}
