import { LaunchOptions, chromium, firefox, webkit } from "@playwright/test";


const options: LaunchOptions = {
    headless: false
}

export const invokeBrowser = () =>{

    const browserType = process.env.BROWSER;

    switch (browserType) {
        case "WEBKIT":
            return webkit.launch(options);
          break;
          case "FIREFOX":
            return firefox.launch(options);
          break;
          case "CHROME":
            return chromium.launch(options);
          break;
        default:
          throw new Error("Please set the proper browser!");
            
      }



}