import { useEffect, useState } from 'react';

export type PageLoaderPhase = 'loading' | 'intro' | 'fadeOut';

// Test
const LOADING_TEST = true;

// Time
const LOADING_TIME = 3000;
const INTRO_TIME = 3000;
const FADEOUT_TIME = 3000;

function usePageLoader() {
    const [showPageLoader, setShowPageLoader] = useState(true);

    const [pageLoaderPhase, setPageLoaderPhase] = useState<PageLoaderPhase>(
        () => {
            if (LOADING_TEST) return 'loading';

            return document.readyState === 'complete' ? 'intro' : 'loading';
        },
    );

    // Loading
    useEffect(() => {
        if (pageLoaderPhase !== 'loading') return;

        if (LOADING_TEST) {
            const loadingTimerId = window.setTimeout(() => {
                setPageLoaderPhase('intro');
            }, LOADING_TIME);

            return () => {
                window.clearTimeout(loadingTimerId);
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

    // Intro
    useEffect(() => {
        if (pageLoaderPhase !== 'intro') return;

        const introTimerId = window.setTimeout(() => {
            setPageLoaderPhase('fadeOut');
        }, INTRO_TIME);

        return () => {
            window.clearTimeout(introTimerId);
        };
    }, [pageLoaderPhase]);

    // Fade Out
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
