
docker stop  cap-news
docker rm -f cap-news
docker rmi -f ${docker image ls}
docker-compose -f /home/ubuntu/devops/docker-compose.yml up -d