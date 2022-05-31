import axios, { AxiosInstance } from "axios";
import { ITrack } from "../types/Track";

class ApiCore {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
    });
  }

  public fetchTracks = async (
    count?: number,
    offset?: number
  ): Promise<ITrack[]> => {
    try {
      const response = await this.axiosInstance.get("/tracks", {
        params: { count, offset },
      });
      return response.data;
    } catch (error) {
      throw Error(error);
    }
  };
}

export default new ApiCore();
