import Header from "./components/header";
import { ThemeProvider } from "@/components/theme-provider"
import HomeSection from "./components/section/HomeSection";
import AboutSection from "./components/section/AboutSection";

export function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Header />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8">
                <HomeSection />
                <AboutSection />
            </main>
        </ThemeProvider>
    )
}

export default App;