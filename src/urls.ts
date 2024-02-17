import { constants } from "./constants";

export const urls = {
  getFullPath(pathName: string) {
    return `${constants.hostname}/${pathName}`;
  },
};
