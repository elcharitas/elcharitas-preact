import { SaasProvider, ModalsProvider } from "@saas-ui/react";
import App from "./components/app";

export default function Index() {
    return (
        <SaasProvider>
            <ModalsProvider>
                <App />
            </ModalsProvider>
        </SaasProvider>
    );
}
