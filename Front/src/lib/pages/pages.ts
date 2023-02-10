import pagesJson from "./pages.json"

export class PageLoader {
  public Load() : Array<page> {
    return pagesJson.pages as unknown as Array<page>;
  }
}

export interface page {
  name: string;
  title: string;
  fields: Array<field>;
  navigation: Array<navigation>;
}
export interface field {
  name: string;
  label: string;
  type:  string;
}
export interface navigation {
  label: string;
  route: string;
}