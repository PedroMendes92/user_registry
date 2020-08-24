export interface IAuthenticationProvider {
    authenticate(email: string): Promise<string>;
    isAuthenticated(type: string, credential:string): Promise<boolean>
}