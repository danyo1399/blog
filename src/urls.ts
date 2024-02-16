import { constants } from "./constants";

export const urls = {
  getFullPath(pathName: string) {
    return `${constants.websiteUrl}/${pathName}`;
  },
};
