// import { isServer } from "@tanstack/react-query";
import axios from "axios";

const axiosInstance = axios.create({
  timeout: 100000,
  // signal: AbortSignal.timeout(100000),
  headers: { Accept: "application/json", "Content-Type": "application/json" },
});

// In order to use the corresponding cookie, the interceptor updates the cookies each time
// This will run every time there is an instance call
/* axiosInstance.interceptors.request.use(async (config) => {
  let token;

  if (isServer) {
    const { cookies } = await import("next/headers");
    token = cookies().get("token")?.value;
  } else {
    token = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
  }

  if (token) config.headers["Authorization"] = `Bearer ${token}`;

  return config;
}); */

export { axiosInstance };
