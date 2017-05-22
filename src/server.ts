import 'reflect-metadata';
// was ist das?
import 'zone.js/dist/zone-node';
// renderModuleFactory?
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
// was ist das?
import { AppServerModuleNgFactory } from '../dist-server/ngfactory/src/app/app.server.module.ngfactory';

import * as express from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';

enableProdMode();

const port = 9090;
const app = express();

const template = readFileSync(join(__dirname, '..', 'dist-server', 'index.html')).toString();

// app.engine?
app.engine('html', (_, options, callback) => {
  const opts = { document: template, url: options.req.url };

  renderModuleFactory(AppServerModuleNgFactory, opts)
    .then(html => callback(null, html));
});

// ?
app.set('view engine', 'html');
app.set('views', 'src');

// ?
app.get('*.*', express.static(join(__dirname, '..', 'dist-server')));
app.get('*', (req, res) => res.render('index', { req }));

app.listen(port, () => console.log(`Magic happens on http://locaolhost:${port}.`));
