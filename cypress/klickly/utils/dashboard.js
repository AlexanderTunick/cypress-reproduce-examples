const dashboardApi = (route) => `${Cypress.env('dashboard').apiUrl}${route}`;
const dashboardUrl = (route) => `${Cypress.env('dashboard').uiUrl}${route}`;
const marketingUrl = (route) => `${Cypress.env('dashboard').marketingAdminUiUrl}${route}`;
const marketingApi = (route) => `${Cypress.env('dashboard').marketingAdminApiUrl}${route}`;

module.exports = { dashboardApi, dashboardUrl, marketingUrl, marketingApi };

