export interface IApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}

export interface IApiPaginatedResponse<T> {
    success: boolean;
    message: string;
    data: T[];
    pagination: {
        total: number;
    };
}
