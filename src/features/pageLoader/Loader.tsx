import { useEffect } from 'react';

import './Loader.css';

import type { PageLoaderPhase } from '@/features/pageLoader/usePageLoader';

type LoaderProps = {
    phase: PageLoaderPhase;
};

function Loader({ phase }: LoaderProps) {
    useEffect(() => {
        window.clearTimeout(window.__initialLoaderTimers?.[0]);

        const initialLoader = document.getElementById('initial-loader');

        if (!initialLoader) return;

        initialLoader.classList.add('initial-loader--hidden');

        const removeTimerId = window.setTimeout(() => {
            initialLoader.remove();
        }, 300);

        return () => {
            window.clearTimeout(removeTimerId);
        };
    }, []);

    return (
        <section
            className={`page-loader ${phase === 'fadeOut' ? 'fade-out' : ''}`}
        >
            {phase === 'loading' ? (
                <div className="page-loader-dots">
                    <span />
                    <span />
                    <span />
                </div>
            ) : (
                <div className="page-loader-content">
                    <h1>PageLoader section</h1>
                </div>
            )}
        </section>
    );
}

export default Loader;
