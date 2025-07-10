import { useRef } from "react"

// useEffect polyfill implementation == custom useEffect hook implementation
const UseCustonEffectHook = (effect, deps) => {
    const isFirstRender = useRef(true);
    const prevDeps = useRef([]);

    // First render
    if(isFirstRender.current){
        isFirstRender.current = false;
        effect();
        // const cleanup = effect();
        // return () => {
        //     if(cleanup && typeof cleanup == 'function')
        //     {
        //         cleanup();
        //     }
        // };
    }

    // When dependency changes or no dependency
    const depsChanged = deps ? JSON.stringify(deps) !== JSON.stringify(prevDeps.current) :  true;

    if(depsChanged) {
        effect();
        // const cleanup = effect();
        // return () => {
        //     if(cleanup && typeof cleanup == 'function' && deps)
        //     {
        //         cleanup();
        //     }
        // };
    }


    prevDeps.current = deps || [];

    // Clean-up function

}

export default UseCustonEffectHook