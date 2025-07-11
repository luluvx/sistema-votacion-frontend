import React, { useEffect, useState } from 'react';
import { getPapeletaHabilitada, registrarVoto } from '../api/instance.api';
import type { Papeleta, CargoPapeleta, CandidatoPapeleta } from '../../core/types/sistema-administracion-electoral/papeleta.types';
import { usePapeletaSocket } from '../../../shared/hooks/usePapeletaSocket';

const VotarPage: React.FC = () => {
    const [papeleta, setPapeleta] = useState<Papeleta | null>(null);
    const [candidatoSeleccionado, setCandidatoSeleccionado] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const [cerrada, setCerrada] = useState(false);

    usePapeletaSocket({
        onHabilitar: () => {
            fetchPapeleta();
            setCerrada(false);
            setSuccess(false);
            setCandidatoSeleccionado(null);
        },
        onCerrar: () => {
            setPapeleta(null);
            setCerrada(true);
            setCandidatoSeleccionado(null);
        }
    });

    const fetchPapeleta = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await getPapeletaHabilitada();
            setPapeleta(res.data);
        } catch (err: any) {
            setError('No hay papeleta habilitada para votar.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPapeleta();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleVotar = async () => {
        if (!papeleta || !candidatoSeleccionado) return;
        setLoading(true);
        setError(null);
        try {
            await registrarVoto((papeleta as any).id, candidatoSeleccionado);
            setSuccess(true);
        } catch (err: any) {
            setError(err.response?.data?.detail || 'Error al registrar el voto.');
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-2xl font-bold mb-4">¡Voto registrado exitosamente!</h1>
                <p>Gracias por participar en la votación.</p>
            </div>
        );
    }

    if (cerrada) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-2xl font-bold mb-4">Papeleta cerrada</h1>
                <p>Espere a que el jurado habilite la siguiente papeleta.</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Votación</h1>
            {loading && <p>Cargando papeleta...</p>}
            {error && <div className="text-red-600 mb-4">{error}</div>}
            {papeleta && (
                <div className="w-full max-w-md bg-white rounded shadow p-6">
                    {papeleta.cargos.map((cargo: CargoPapeleta) => (
                        <div key={cargo.cargoId} className="mb-6">
                            <h2 className="font-semibold mb-2">{cargo.cargoNombre}</h2>
                            {cargo.candidaturas.map(candidatura => (
                                <div key={candidatura.partidoId} className="mb-2">
                                    <div className="font-medium">{candidatura.partidoNombre} ({candidatura.partidoSigla})</div>
                                    <div className="flex flex-wrap gap-4 mt-2">
                                        {candidatura.candidatos.map((candidato: CandidatoPapeleta) => (
                                            <label key={candidato.id} className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="candidato"
                                                    value={candidato.id}
                                                    checked={candidatoSeleccionado === candidato.id}
                                                    onChange={() => setCandidatoSeleccionado(candidato.id)}
                                                    disabled={loading}
                                                />
                                                {candidato.fotoUrl && (
                                                    <img src={candidato.fotoUrl} alt="Foto" className="w-8 h-8 rounded-full object-cover" />
                                                )}
                                                <span>{candidato.nombres} {candidato.apellidoPaterno} {candidato.apellidoMaterno}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                    <button
                        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 disabled:opacity-50"
                        onClick={handleVotar}
                        disabled={loading || !candidatoSeleccionado}
                    >
                        {loading ? 'Registrando voto...' : 'Emitir voto'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default VotarPage; 