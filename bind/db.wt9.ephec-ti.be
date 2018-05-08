;
; BIND data file for local loopback interface
; Fichier de zone
$TTL    604800
$ORIGIN wt9.ephec-ti.be.
@       IN      SOA ns.wt9.ephec-ti.be. sebastien.wt9.ephec-ti.be. (
                              2         ; Serial
                         604800         ; Refresh
                          86400         ; Retry
                        2419200         ; Expire
                         604800 )       ; Negative Cache TTL
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
          "p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAq/KPAVmgWbYZrIANTB6XwJ14F1870swCfu0mjXKgpwCOIqGo6tloPbVh0DDZkkqqf2eWQ6h34urbzqW3kNXwCU91mTCP+P6Cqi0RLiQsjIW32qXmrGJzt6gDjsEa3FtS7Tww+iclxFdQQIRQvllydBKnkXV2e5d2YP7p9AorfjtO+oxUoJo4Qbubo8ZZXlT+fX/6n+5VEHCbdb"
          "AAmGl5gGc94T4agHemPaeZiMPXB9vJEi2TPfQBbwWeFZHns+GVE4SykrrSnQ4WIJInbMUzjSHJiHJPvQpQxF+RZC75rk4c8PqxGkyodNsybYPV8vjITdtQmIljvwBuQIgdLYqbQwIDAQAB" ) 
