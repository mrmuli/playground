### Simple proxy


This is a simple proxy container that exposes an application's endpoints running in a differenr container.


## How this works  

it begins with a simple http server running on port 3000, port forwarded to 3000 on your computer, run from index.js.  

Step 1:   
Build the node Dockerfile as `docker build -t node-foo .`

To confirm whether the server is running, run the command below:  

`docker run -d -p 3000:3000 node-foo` and open your browser at `localhost:3000`  

You can also curl on your terminal as below:  

```
$ curl localhost:3000
Welcome to NodeJS!
```  

Step 2:   
Change directory into the nginx folder and check out the config file, which simply proxies traffic from the `/` endpoint which basically means all traffic to the path `/`, to an upstream `http://app:3000`.  
We are using the dynamic name `app` here in case you're going to use this image elsewhere :)

Build the image as below:  

```
docker build -t nginx-foo .
```

link the proxy container to the node-app container.

```
docker run -d -p 8000:80 --link node-app:app --name nginx-proxy nginx-foo
```

Open your browser on address: `localhost:8000` or curl as below:  

```
$ curl localhost:8000
Welcome to NodeJS!
```
