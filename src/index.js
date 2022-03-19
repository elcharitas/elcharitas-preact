import { SaasProvider, ModalsProvider } from "@saas-ui/react";
import App from "./components/app";
import { theme } from "./utils/theme";

export default function Index() {
    return (
        <SaasProvider theme={theme}>
            <ModalsProvider>
                <App />
            </ModalsProvider>
        </SaasProvider>
    );
}
