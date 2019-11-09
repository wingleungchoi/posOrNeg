Positive or Negetive
===

# To train a model
- `$ npm run train`

# To make docker image
- `$ docker build -t your_dockerhub_username/pos-or-neg .`

# To run docker image locally
- `$ docker run -p 80:8080 -d your_dockerhub_username/pos-or-neg`

# To find docker-machine ip
- `$ docker-machine ip`

# To call app in local docker
```
curl -X POST \
  http://your_machine_ip:80/sentiment \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{
	"sentence": "It is a sad news!"
}'
```
