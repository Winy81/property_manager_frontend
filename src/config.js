const API_BASE_URL = "http://localhost:3001/api/v1";

export const APP_CONFIG = {
  api: {
    services: `${API_BASE_URL}/services`,
    serviceShow: (id) => `${API_BASE_URL}/services/${id}`, 
  }
};
