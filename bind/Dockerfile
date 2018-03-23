FROM ubuntu:16.04

RUN apt-get update && apt-get install bind9

COPY db.wt9.ephec-ti.be /etc/bind/
COPY db.intranet.wt9.ephec-ti.be /etc/bind
COPY named.conf /etc/bind
COPY named.conf.default-zones /etc/bind
COPY named.conf.options /etc/bind
COPY named.conf.local /etc/bind

EXPOSE 53 53/udp

CMD ["/usr/sbin/named", "-g", "-c", "/etc/bind/named.conf", "-u", "bind"]
