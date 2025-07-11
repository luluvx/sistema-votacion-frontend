import React, { useState } from 'react';
import { useBuscarVotante } from '../hooks/useBuscarVotante';
import { useHabilitarPapeleta } from '../hooks/useHabilitarPapeleta';
import BuscarVotanteForm from '../components/BuscarVotanteForm';
import VotanteInfo from '../components/VotanteInfo';

const ValidarIdentidadPage: React.FC = () => {
    const [ci, setCi] = useState('');
    const {
        votante,
        loading: loadingBuscar,
        error: errorBuscar,
        buscarVotante,
        setVotante,
        setError: setErrorBuscar
    } = useBuscarVotante();
    const {
        loading: loadingHabilitar,
        error: errorHabilitar,
        success: habilitado,
        habilitarPapeleta,
        setSuccess: setHabilitado,
        setError: setErrorHabilitar
    } = useHabilitarPapeleta();

    const handleBuscar = async (ciValue: string) => {
        setCi(ciValue);
        setHabilitado(false);
        setErrorHabilitar(null);
        await buscarVotante(ciValue);
    };

    const handleHabilitar = async () => {
        if (!votante) return;
        await habilitarPapeleta(ci);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Validación de Identidad del Votante</h1>
            <BuscarVotanteForm
                onBuscar={handleBuscar}
                loading={loadingBuscar}
            />
            {(errorBuscar || errorHabilitar) && (
                <div className="text-red-600 mb-4">{errorBuscar || errorHabilitar}</div>
            )}
            {votante && (
                <VotanteInfo
                    votante={votante}
                    onHabilitar={handleHabilitar}
                    loading={loadingHabilitar}
                    habilitado={habilitado}
                />
            )}
        </div>
    );
};

export default ValidarIdentidadPage; 