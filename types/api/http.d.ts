
/*
    eslint-disable
    sort-keys,
    @typescript-eslint/no-explicit-any,
    @typescript-eslint/no-redeclare,

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

export const HttpStatus = {
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NON_AUTHORITATIVE_INFORMATION = 203,
    NO_CONTENT = 204,
    RESET_CONTENT = 205,
    PARTIAL_CONTENT = 206,
    AMBIGUOUS = 300,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    CONFLICT = 409,
    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
    GATEWAY_TIMEOUT = 504,
    HTTP_VERSION_NOT_SUPPORTED = 505,
} as const;

export type HttpStatus = typeof HttpStatus[keyof typeof HttpStatus];

/*
    eslint-enable
    sort-keys,
    @typescript-eslint/no-explicit-any,
    @typescript-eslint/no-redeclare,
*/
