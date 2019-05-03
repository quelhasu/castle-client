 <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/105/european-castle_1f3f0.png" align="right" width="100">

# Castle Client
> Client interface for Castle project

You can visit this [link](https://castle-client.herokuapp.com/) to seet it working.

This tool allow accessing firebase database hotels in order to use it in the client interface.

[NextJS](https://nextjs.org/) React JS framework.  
[Boostrap](https://getbootstrap.com/) Frontend style library.  
[Leaflet](https://leafletjs.com/), [Geolib](https://github.com/manuelbieh/Geolib) Interactive map & geolocation library. 
[chart.js](https://www.chartjs.org/) Chart library.
[MaterialTable](https://mbrn.github.io/material-table/#/) Datatable react component.  


This project is a micro-service of _Castle_ project including [castle-api](https://github.com/quelhasu/castle-api) and [castle-cron-job](https://github.com/quelhasu/castle-cron-job).

[Initial README](init-README.md)

## How to use it 

- [Docker Usage](#docker)
- [Routes](#routes)

### <a id="docker"></a> Docker Usage

First, build the Dockerfile:
```bash
$ docker build -t castle-client .
```

Now run this image previously built:
```bash
$  docker run --rm -p 3000:3000 castle-client
```
