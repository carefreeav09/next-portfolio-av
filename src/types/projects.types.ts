import { IApiPaginatedResponse, IApiResponse } from "./api/apiResponse.types";

export interface IProject {
    name: string;
    description: string;
    technologies: string[];
    freelance: boolean;
    thumbnail: string;
    images: string[];
    url: string;
    github: string;
    appType: string
    _id: number,
}



export interface IApiResponseProjectsList
    extends IApiPaginatedResponse<IProject> { }

//
export interface IApiResponseProjectsDetail
    extends IApiResponse<IProject> { }
