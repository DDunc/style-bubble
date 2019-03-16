
## StyleBubble: Use new styled components inside old codebases in splendid isolation

### Problem statement
You're starting to introduce `styled-components` to an existing codebase that already has _quite a lot_ of CSS/SASS/postCSS.
Your styled components are lovely, but they keep going askew because of inherited or top-level element styles. So you
have empty wrapper tags to escape CSS rules, or manually sett `unset` in a lot of places, or use `all` at various
levels in subtle and hard-to-reason about ways, or just abuse `!important.`
 
In any case, you will end up with with very specific properties and undocumented interactions that will become 
tomorrow's mysterious layout tech debt. Or you could be just a little bit more explicit

### Using StyleBubble
```bash
npm i style-bubble
```

```javascript
import React from 'react';
import StyleBubble from 'style-bubble';

const MyIsolatedWidget = (props) => 
  <StyleBubble resetType="initial">
    <MyNewWidget {...props}/>
  </StyleBubble>
```
Remember that StyleBubble is designed to protect you from inadvertent inheritance. If you actually *do* want to inherit
some things, StyleBubble is best paired with a [ThemeProvider](https://www.styled-components.com/docs/advanced#theming)
below it.


```javascript
// deep in the bowels of a legacy enterprise app...
<main className="my-enormous-page-with-legacy-styling-that-your-team-does-not-own">
<section className="foo pony bar baz some__sass__from__2014">
<MyIsolatedWidget/>
</section>
</main>
```
Less time spent sifting through the ruins of a forgotten styling civilization is also less time spent falling into their
traps. 


#### API
`resetType`. Fuctionality and browser support are as defined by the [CSS all spec](https://developer.mozilla.org/en-US/docs/Web/CSS/all#Syntax).
 