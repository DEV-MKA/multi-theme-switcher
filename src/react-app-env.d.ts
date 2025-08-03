/// <reference types="react-scripts" />
declare module "*.module.css";
declare module "*.svg" {
  const content: string;
  export default content;
}
