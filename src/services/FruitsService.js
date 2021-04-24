import http from "../http-common";

const getAll = () => {
  return http.get("/");
};

const get = (id) => {
  return http.get(`/${id}`);
};

const create = (data) => {
  return http.post("/", data);
};

const update = (id, data) => {
  return http.put(`${id}`, data);
};

const remove = (id) => {
  return http.delete("/", id);
};

const removeAll = () => {
  return http.delete("/");
};

const findByName = (name) => {
  return http.get(`/?name=${name}`);
};

const FruitsService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByName,
};

export default FruitsService;
