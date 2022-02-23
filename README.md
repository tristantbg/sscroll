# sscroll-ease
Itty-bitty smooth scrolling. **400 bytes gzipped.**

# Usage
```javascript
import sscroll from 'sscroll-ease'

const stop = sscroll(document.getElementById('target'), {
  duration: 500, // ms
  offset: 50 // positive values scroll further
})

stop() // stops scroll
```

## License
MIT License © [Eric Bailey](https://estrattonbailey.com)
