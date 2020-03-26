import REACT from "react"
import CMS from "netlify-cms-app"

import style from "../css/inline.css"

import Page from "./cms-preview/page"

CMS.registerPreviewStyle(style, {raw : true});
CMS.registerPreviewTemplate("page", Page);
CMS.init();