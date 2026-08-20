import { useEffect } from 'react';

import './Loader.css';

import type { PageLoaderPhase } from '@/features/pageLoader/usePageLoader';

type LoaderProps = {
    phase: PageLoaderPhase;
};

function Loader({ phase }: LoaderProps) {
    // useEffect
    useEffect(() => {
        window.clearTimeout(window.__initialLoaderTimers?.[0]);

        const initialLoader = document.getElementById('initial-loader');
        const initialLoaderScript = document.getElementById(
            'initial-loader-script',
        );

        initialLoaderScript?.remove();

        if (!initialLoader) return;

        initialLoader.classList.add('initial-loader--hidden');

        const removeTimerId = window.setTimeout(() => {
            initialLoader.remove();
        }, 300);

        return () => {
            window.clearTimeout(removeTimerId);
        };
    }, []);

    // return
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
                    <div className="page-loader-stage">
                        <div className="page-loader-line" />
                        <div className="page-loader-fill" />
                    </div>
                </div>
            )}
        </section>
    );
}

export default Loader;
