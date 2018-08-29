FROM ubuntu:16.04

MAINTAINER Joseph Muli <jayjaymuli00@gmail.com>

RUN apt-get update && \
    apt-get install -y nginx && \
	apt-get install -y vim && \
	apt-get install -y iptables

# does nothing but pipe out activity to the Docker daemon, well for now this is sufficient.
RUN ln -sf /dev/stdout /var/log/nginx/access.log
RUN ln -sf /dev/stderr /var/log/nginx/error.log

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
