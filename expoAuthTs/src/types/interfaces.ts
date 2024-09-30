export interface User {
    email: string;
    lastLogin?: string;
}

export interface LoginForm {
    email: string;
    password: string;
}

export interface AuthContextData {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

export interface UserData {
    email: string;
    lastLogin: string;
}