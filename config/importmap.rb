# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin_all_from "app/javascript/controllers", under: "controllers"
pin_all_from "app/javascript/components", under: "components"

pin "trix"
pin "htm", to: "https://cdn.esm.sh/v45/htm@3.1.1/es2021/htm.js"
pin "@rails/actiontext", to: "actiontext.js"
pin "bootstrap", to: "https://ga.jspm.io/npm:bootstrap@5.1.3/dist/js/bootstrap.esm.js"
pin "@popperjs/core", to: "https://unpkg.com/@popperjs/core@2.11.2/dist/esm/index.js" 


pin "react-dom", to: "https://ga.jspm.io/npm:react-dom@18.2.0/index.js"
pin "process", to: "https://ga.jspm.io/npm:@jspm/core@2.0.0-beta.24/nodelibs/browser/process-production.js"
pin "scheduler", to: "https://ga.jspm.io/npm:scheduler@0.23.0/index.js"
pin "@emotion/react", to: "https://ga.jspm.io/npm:@emotion/react@11.9.3/dist/emotion-react.browser.esm.js"
pin "@babel/runtime/helpers/esm/extends", to: "https://ga.jspm.io/npm:@babel/runtime@7.18.6/helpers/esm/extends.js"
pin "@babel/runtime/helpers/extends", to: "https://ga.jspm.io/npm:@babel/runtime@7.18.6/helpers/esm/extends.js"
pin "@emotion/cache", to: "https://ga.jspm.io/npm:@emotion/cache@11.9.3/dist/emotion-cache.browser.esm.js"
pin "@emotion/hash", to: "https://ga.jspm.io/npm:@emotion/hash@0.8.0/dist/hash.browser.esm.js"
pin "@emotion/memoize", to: "https://ga.jspm.io/npm:@emotion/memoize@0.7.5/dist/emotion-memoize.browser.esm.js"
pin "@emotion/serialize", to: "https://ga.jspm.io/npm:@emotion/serialize@1.0.4/dist/emotion-serialize.browser.esm.js"
pin "@emotion/sheet", to: "https://ga.jspm.io/npm:@emotion/sheet@1.1.1/dist/emotion-sheet.browser.esm.js"
pin "@emotion/unitless", to: "https://ga.jspm.io/npm:@emotion/unitless@0.7.5/dist/unitless.browser.esm.js"
pin "@emotion/utils", to: "https://ga.jspm.io/npm:@emotion/utils@1.1.0/dist/emotion-utils.browser.esm.js"
pin "@emotion/weak-memoize", to: "https://ga.jspm.io/npm:@emotion/weak-memoize@0.2.5/dist/weak-memoize.browser.esm.js"
pin "hoist-non-react-statics", to: "https://ga.jspm.io/npm:hoist-non-react-statics@3.3.2/dist/hoist-non-react-statics.cjs.js"
pin "react", to: "https://ga.jspm.io/npm:react@18.2.0/index.js"
pin "react-is", to: "https://ga.jspm.io/npm:react-is@16.13.1/index.js"
pin "stylis", to: "https://ga.jspm.io/npm:stylis@4.0.13/index.js"
