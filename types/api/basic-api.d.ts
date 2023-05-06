export type TBasicApiList<Data> = {
    count: number;
    data: Data[];
};

export type TBasicApiListResult<Data> = TBasicApiResult<TBasicApiList<Data>>;

export type TBasicApiResult<Data> = {
    code: number;
    message: string;
    result: Data;
    success: boolean;
};

export type TProfile = {
    avatar: string;
    id: string;
    index: number;
    lock: Nullable<string>;
    name: string;
};

export type TLoginData = {
    password: string;
    username: string;
};

export type TLoginResult = {
    accessToken: string;
};
