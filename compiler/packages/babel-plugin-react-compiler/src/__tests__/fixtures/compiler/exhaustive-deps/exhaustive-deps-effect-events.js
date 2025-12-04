// @validateExhaustiveEffectDependencies
import {useEffect, useEffectEvent} from 'react';

function Component({x, y, z}) {
  const effectEvent = useEffectEvent(() => {
    log(x);
  });

  // ok - effectEvent not included in deps
  useEffect(() => {
    effectEvent();
  }, []);
}
