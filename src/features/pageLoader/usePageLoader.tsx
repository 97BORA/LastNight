import { useEffect, useState } from 'react';

export type PageLoaderPhase = 'loading' | 'intro' | 'fadeOut';

// TEST
const FORCE_LOADING = true;

// TIME
const LOADING_TIME = 3000;
const INTRO_TIME = 3000;
const FADEOUT_TIME = 1000;

function usePageLoader() {
    const [showPageLoader, setShowPageLoader] = useState(true);
    const [pageLoaderPhase, setPageLoaderPhase] = useState<PageLoaderPhase>(
        () => {
            if (FORCE_LOADING) return 'loading';

            return document.readyState === 'complete' ? 'intro' : 'loading';
        },
    );

    // loading
    useEffect(() => {
        if (pageLoaderPhase !== 'loading') return;

        if (FORCE_LOADING) {
            const loadingTimerId = window.setTimeout(() => {
                setPageLoaderPhase('intro');
            }, LOADING_TIME);

            return () => {
                window.clearTimeout(loadingTimerId);
            };
        }

        if (document.readyState === 'complete') {
            const readyTimerId = window.setTimeout(() => {
                setPageLoaderPhase('intro');
            }, 0);

            return () => {
                window.clearTimeout(readyTimerId);
            };
        }

        const handleLoad = () => {
            setPageLoaderPhase('intro');
        };

        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, [pageLoaderPhase]);

    // intro
    useEffect(() => {
        if (pageLoaderPhase !== 'intro') return;

        const introTimerId = window.setTimeout(() => {
            setPageLoaderPhase('fadeOut');
        }, INTRO_TIME);

        return () => {
            window.clearTimeout(introTimerId);
        };
    }, [pageLoaderPhase]);

    // fadeOut
    useEffect(() => {
        if (pageLoaderPhase !== 'fadeOut') return;

        const fadeOutTimerId = window.setTimeout(() => {
            setShowPageLoader(false);
        }, FADEOUT_TIME);

        return () => {
            window.clearTimeout(fadeOutTimerId);
        };
    }, [pageLoaderPhase]);

    // return
    return {
        showPageLoader,
        pageLoaderPhase,
    };
}

export default usePageLoader;
