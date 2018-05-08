$TTL    604800
$ORIGIN wt9.ephec-ti.be.
@       IN      SOA ns.wt9.ephec-ti.be. sebastien.wt9.ephec-ti.be. (
                        2018042         ; Serial
                         604800         ; Refresh
                          86400         ; Retry
                        2419200         ; Expire
                          86400 )       ; Negative Cache TTL
;
@       IN      NS      ns.wt9.ephec-ti.be.
        IN      MX      10       mail

ns      IN      A       54.37.65.66

;service web
www     IN      A       54.37.65.78
b2b     IN      A       54.37.65.78
intranet IN     A       54.37.65.78

;service mail
mail            IN      A       54.37.65.104
smtp            IN      CNAME   mail
pop3            IN      CNAME   mail
imap            IN      CNAME   mail


mail._domainkey IN      TXT     ( "v=DKIM1; h=sha256; k=rsa; "
          "p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2CYXIJul+MQvn8O8BpgXOqJkXmvMK8L8rP3N665fEW2zGl/AY9W1PM0PQR3aQy/PWTOWdrZg3BAk1DkHm1kkThpwwkextx8vSZhdpwvuXK96aSFsp+KVBjKzT4S5kueH4v+RKc8Gu9VFFY9GoknC2k39CdXrVsW4WGnRndoF4xDjZBOwHPar2W+Ce/rsfVwNIk5fwBHS/bzR4i"
          "caqMPDvMfV6HeHbZaZhShiDLjLATzRpC8rzr4S4VqYJq9rwsbrdWLRxF8l+7lHbSrDzBNTOclfr3BMbPWDwRdMujmDjiXuiauw5JGxUqcZWS239p/A7siFVOvBxl4j4NmQtogrzwIDAQAB" )  ; ----- DKIM key mail for wt9.ephec-ti.be
