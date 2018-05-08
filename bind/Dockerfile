FROM ubuntu:16.04

RUN apt-get update && apt-get -y install bind9

COPY db.wt9.ephec-ti.be /etc/bind/db.wt9.ephec-ti.be
COPY db.internal.wt9.ephec-ti.be /etc/bind/db.internal.wt9.ephec-ti.be
COPY named.conf /etc/bind/named.conf
COPY named.conf.default-zones /etc/bind/named.conf.default-zones
COPY named.conf.options /etc/bind/named.conf.options
COPY named.conf.local /etc/bind/named.conf.local

EXPOSE 53 53/udp

CMD ["/usr/sbin/named","-d 9" , "-g", "-c", "/etc/bind/named.conf", "-u", "bind"]
