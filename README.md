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

Problem:
Emotion's `hydrate` call does not recognize that the styles have already been rendered on the server (see `pages/_document.js`).  As a result, the styles are applied again on the client.

https://ibb.co/g3h4sS

Demo: https://with-emotion-kylrefglbj.now.sh/
* You may need to wait a minute for the instance to initialize

To run the example locally: `npm run dev`
