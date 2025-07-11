import { useAuth } from '../context/GlobalContext';
import { FiLogOut, FiMenu } from 'react-icons/fi';
import { useState } from 'react';

function SidebarSuperAdmin({ onLogout }: { onLogout: () => void }) {
    return (
        <>
            {/* Aquí puedes agregar los enlaces del sistema de votación cuando existan */}
            <SidebarLogout onLogout={onLogout} />
        </>
    );
}

function SidebarLink({ icon, label, to }: { icon: React.ReactNode; label: string; to: string }) {
    return (
        <a href={to} className="flex items-center gap-3 px-4 py-2 rounded-lg text-paragraph hover:bg-secondary transition-colors font-sans">
            <span className="text-xl">{icon}</span>
            <span className="font-medium">{label}</span>
        </a>
    );
}

function SidebarLogout({ onLogout }: { onLogout: () => void }) {
    return (
        <button onClick={onLogout} className="flex items-center gap-3 px-4 py-2 rounded-lg text-tertiary hover:bg-secondary transition-colors font-sans w-full mt-4">
            <FiLogOut className="text-xl" />
            <span className="font-medium">Cerrar sesión</span>
        </button>
    );
}

export function Sidebar() {
    const { logout } = useAuth();
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="md:hidden fixed top-4 left-4 z-50">
                <button onClick={() => setOpen(!open)} className="bg-button text-buttonText p-2 rounded-lg shadow-lg focus:outline-none">
                    <FiMenu size={24} />
                </button>
            </div>
            <aside
                className={`
                fixed top-0 left-0 h-screen w-64 bg-main border-r border-secondary/30 z-40 flex flex-col
                transition-transform duration-300
                md:static md:block md:w-64 md:translate-x-0
                ${open ? 'translate-x-0' : '-translate-x-full'}
            `}
            >
                <div className="px-8 pt-10 pb-6 border-b border-secondary/20">
                    <span className="font-display text-2xl text-highlight font-bold tracking-wide">Super Admin</span>
                </div>
                <nav className="flex-1 flex flex-col gap-2 px-4 py-6">
                    <SidebarSuperAdmin onLogout={logout} />
                </nav>
            </aside>
            {open && <div className="fixed inset-0 bg-black/30 z-30 md:hidden" onClick={() => setOpen(false)} />}
        </>
    );
} 