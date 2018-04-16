This repo demonstrates a problem when using Emotion `css` declarations in a separate file.

```
// styles/margin.js
import { css } from 'emotion';

export const mt4 = css`margin-top: 4rem;`;
export const mb4 = css`margin-bottom: 4rem;`;
```

Desired usage:
```
// pages/index.js
import { mt4 } from '../styles/margin';

export default () => {
  return (
    <div className={mt4}>
      <h1>This should have 4rems margin above it</h1>
    </div>
  )
}
```



Demo: https://with-emotion-kylrefglbj.now.sh/
* You may need to wait a minute for the instance to initialize

To run the example locally: `npm run dev`
