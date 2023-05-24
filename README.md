# Introduction 
This sample is designed for use in VsCode and includes source code for testing the web frontend using Cucumber for Playwright. Cucumber is nothing more than another interface that sits on top of your scripts that documents tests in plain language using Gherkin syntax. It also programmatically creates a custom Cucumber reporter to report results. It also uses the dotenv and cross-env packages to control the environments to run your scripts on any platform (Windows, Linux, or MAC). 

Lastly, Synthetic monitoring using 'Checkly' can also be integrated as a way to shift-left to monitor the state of the application. 

# Getting Started
TODO: Guide users through getting your code up and running on their own system. In this section you can talk about:
1. Install node
2. Install npm
3. Install VsCode
4. Install plugin 'Cucumber (Gherkin) Full Support' from within VSCode.
5. Restart System
6. Perform CNTRL + (comma) to go to the VS settings
7. Search cucumber
8. Add relative paths for features
	_src/test/features/*.features_
9. Add relative paths for Glue
	_src/test/steps/*.ts_

### Documentation
If you want to learn more refer the following:
- [Playwright Official Docs](https://playwright.dev/docs/intro)

# Install Dependencies
On the commandline at the base of the project, perform 
_npm install_

NOTE: Make sure your browser is up-to-date.

# Check version of Playwright
To check your version of Playwright you can perform the following:
_npx playwright --version_ 

# Updating Node version
You can do this through NVM (node version manager) [here](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/) and then just perform _nvm install <version>_

or download and install latest from [here](https://nodejs.org/en)

# Updating All Packages
Install the package update checker using this documentation [here](https://www.npmjs.com/package/npm-check-updates)

Run the following command to determine the difference between all package versions in package.json versus the latest out there:
_npx ncu_

Then to update all packages that have been identified, you can run the following to update your package.json:
_npx npm-check-updates -u_ 

Then run _npm install_ to install new versions from your package.json.

# Build and Test

NOTE: The solution is wired to use dotenv and cross-env for environent control.  See section titled 'Run tests using a specific environment,' and 'Running specific browsers' as you will need to set the environment and browser first before a run

1. Set the browser using the environment variable
2. Run a specific environment based test using the package.json commands, such as _npm run test:local_

## Generating Steps for your feature files through logs
Perform the following to generate sudo code for undefined feature file steps:
_npx cucumber-js_

## Running feature file tests
Perform the following:
_npx cucumber-js_

## Trigger tests and generate results from package.json
By default, this framework is wired with a script in the package.json to trigger tests. Simply perform the following:
_npm run test:local_

You can add additional custom scripts in the package.json

NOTE: The solution is wired to use dotenv and cross-env for environent control.  See section titled 'Run tests using a specific environment,' and 'Running specific browsers' as you will need to set the environment and browser first before a run

## Run all tests interactively
Run the following command 

_npm run test:local_

NOTE: The solution is wired to use dotenv and cross-env for environent control.  See section titled 'Run tests using a specific environment,' and 'Running specific browsers' as you will need to set the environment and browser first before a run

## Run UI tests in debug mode
_npm run test:local --debug_ which will launch the Playwright Inspector for Debugging. 
More information [here](https://playwright.dev/docs/debug)
NOTE: You cannot debug API calls using Inspector.

NOTE: The solution is wired to use dotenv and cross-env for environent control.  See section titled 'Run tests using a specific environment,' and 'Running specific browsers' as you will need to set the environment and browser first before a run

## Run tests in debug mode
Perform the following:
1. Modify package.json to include the command in the test script section
2. SHIFT + CNTRL + V for Windows and search for 'Debug npm script'
This will look at the script section in the package.json and debug your script

Similarly, you can use the Javascript debugger in the terminal.

NOTE: See section titled 'Run tests using a specific environment,' as you will need to set the environment first before a run

## Run tests using a specific environment

See documentation when it comes to parameterized tests [here](https://playwright.dev/docs/test-parameterize)

If you want to run tests against a specific environment, first set the corresponding environment (i.e., LOCAL, DEV, QA, STAGING). There environment files in the _env_ directory that are setup for you. You simply need to just call the corresponding command in the package.json for that environment. 

NOTE: You can change the values of those environment variables. 

## Running Test files in parallel

In the _Cucumber.json_ file we have added a parallel worker flag to run 2 scenarios by default:
```
 "parallel": 2
```

## Retrying tests
In the _Cucumber.json_ file we have added a flag to rerun testst:
```
 "rerun:@rerun.txt"
```
This generates the rerun file. This file reports what scenario that is failing. You can rerun the test that failed simply by performing:
 _npm run test:rerunfailed_

## Running specific tests
You can run specific tests in multiple ways:

_npx cucumber-js_ runs all tests 
_npm run test:local <feature name>_ or _npx cucumber-js <feature name>_ will run the single feature
_npm run test:local --tags @<tag>_ will un scenarios by tag name

## Running specific browsers

By default the framework uses chromium. You can define an envirionment variable called BROWSER and set the name of the browser. Available options: chromium, firefox, webkit

On Linux and Mac you can write:

BROWSER=firefox npm run test or BROWSER=firefox npx cucumber-js runs all tests using Firefox

One Windows you need to set the environment variable to one of the broesers and then run test
```
$env:BROWSER='CHROME'
$env:BROWSER='FIREFOX'
$env:BROWSER='WEBKIT'
npm run test:local
```
or 

```
set BROWSER=firefox
npm run test:local

```

## Show default Cucumber HTML Report
Once all tests have been ran, you can open up the custom Cucumber report under _./test-results_ directory. 

In addition, you can also generate the cucumber multiple reporter via the command, after a run:
_npx ts-node src/helper/report.ts_ or just _npm run report_

You will find that report as _index.html_ in the base of the project.

## Additional Reporters
See additional reporters [here](https://playwright.dev/docs/test-reporters)
See multiple reports [here](https://github.com/WasiqB/multiple-cucumber-html-reporter)

## Getting Logs

The Winston logger is used in this framework 
More Information [here](https://github.com/winstonjs/winston)
Best Practices for logging [here](https://testerops.com/2023/03/20/logging-best-practices-in-test-automation/)

## Getting Screenshots 

In the _hooks.ts_ most of the screenshots are being captured upon failure. This can be modified using a different hook to capture screenshots for success or for every step using the correct cucumber hook method.

## Updating Playwright
_npx playwright install_

## Environment Management

Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

DotENV [here](https://www.npmjs.com/package/dotenv)

Cross-ENV  makes it so you can have a single command without worrying about setting or using the environment variable properly for the platform. Just set it like you would if it's running on a POSIX system, and cross-env will take care of setting it properly.

Cross-ENV [here](https://www.npmjs.com/package/cross-env)

## Integration with CI/CD
Playwright can be integrated with common CI/CD tools. See information [here](https://playwright.dev/docs/ci)
Playwright GitLab CI [here](https://medium.com/devops-with-valentine/run-your-playwright-e2e-tests-in-gitlab-ci-ea1afe432032) or [here]

Playwright Azure [here](https://www.youtube.com/watch?v=RCzXuCt8Lng)

Playwright Circle CI [here](https://www.youtube.com/watch?v=MHjpsvXekmM&pp=ygUPcGxheXdyaWdodCBjaWNk)

Playwright Jenkins CI [here](https://www.youtube.com/watch?v=lSArkaDKD2Q&pp=ygUPcGxheXdyaWdodCBjaWNk)

Playwright GitHub Actions CI [here](https://www.youtube.com/watch?v=49zVuWC3bmY&pp=ygUPcGxheXdyaWdodCBjaWNk)

## Using Checkly
This is a package that can be used to evaluate how well your tests run from anywhere. The checkly tests will exist outside or your normal tests in the _./checks_ directory. It can be both UI and API tests. Sample included in the directory. 

Prerequisite: 
1. You will need to first sign up with an account. 
2. Then perform the installation [here](https://www.checklyhq.com/docs/cli/installation)
3. Run the command _npm create checkly_ to get everything installed
4. Then login using command _npx checkly login_
5. Create tests in the _checks_ directory
6. Then run _npx checkly test_
7. Then run _npx checkly deploy_ to deploy results to dashboard
8. Visit and log into dashboard at location https://app.checklyhq.com/

![Alt text](readme_images\Checkly.PNG?raw=true "Checkly Dashboard")

More information [here](https://www.checklyhq.com/docs/cli) and [here](https://www.youtube.com/watch?v=vbKjgnK40q4&list=PLt1BzgDPWET4Z-kitSAT8TaBBF7qKl3NM&index=4)


## Code Development
### Codegen Tool
_npx playwright codegen <application url>_
More information [here](https://playwright.dev/docs/codegen)

### Development Documentation
 - General Test Development: [here](https://playwright.dev/docs/writing-tests)
 - API Testing: [here](https://playwright.dev/docs/test-api-testing) or [here](https://www.youtube.com/watch?v=oCXapCCsDe4&t=30s&pp=ygUPcGxheXdyaWdodCBjaWNk)
 - Mock APIs: [here](https://playwright.dev/docs/mock)
 - Mock Browser APIs: [here](https://playwright.dev/docs/mock-browser-apis)
 - Intercepting Network Calls: [here](https://playwright.dev/docs/network)
 - Adding fixtures - [here](https://playwright.dev/docs/test-fixtures#:~:text=Playwright%20Test%20is%20based%20on,instead%20of%20their%20common%20setup.)
 - Parameterize tests - [here](https://playwright.dev/docs/test-parameterize)
 - Best Practices - [here](https://playwright.dev/docs/best-practices)
 - Test Configurations - [here](https://playwright.dev/docs/test-configuration) and [here](https://playwright.dev/docs/api/class-testconfig)
 - Page locator - [here](https://playwright.dev/docs/pages)
 - General locators - [here](https://playwright.dev/docs/locators)
 - Assertions - [here](https://playwright.dev/docs/test-assertions#list-of-assertions)
 - ViewPort Emulation - [here](https://playwright.dev/python/docs/emulation)
 - Retries - [here](https://playwright.dev/docs/test-retries)
 - Autowaiting - [here](https://playwright.dev/docs/actionability)
 - Screen shots - [here](https://playwright.dev/docs/screenshots)
 - Video - [here](https://playwright.dev/docs/videos)
 - Cucumber - [here](https://cucumber.io/docs/installation/javascript/)
 - Cucumber GitHub - [here](https://github.com/cucumber/cucumber-js)
 - FS File System - [here](https://github.com/jprichardson/node-fs-extra)
 - Reuse Authentication - [here](https://www.youtube.com/watch?v=QJL6uV7z-8I&t=12s&pp=ygUPcGxheXdyaWdodCBjaWNk)

# Contribute
If you would like to contribute to the source, please reach out to Director of Quality Engineering, Antwan Maddox,
or the Automation Team within the Quality Guild.
