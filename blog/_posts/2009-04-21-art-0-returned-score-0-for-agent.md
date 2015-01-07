---
title: Art "0" returned score "0" for agent
date: 2009-04-21
---
So, I spent quite a bit of time trying to get Podcast Producer running on our
not-so-correctly-setup xserve. After getting podcast producer connected to
Xgrid I thought everything should work. I fired up Podcast Capture and
recorded a screen capture podcast. I pushed publish and watched it go into
the Xgrid jobs list. Then I watched it stay in the Xgrid jobs list indefinitely
while the lone Xgrid agent sat idle. I searched to no avail, then the project
had to sit a while during the Sold Out Youth Conference and Easter services.

I started tackling Podcast Producer again today. With a bit of poking I found
the last job message in Xgrid admin: "Art "0" returned score "0" for agent".
Interesting. Sticking it in google lead me to [the solution to my problem][1].
After updating the UUID, Podcast Producer started working without a hitch.
Now to see how it works in production.

[1]: http://podcastproducer.org/forums/bugs/910799692

