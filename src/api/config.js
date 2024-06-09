import axios from "axios";

export async function makeApiCall(method, url, data = null) {
  try {
    const config = {
      method,
      url,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
        Accept: "*/*",
        // "Accept-Encoding": "gzip, deflate, br",
        // Connection: "keep-alive",
      },
    };

    if (data && (method === "POST" || method === "PUT")) {
      config.data = JSON.stringify(data); // Ensure data is stringified
    }

    const response = await axios(config);
    return response.data; // Return the parsed data
  } catch (error) {
    console.log(error);
    throw error; // Re-throw the error for proper handling
  }
}
