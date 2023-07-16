export interface AuthRespose {
    body: {
        user: User;
        accessToken: string;
        refreshToken: string;
    }
}

export interface AuthResposeError{
    body: {
        error: string;
    }
}

export interface User{
    _id: string;
    name: string;
    username: string;
}