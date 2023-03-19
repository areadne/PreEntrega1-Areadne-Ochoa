import data from "../data/data.json";

export const pedirDatos = () => {
  return new Promise((res, rej) => {
    res(data);
  });
};
