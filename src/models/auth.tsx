export interface UserModel {
    username: string;
    email: string;
    full_name: string;
    role: number;
    password: string;
    joined_day?: string;
    last_login?: string;
    id?: number;
}

export interface AuthModel {
    access_token: string
    refresh_Token?: string
    token_type?: string
    api_token?: string;
}