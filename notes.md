# Identity Server for Authorization and Authentication
* The primary application is composed of three parts - IdentityServer, API, and Vue client
    * Here, the Vue client is programmed to output the results of the build command to the wwwroot folder in the VueApi app of the solution, and so the entire app can be run using Visual Studio .Net
    * During development, the app can be configured to be served separately with the Vue client served from VS Code (navigate to https://localhost:8080 instead of http - but this will result in a browser security error, so just click into proceed anyway) by right clicking the solution name, going to properties, and enabling or disabling VueApi's start command
    * This app also includes a CLI client to retrieve a token from IdentityServer that is part of its own solution (dev.Client) - when IdentityServer is running, run this app to print a bearer token to the console for API testing purposes
        * Each client that has access to IdentityServer has its own entry in  Config.cs - the first one in this project's config is this test client - that includes the client's Id and repository secret/credentials along with which resources it has access to
    * This app does not include a backend and serves hardcoded data from the API (hence the amount of functions being run in TrackerView.vue - there are a lot of table joins done via frontend as opposed to a traditional backend query)
* Follow primarily the official documentation to set up IdentityServer and use the Richard Banks tutorial to implement the build output
    * Config for Oidc UserManager in security.js and Identity Server Config.cs should come from the official documentation
    * The methods to implement authorization and authentication in main.js and router.js should mostly follow the Richard Banks tutorial
* This app features one unprotected page with an unprotected API call to retrive the text in About Us (/about-contact) and one protected page with three protected API calls (/tracker)
    * This app does not use global state, so it creates and stores global variables and methods in main.js instead
    * User authorization is handled in the router's index.js, where before each navigation request, the app verifies authentication and redirects to signin if necessary
        * Sign in is handled by OIDC and IdentityServer and automatically redirects a user to the IdentityServer static login page in the .Net backend
    * Once a user is authorized, they can access protected pages
    * Some API requests are protected (contain the [Authorize] decorator) and requests made to these enpoints require a Bearer token to be set in the headers
        * This bearer token is retrieved from the access_token property of the user object attached to the main Vue instance
        * This authorization token (a JWT) is set prior to every API request after a user has logged in and is implemented in main.js
* This app also optionally includes automatic token refresh, which prevents tokens from timing out by renewing them every 90 seconds
* This app still has one bug remaining, which is that it does not redirect to the main app after logging out