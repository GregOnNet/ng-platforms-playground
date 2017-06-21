import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import { AppServerModuleNgFactory } from '../dist/ngfactory/src/app/app.server.module.ngfactory';

import * as express from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';

enableProdMode();

const port = 9090;
const app = express();

const template = readFileSync(join(__dirname, '..', 'dist', 'index.html')).toString();

// http://expressjs.com/de/4x/api.html#app.engine
app.engine('html', (_, options, callback) => {
  const opts = { document: template, url: options.req.url };

  renderModuleFactory(AppServerModuleNgFactory, opts)
    .then(html => callback(null, html));
});

// http://expressjs.com/de/guide/using-template-engines.html
app.set('view engine', 'html');
app.set('views', 'src');

app.get('*.*', express.static(join(__dirname, '..', 'dist')));
app.get('*', (req, res) => res.render('index', { req }));

app.listen(port, () => console.log(`Magic happens on http://locaolhost:${port}.`));
