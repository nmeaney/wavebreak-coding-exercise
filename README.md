# Solution Notes


### Assumptions & Notes

- Used [Node.js version 6.0.0+](https://nodejs.org/dist/v6.2.0/node-v6.2.0.pkg) for ES6 support.

- Didn't do any processing of Pay Period.

- Used JSON for input and output files.

- Used [node-tap](http://www.node-tap.org/) for testing.


### Installation

1. Clone repo:

  ```bash
  git clone https://github.com/nmeaney/wavebreak-coding-exercise
  ```

2. Go to repo folder:

  ```bash
  cd wavebreak-coding-exercise/
  ```

3. Install dependencies:

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
