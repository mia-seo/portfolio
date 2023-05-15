export default class Portfolio {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }
  async profile() {
    return this.#profile();
  }

  async educate() {
    return this.#educate();
  }

  async projects() {
    return this.#projects();
  }

  async stack() {
    return this.#stack();
  }

  async project(projectId) {
    return this.#project(projectId);
  }

  async #profile() {
    return this.apiClient.profile().then((res) => res.data);
  }

  async #educate() {
    return this.apiClient.educate().then((res) => res.data);
  }

  async #projects() {
    return this.apiClient.projects().then((res) => res.data);
  }

  async #stack() {
    return this.apiClient.stack().then((res) => res.data);
  }

  async #project(projectId) {
    return this.apiClient.project(projectId).then((res) => res.data);
  }
}
