import Oidc from 'oidc-client'

var mgr = new Oidc.UserManager({
    authority: 'https://localhost:5001',
    client_id: 'js',
    redirect_uri: 'https://localhost:8080/callback',
    response_type: 'code',
    scope: 'openid profile trackerApi',
    post_logout_redirect_uri: 'https://localhost:8080',
    userStore: new Oidc.WebStorageStateStore({ store: window.localStorage }),
    // silent token renew
    automaticSilentRenew: true,
    silent_redirect_uri: 'https://localhost:8080/static/silent-renew.html',
    accessTokenExpiringNotificationTime: 10
})

// remove from proudction
Oidc.Log.logger = console
Oidc.Log.level = Oidc.Log.INFO

export default mgr