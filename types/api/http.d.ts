
/*
    eslint-disable
    @typescript-eslint/no-explicit-any,
*/

export interface RequestOptions {
    apiUrl?: string;
}

export type UploadFileParams = {
    [key: string]: any;
    data?: Recordable;
    file: File | Blob;
    filename?: string;
    name?: string;
};

export type Result<T = any> = {
    code: number;
    result: T;
};

/*
    eslint-enable
    @typescript-eslint/no-explicit-any,
*/
