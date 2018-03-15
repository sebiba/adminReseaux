;
; BIND data file for local loopback interface
; Fichier de zone
$TTL    604800
$ORIGIN wt9.ephec-ti.be
@       IN      SOA ns.wt9.ephec-ti.be. root.wt9.ephec-ti.be (
                              2         ; Serial
                         604800         ; Refresh
                          86400         ; Retry
                        2419200         ; Expire
                         604800 )       ; Negative Cache TTL
;
@       IN      NS      ns.wt9.ephec-ti.be.
ns      IN      A       54.37.65.66
www     IN      A       54.37.65.78
b2b     IN      A       54.37.65.78
intranet IN     A       54.37.65.78
