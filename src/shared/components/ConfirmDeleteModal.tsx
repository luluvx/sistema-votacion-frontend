import React from 'react';
import { FiAlertTriangle, FiX } from 'react-icons/fi';

interface ConfirmDeleteModalProps {
    open: boolean;
    onConfirm: () => void;
    onCancel: () => void;
    message?: string;
    title?: string;
}

export const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({ 
    open, 
    onConfirm, 
    onCancel, 
    message = 'Esta acción no se puede deshacer. ¿Deseas eliminar este elemento?',
    title = '¿Estás seguro?'
}) => {
    if (!open) return null;
    
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-main rounded-2xl shadow-2xl p-8 w-full max-w-md mx-4 animate-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-tertiary/10 rounded-full">
                            <FiAlertTriangle className="text-tertiary text-xl" />
                        </div>
                        <h3 className="text-xl font-bold text-headline">{title}</h3>
                    </div>
                    <button
                        onClick={onCancel}
                        className="p-2 hover:bg-secondary rounded-full transition-colors"
                    >
                        <FiX className="text-paragraph text-lg" />
                    </button>
                </div>
                
                {/* Content */}
                <div className="text-paragraph mb-8 leading-relaxed">
                    {message}
                </div>
                
                {/* Actions */}
                <div className="flex gap-3 justify-end">
                    <button
                        onClick={onCancel}
                        className="px-6 py-3 rounded-lg bg-secondary text-headline hover:bg-secondary/80 transition-all duration-200 font-semibold min-w-[100px]"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-6 py-3 rounded-lg bg-tertiary text-buttonText hover:bg-tertiary/90 transition-all duration-200 font-semibold min-w-[100px] shadow-sm hover:shadow-md"
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    );
}; 