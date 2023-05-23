export{ };

declare global{
    namespace NodeJS{
        interface ProcessENV {
            BROWSER: "CHROME" |"FIREFOX" | "WEBKIT",
            ENV: "LOCAL" | "DEV" | "QA" | "STAGING", 
            BASEURL: string,
            HEAD: "true" | "false"

        }
    }
}