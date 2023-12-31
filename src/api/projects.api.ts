import axiosInstance from '../utils/axios.utils';

//
import type {IApiResponseProjectsDetail} from '../types/projects.types';

/**
 *
 */
export default function useProjectsApi() {
  //
  const baseURL = process.env.NEXT_PUBLIC_API_URL + '/api/v1';

  /**
   * Create a new project
   */
  async function createProject(values?: object) {
    const response = await axiosInstance.post<IApiResponseProjectsDetail>(
      '/projects',
      values,
      {
        baseURL,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data.data;
  }

  /**
   * Delete a new project
   * @param id
   */
  async function deleteProject(id: string) {
    const response = await axiosInstance.delete<IApiResponseProjectsDetail>(
      `/projects/${id}`,
      {
        baseURL,
      }
    );
    return response.data.data;
  }

  //
  return {createProject, deleteProject};
}
