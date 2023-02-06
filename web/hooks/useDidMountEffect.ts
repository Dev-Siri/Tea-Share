import { useEffect, useRef, type MutableRefObject } from "react";

import type { DidMountEffectHook } from "@types";

const useDidMountEffect: DidMountEffectHook = (effect, deps) => {
  const didMount: MutableRefObject<boolean> = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      effect();
    } else {
      didMount.current = true;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useDidMountEffect;
