FROM ubuntu:16.04

RUN apt-get update && apt-get install bind9

COPY db.wt9.ephec-ti.be /etc/bind/db.wt9.ephec-ti.be
COPY db.intranet.wt9.ephec-ti.be /etc/bind/db.intranet.wt9.ephec-ti.be
COPY named.conf /etc/bind/named.conf
COPY named.conf.default-zones /etc/bind/named.conf.default-zones
COPY named.conf.options /etc/bind/named.conf.options
COPY named.conf.local /etc/bind/named.conf.local

EXPOSE 53 53/udp

CMD ["/usr/sbin/named", "-g", "-c", "/etc/bind/named.conf", "-u", "bind"]
