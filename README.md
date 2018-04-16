This repo demonstrates a problem when using Emotion `css` declarations in a separate file.

# Desired usage
```
// styles/margin.js
import { css } from 'emotion';

export const mt4 = css`margin-top: 4rem;`;
export const mb4 = css`margin-bottom: 4rem;`;
```

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

# Problem
Emotion's `hydrate` call does not recognize that the styles have already been rendered on the server (see `pages/_document.js`).  As a result, the styles are applied again on the client.

<a href="https://ibb.co/g3h4sS"><img src="https://preview.ibb.co/kYmm6n/Screen_Shot_2018_04_16_at_1_04_02_PM.png" alt="issue" border="0" /></a>

# Desired Behavior
To witness the desired behavior, uncomment the line in `pages/index.js` that defines the `mt4` inline.  When rendered with that structure, the server rendered styles are respected.

Demo: https://with-emotion-kylrefglbj.now.sh/
* You may need to wait a minute for the instance to initialize

To run the example locally: `npm run dev`
