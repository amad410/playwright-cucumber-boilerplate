const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-results",
  reportPath: "./",
  reportName: "Playwright Automation Report",
  displayDuration: true,
  metadata: {
   /* browser: {
      name: "chrome",
      version: "113",
    },*/
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "10",
    },
  },
  customData: {
    title: "Test info",
    data: [
      { label: "Project", value: "Sample project" },
      { label: "Release", value: "1.0.0" },
      { label: "Cycle", value: "Sample" }
    ],
  },
});