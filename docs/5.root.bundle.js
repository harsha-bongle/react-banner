(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{96:function(s,n,a){"use strict";a.r(n),n.default='<p>While the <code>Banner</code> does provide a dynamic search bar, you still have to handle\ngetting and displaying results. This typically consists of hitting some backend\n<code>onSearch</code> and displaying those results via the <code>searchResults</code> prop. Let\'s\ntake a look at a simple example...</p>\n<p>First, we\'ll add a static list of possible search results and some state to\ntrack what\'s visible.</p>\n<pre><code class="hljs language-diff"><span class="hljs-addition">+ const options = [</span>\n<span class="hljs-addition">+     { title: \'Foo\', description: \'Lorem ipsum dolor...\' },</span>\n<span class="hljs-addition">+     { title: \'Bar\', description: \'Sed tortor eu arcu...\' },</span>\n<span class="hljs-addition">+     { title: \'Baz\', description: \'Curabitur velit dolor...\' },</span>\n<span class="hljs-addition">+     { title: \'Qux\', description: \'Donec imperdiet urna...\' },</span>\n<span class="hljs-addition">+     { title: \'Quz\', description: \'Fusce eu tellus biben...\' }</span>\n<span class="hljs-addition">+ ] </span>\n<span class="hljs-addition">+ </span>\n  export default props => {\n<span class="hljs-addition">+     const [results, setResults] = useState(options)</span>\n<span class="hljs-addition">+</span>\n      return (\n          &#x3C;Banner\n              logo="My Logo"\n              url={ window.location.pathname }\n              items={[\n                  { "content": "Example Link", "url": "/example" },\n                  { "content": "Another", "url": "/another" },\n                  { "content": "Link w/ Children", "url": "/children", "children": [\n                      { "content": "John", "url": "/children/john" },\n                      { "content": "Jill", "url": "/children/jill" },\n                      { "content": "Jack", "url": "/children/jack" }\n                  ]}\n<span class="hljs-deletion">-             ]} /></span>\n<span class="hljs-addition">+             ]}</span>\n<span class="hljs-addition">+             onSearch={ input => {</span>\n<span class="hljs-addition">+                 setResults(options.filter(option => (</span>\n<span class="hljs-addition">+                     option.title.includes(input) ||</span>\n<span class="hljs-addition">+                     option.description.includes(input)</span>\n<span class="hljs-addition">+                 )))</span>\n<span class="hljs-addition">+             }} /></span>\n      )\n  }</code></pre>\n<p>You can add a <code>console.log</code> statement before <code>return</code> to see the how the\n<code>results</code> state updates as you type. Next, you\'ll need to render the search\nresults.</p>\n<pre><code class="hljs language-diff">              onSearch={ input => {\n                  setResults(options.filter(option => (\n                      option.title.includes(input) ||\n                      option.description.includes(input)\n                  )))\n<span class="hljs-deletion">-             }} /></span>\n<span class="hljs-addition">+             }}</span>\n<span class="hljs-addition">+             searchResults={(</span>\n<span class="hljs-addition">+                 &#x3C;div style={{ background: \'white\', borderRadius: 5 }}></span>\n<span class="hljs-addition">+                     { results.map(option => (</span>\n<span class="hljs-addition">+                         &#x3C;div>{ option.title }: { option.description }&#x3C;/div></span>\n<span class="hljs-addition">+                     ))}</span>\n<span class="hljs-addition">+                 &#x3C;/div></span>\n<span class="hljs-addition">+             )} /></span></code></pre>\n<p>We\'ve left out any fancy styling for brevity but you should get the idea at\nthis point. In the real world, you\'d likely hit a RESTful API or some other\nbackend to get results. For example, this site uses <a href="https://www.algolia.com/">Algolia</a> and their\n<a href="https://community.algolia.com/docsearch/">DocSearch</a> service for the <a href="https://github.com/skipjack/react-banner/blob/master/src/site/site.jsx">search implementation</a>. It then renders\nresults via this <a href="https://github.com/skipjack/react-banner/blob/master/src/search-results/search-results.jsx">SearchResults</a> component which pulls some code from\nsome other Algolia SDKs.</p>\n'}}]);
//# sourceMappingURL=5.root.bundle.js.map