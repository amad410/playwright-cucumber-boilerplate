import { BeforeAll, AfterAll, setDefaultTimeout, Before, After, BeforeStep, AfterStep, Status} from "@cucumber/cucumber";
import {chromium, Page, Browser, BrowserContext} from '@playwright/test';
import { pageFixtures } from "./pageFixtures";
/*import {
    ChromiumBrowser,
    firefox,
    FirefoxBrowser,
    webkit,
    WebKitBrowser,
    ConsoleMessage,
    request,
  } from '@playwright/test';*/
import { invokeBrowser } from "../helper/browsers/browserManager";
import { getEnvironment } from "../helper/env/env";
import { createLogger } from "winston";
import { options } from "../helper/util/logger";

let browser: Browser;
//let browser: ChromiumBrowser | FirefoxBrowser | WebKitBrowser;
let page: Page;
let baseUrl : string;
let context:BrowserContext;

/*if(process.env.ENVIRONMENT == 'LOCAL')
{
    baseUrl = "https://rahulshettyacademy.com/client/";

}
else if(process.env.ENVIRONMENT == 'DEV')
{
    baseUrl = "https://rahulshettyacademy.com/client/";

}
else if(process.env.ENVIRONMENT == 'QA')
{
    baseUrl = "https://rahulshettyacademy.com/client/";

}
else if(process.env.ENVIRONMENT == 'STAGE')
{
    baseUrl = "https://rahulshettyacademy.com/client/";

}
else{
    console.log("Wrong environment chosen");
    throw new Error(`Wrong environment chosen. You chose ${process.env.ENVIRONMENT}`)
    
}*/

setDefaultTimeout(10000);


BeforeAll(async function(){

    getEnvironment();
    baseUrl = process.env.BASEURL;

    browser = await invokeBrowser();
    /*

    switch (process.env.BROWSER) {
        case 'FIREFOX':
          browser = await firefox.launch();
          break;
        case 'WEBKIT':
          browser = await webkit.launch();
          break;
        default:
          browser = await chromium.launch({headless: false});
      }*/
   // browser = await chromium.launch({headless: false});
});

Before(async function({pickle}){
    const scenarioName = pickle.name + pickle.id;
    context = await browser.newContext();
    page = await context.newPage();
    page.waitForTimeout(10000);
    pageFixtures.page = page;
    pageFixtures.logger = createLogger(options(scenarioName));
    await pageFixtures.page.goto(`${baseUrl}`)
});

After(async function({pickle, result}){
    //screenshot captured on failure.
    // you can remove this condition to capture all screenshots.
    if(result?.status == Status.FAILED)
    {
        const img = await pageFixtures.page.screenshot({path: `./test-results/screenshots/${pickle.name}.png`, type: "png"});
        await this.attach(img, "image/png");
    }
    
    await pageFixtures.page.close();
    await context.close();
});

AfterAll(async function(){
    await browser.close()
    pageFixtures.logger.close();
});