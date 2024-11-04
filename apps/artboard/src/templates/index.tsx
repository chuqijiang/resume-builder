import { Template } from "@reactive-resume/utils";

import { Template1 } from "./template1";
import { Template2 } from "./template2";
import { Template3 } from "./template3";

export const getTemplate = (template: Template) => {
  switch (template) {
    case "template1": {
      return Template1;
    }
    case "template2": {
      return Template2;
    }
    case "template3": {
      return Template3;
    }
    default: {
      return Template1;
    }
  }
};
