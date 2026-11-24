# getByText vs textContent across `<br>`

    npm install
    npx e2e install   # browser, if needed
    npm test

`textContent()` reads `<p>Line one<br>line two</p>` as `"Line one line two"`, but `getByText("Line one line two")` matches nothing. Only `getByText("Line oneline two")` matches.
