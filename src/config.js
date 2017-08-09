/**
 * Created by kevin on 17/3/22.
 */
export const API_ROOT = (process.env.NODE_ENV === 'production')
    ? 'http://106.14.2.202:1920'
    : 'http://localhost:1920'
export const Domain = (process.env.NODE_ENV === 'production')
    ? 'http://localhost:3000'
    : 'http://localhost:3000'
export const CookieDomain = (process.env.NODE_ENV === 'production')
    ? '.shuimin.com'
    : ''