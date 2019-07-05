---
type: Blog
title: Better hover animations with pseudo selectors
thumbnail: /img/screen-shot-2019-06-28-at-4.26.13-pm.png
date: 2019-06-28T14:45:53.324Z
description: >-
  How to build better hover interactions in pure CSS using the :before pseudo
  selector
---
<iframe height="404" style="width: 100%;" scrolling="no" title="CSS hover animations with :before psuedo element" src="//codepen.io/oajmeredith23/embed/preview/xopLOp/?height=404&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">  See the Pen <a href='https://codepen.io/oajmeredith23/pen/xopLOp/'>CSS hover animations with :before psuedo element</a> by Oliver Meredith  (<a href='https://codepen.io/oajmeredith23'>@oajmeredith23</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>

## Setting up

This is some simple boilerplate to get setup, nothing essential here, just centering our buttons.
```html
<!--- the div with the class container is not essential to this tutorial --->
<div class="container">  
  <button class="button button-1" type="button">    
    <h3>View</h3>  
  </button>
</div>
```

```sass
.container   
  width: 400px   
  height: 100px   
  margin: 0 auto   
  margin-top: 2em  
  background-color: whitesmoke  
  display: flex   
  justify-content: center  
  align-items: center
```