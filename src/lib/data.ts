import axios from "axios";
import { StateResponse } from "./definitions";

export async function fetchState(
  page: number,
): Promise<StateResponse | undefined> {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_PUBLIC_API_URL}/api/states?page=${page}`,
    );

    return response.data.data;
  } catch (error) {
    console.log("An unexpected error occurred:", error);
  }
}
