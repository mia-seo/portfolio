import axios from "axios";

export default class PortfolioClient {
  async profile() {
    return await axios.get("/data/profile.json");
  }

  async educate() {
    return await axios.get("/data/education.json");
  }

  async projects() {
    return await axios.get("/data/projectExperiences.json");
  }

  async stack() {
    return await axios.get("/data/stack.json");
  }

  async project(projectId) {
    return await axios.get(`/data/project/${projectId}.json`);
  }
}
