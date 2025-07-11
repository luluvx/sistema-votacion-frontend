import React, { useState } from 'react';

interface BuscarVotanteFormProps {
    onBuscar: (ci: string) => void;
    loading: boolean;
}

const BuscarVotanteForm: React.FC<BuscarVotanteFormProps> = ({ onBuscar, loading }) => {
    const [inputCi, setInputCi] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputCi.trim()) {
            onBuscar(inputCi.trim());
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 mb-6">
            <input
                type="text"
                placeholder="Ingrese CI del votante"
                value={inputCi}
                onChange={e => setInputCi(e.target.value)}
                className="border rounded px-4 py-2 text-lg"
                disabled={loading}
            />
            <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 disabled:opacity-50"
                disabled={loading || !inputCi.trim()}
            >
                {loading ? 'Buscando...' : 'Buscar votante'}
            </button>
        </form>
    );
};

export default BuscarVotanteForm; 