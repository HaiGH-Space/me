import Header from "./components/header";
import { ThemeProvider } from "@/components/theme-provider"
import HomeSection from "./components/section/HomeSection";

export function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Header />
            <main>
                <HomeSection />
            </main>
        </ThemeProvider>
    )
}

export default App;