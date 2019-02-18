export const LOCAL = 'local';
export const STAGING = 'staging';
export const PRODUCTION = 'production';

export const ENVIRONMENT = PRODUCTION;

export let baseClientUrl = () => {
    switch (PRODUCTION) {
        case LOCAL:
            return 'http://localhost:8000';
        case STAGING:
            return 'https://dev-pinnacleracing.io';
        case PRODUCTION:
            return 'https://pinnacleracing.io';
        default:
            return 'http://localhost:8000';
    }
}