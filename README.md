# Solution Notes


### Assumptions

- I used [Node.js version 6.0.0+](https://nodejs.org/dist/v6.2.0/node-v6.2.0.pkg) for ES6 support.

- I didn't do any processing of Pay Period.

- I used JSON for input and output files.

- I used [node-tap](http://www.node-tap.org/) for testing.


### Installation

1. Clone repo:

  ```bash
  git clone https://github.com/nmeaney/wavebreak-coding-exercise
  ```

2. Install dependencies:

  ```bash
  npm install
  ```

### Testing

Run tests:

```bash
npm test
```

### Operation

Run program:

```
npm start
```

Results are written to `/data/outputPayslips.json`.


### Folder Structure

- `/data`  - Input & output files.
- `/lib`   - Support files.
- `/test`  - Test files.
- `app.js` - Main file.
