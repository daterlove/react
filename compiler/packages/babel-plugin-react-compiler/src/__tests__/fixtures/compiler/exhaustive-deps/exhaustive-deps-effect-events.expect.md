
## Input

```javascript
// @validateExhaustiveEffectDependencies
import {useEffect} from 'react';

function Component({x, y, z}) {
  const effectEvent = useEffectEvent(() => {
    log(x);
  });

  // ok - effectEvent not included in deps
  useEffect(() => {
    effectEvent();
  }, []);
}

```

## Code

```javascript
import { c as _c } from "react/compiler-runtime"; // @validateExhaustiveEffectDependencies
import { useEffect } from "react";

function Component(t0) {
  const $ = _c(5);
  const { x } = t0;
  let t1;
  if ($[0] !== x) {
    t1 = () => {
      log(x);
    };
    $[0] = x;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const effectEvent = useEffectEvent(t1);
  let t2;
  if ($[2] !== effectEvent) {
    t2 = () => {
      effectEvent();
    };
    $[2] = effectEvent;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = [];
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  useEffect(t2, t3);
}

```
      
### Eval output
(kind: exception) Fixture not implemented