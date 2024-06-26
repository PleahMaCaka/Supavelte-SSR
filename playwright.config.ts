import type { PlaywrightTestConfig } from "@playwright/test"

const config: PlaywrightTestConfig = {
    webServer: {
        command: "npm run build && npm run preview",
        port: 4173
    },
    testDir: "tests/playwright",
    testMatch: /(.+\.)?(test|spec)\.[jt]s/
}

// noinspection JSUnusedGlobalSymbols
export default config
