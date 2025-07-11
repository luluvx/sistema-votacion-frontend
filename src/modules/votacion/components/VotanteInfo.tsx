import React from 'react';
import type { Votante } from '../hooks/useBuscarVotante';

interface VotanteInfoProps {
    votante: Votante;
    onHabilitar: () => void;
    loading: boolean;
    habilitado: boolean;
}

const VotanteInfo: React.FC<VotanteInfoProps> = ({ votante, onHabilitar, loading, habilitado }) => {
    return (
        <div className="bg-gray-100 rounded p-6 shadow mb-4 w-full max-w-md">
            <h2 className="text-lg font-bold mb-2">Datos del votante</h2>
            <div><b>Nombre:</b> {votante.nombreCompleto}</div>
            <div><b>Recinto:</b> {votante.recintoNombre}</div>
            {/* Si quieres mostrar la foto */}
            {votante.fotoVotante && (
                <div className="my-2">
                    <img src={votante.fotoVotante} alt="Foto del votante" className="max-w-xs rounded shadow" />
                </div>
            )}
            <button
                onClick={onHabilitar}
                className="mt-4 bg-green-600 text-white px-6 py-2 rounded font-semibold hover:bg-green-700 disabled:opacity-50"
                disabled={loading || habilitado}
            >
                {loading ? 'Habilitando...' : habilitado ? 'Papeleta habilitada' : 'Habilitar papeleta'}
            </button>
            {habilitado && <div className="text-green-700 mt-2">¡Papeleta habilitada correctamente!</div>}
        </div>
    );
};

export default VotanteInfo; 