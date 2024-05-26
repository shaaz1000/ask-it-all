import axios from "axios";
export async function makeApiCall(method, url, data = null) {
  try {
    const config = {
      method,
      url,
    };

    if (data && (method === "POST" || method === "PUT")) {
      config.data = data;
    }

    const response = await axios(config);
    return response.data; // Return the parsed data
  } catch (error) {
    throw error; // Re-throw the error for proper handling
  }
}
