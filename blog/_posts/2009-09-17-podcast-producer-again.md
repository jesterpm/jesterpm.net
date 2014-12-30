---
title: Podcast Producer... Again
date: 2009-09-17
---
So, we're still running Leopard Server because I'm waiting for any snow leopard
issues to get ironed out before I upgrade. We were about to put our internal
podcast into use when I noticed Podcast Producer forgot how to talk to
the Xgrid controller. After spending some time staring to the settings, I
finally realized that the Xgrid Controller setting had to be set to the same
domain as the Kerberos domain, which in my case is improperly set to
Server.local instead of the server's actual name.

So, for future reference: The xgrid controller address is tied to the kerberos
domain.

