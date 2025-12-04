// @validateExhaustiveEffectDependencies
import {useEffect, useEffectEvent} from 'react';

function Component({x, y, z}) {
  const effectEvent = useEffectEvent(() => {
    log(x);
  });

  // error - do not include effect event in deps
  useEffect(() => {
    effectEvent();
  }, [effectEvent]);
}
