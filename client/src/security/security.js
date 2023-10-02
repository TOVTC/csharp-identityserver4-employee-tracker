import Oidc from 'oidc-client'

var mgr = new Oidc.UserManager({
    authority: 'https://localhost:5001',
    client_id: 'js',
    redirect_uri: 'https://localhost:8080/callback',
    response_type: 'id_token token',
    scope: 'openid profile trackerApi',
    post_logout_redirect_uri: 'https://localhost:8080',
    userStore: new Oidc.WebStorageStateStore({ store: window.localStorage })
})

// remove from proudction
Oidc.Log.logger = console
Oidc.Log.level = Oidc.Log.INFO

export default mgr