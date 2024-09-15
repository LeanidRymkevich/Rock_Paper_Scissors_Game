### To launch the app follow next steps:

1. From _solution_ folder install project dependencies using command

```
npm install
```

2. To launch the project in the developing mode without code transpilation from TS to JS, execute

```
npm run dev <...args>
```

where ```<...args>``` is of odd number of non-repeated arguments (there must be provided more than 3 arguments).

3. In case you want transpiled version of the project execute

```
npm run build
```
then to launch built project.

```
node dist/app.js <...args>
```
Or to transpile and launch at once you can execute

```
npm run prod <...args>
```
