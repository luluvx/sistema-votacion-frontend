import React, { useEffect, useState, useRef } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getResultados } from '../api/instance.api';
import { getCandidatos } from '../../core/api/sistema-administracion-electoral/candidato.api';
import type { Candidato } from '../../core/types/sistema-administracion-electoral/candidato.types';

const COLORS = [
    '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28CFE', '#FF6699', '#FF4444', '#00B8D9', '#36B37E', '#FFAB00'
];

const WS_URL = import.meta.env.VITE_WS_RESULTADOS_URL || 'ws://localhost:8000/ws/resultados/';

const ResultadosPage: React.FC = () => {
    const [resultados, setResultados] = useState<any[]>([]);
    const [candidatos, setCandidatos] = useState<Candidato[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const wsRef = useRef<WebSocket | null>(null);

    useEffect(() => {
        getCandidatos()
            .then(res => setCandidatos(res.data))
            .catch(() => setCandidatos([]));
    }, []);

    useEffect(() => {
        setLoading(true);
        setError(null);
        getResultados()
            .then(res => {
                setResultados(res.data.resultados_por_candidato || []);
                setLoading(false);
            })
            .catch(() => {
                setError('No se pudieron obtener los resultados.');
                setLoading(false);
            });

        wsRef.current = new window.WebSocket(WS_URL);
        wsRef.current.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                if (data.type === 'actualizar_resultados' && data.resultados?.resultados_por_candidato) {
                    setResultados(data.resultados.resultados_por_candidato);
                }
            } catch { }
        };
        wsRef.current.onerror = () => setError('Error en la conexión en tiempo real.');
        return () => {
            wsRef.current?.close();
        };
    }, []);

    const data = resultados.map((r: any) => {
        const candidato = candidatos.find(c => c.id === r.candidato_id);
        return {
            name: candidato ? `${candidato.nombres} ${candidato.apellidoPaterno}` : `Candidato ${r.candidato_id}`,
            value: r.total,
            fotoUrl: candidato?.fotoUrl,
        };
    });

    const totalVotos = data.reduce((sum, d) => sum + d.value, 0);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Resultados de la Votación</h1>
            {loading && <p>Cargando resultados...</p>}
            {error && <div className="text-red-600 mb-4">{error}</div>}
            {!loading && !error && (
                <div className="w-full max-w-xl bg-white rounded shadow p-6">
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={data}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(1)}%)`}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip formatter={(value: any) => `${value} votos`} />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="mt-4">
                        <h2 className="font-semibold mb-2">Totales:</h2>
                        <ul>
                            {data.map((d, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <span style={{ background: COLORS[i % COLORS.length], width: 12, height: 12, display: 'inline-block', borderRadius: 2 }} />
                                    {d.fotoUrl && <img src={d.fotoUrl} alt="Foto" className="w-6 h-6 rounded-full object-cover" />}
                                    <span>{d.name}: <b>{d.value}</b> votos ({totalVotos > 0 ? ((d.value / totalVotos) * 100).toFixed(1) : 0}%)</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-2 font-bold">Total de votos: {totalVotos}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ResultadosPage; 