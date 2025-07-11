import { createBrowserRouter } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";
import { LoginPage } from "../../auth/pages/LoginPage";
import ValidarIdentidadPage from "../../votacion/pages/ValidarIdentidadPage";
import HabilitarPapeletaPage from "../../votacion/pages/HabilitarPapeletaPage";
import VotarPage from "../../votacion/pages/VotarPage";
import ResultadosPage from "../../votacion/pages/ResultadosPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PageLayout />,
        children: [
            {
                path: "/",
                element: <LoginPage />
            },
            {
                path: "/jurado/validar",
                element: <ValidarIdentidadPage />
            },
            {
                path: "/jurado/habilitar",
                element: <HabilitarPapeletaPage />
            },
            {
                path: "/votar",
                element: <VotarPage />
            },
            {
                path: "/resultados",
                element: <ResultadosPage />
            }
        ]
    },
]);

export default router;
