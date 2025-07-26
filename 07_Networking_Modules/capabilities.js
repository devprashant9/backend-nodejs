import dgram from 'dgram';
import net from 'net';
import http from 'http';
import https from 'https';
import dns from 'dns';


// more or less we can create a different server for each protocol

// these all things are supported by Node.js

// in short Node JS is very powerful in terms of networking capabilities


import os from 'os';
const networkInterfaces = os.networkInterfaces();
console.log('Network Interfaces:', networkInterfaces);