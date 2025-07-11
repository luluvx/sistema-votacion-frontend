import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '../../core/context/GlobalContext';
import { loginSchema, type LoginFormData } from '../schemas/login.schema';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function LoginForm() {
    const { login, loading, error, user } = useAuth();
    const navigate = useNavigate();
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginFormData) => {
        await login(data.email, data.password);
    };

    useEffect(() => {
        if (!user) return;
        if (user.rol === 'super_admin') navigate('/admin/dashboard', { replace: true });
        else if (user.rol === 'admin_elecciones') navigate('/admin/elecciones', { replace: true });
        else if (user.rol === 'jurado_electoral') navigate('/jurado/validar', { replace: true });
        else if (user.rol === 'admin_padron') navigate('/admin/padron', { replace: true });
    }, [user, navigate]);

    return (
        <div className="w-full flex items-center justify-center min-h-screen">
        <div className="bg-main rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-3xl overflow-hidden">
            <div className="hidden md:flex flex-col items-center justify-center bg-secondary w-1/2 p-8">
            <div className="bg-background rounded-full p-8 shadow-md flex items-center justify-center">
                <FiUser className="text-highlight" size={80} />
            </div>
            </div>
            <div className="flex-1 flex flex-col justify-center p-8">
            <h2 className="text-3xl font-display font-bold text-headline mb-8 text-center">Iniciar sesión</h2>
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-4">
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="text-highlight text-xl" />
                    </span>
                    <input
                    {...register('email')}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="pl-10 pr-4 py-3 w-full border border-secondary rounded-lg font-sans text-base text-paragraph placeholder-paragraph focus:outline-none focus:ring-2 focus:ring-highlight focus:border-highlight bg-background"
                    placeholder="Email"
                    />
                    {errors.email && (
                    <p className="mt-1 text-sm text-tertiary">{errors.email.message}</p>
                    )}
                </div>
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiLock className="text-highlight text-xl" />
                    </span>
                    <input
                    {...register('password')}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="pl-10 pr-4 py-3 w-full border border-secondary rounded-lg font-sans text-base text-paragraph placeholder-paragraph focus:outline-none focus:ring-2 focus:ring-highlight focus:border-highlight bg-background"
                    placeholder="Contraseña"
                    />
                    {errors.password && (
                    <p className="mt-1 text-sm text-tertiary">{errors.password.message}</p>
                    )}
                </div>
                </div>

                {error && (
                <div className="rounded-md bg-tertiary/10 p-4">
                    <div className="text-sm text-tertiary">{error}</div>
                </div>
                )}

                <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 font-bold rounded-lg text-buttonText bg-button hover:bg-highlight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-highlight disabled:opacity-50 disabled:cursor-not-allowed font-sans text-base transition-colors mt-2"
                >
                {loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
                </button>
            </form>
            </div>
        </div>
        </div>
    );
} 