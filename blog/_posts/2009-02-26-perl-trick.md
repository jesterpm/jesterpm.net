---
title: Perl Trick
date: 2009-02-26
---
Even though this site is no where near finished, I wanted to write this down.

I was attempting to mirror the old lighthouse homeschool site, so I fired up wget
only to realize the original designer had put the nav into a javascript file to
include on each page. Ok, I thought. Nice trick. I remember using that when I
was 12... Now how to get all of the pages that wget doesn't see.

Now I know just about nothing about perl, but I felt like perl would provide the
simplest solution. So, for future reference, here's my snazzy one-liner:

    cat lighthousehomeschool.net/navbar.js | perl -e "while (<>) {
    print \"http://lighthousehomeschool.net/\", /href='([^']+)'>/, \"\n\"
    }" | xargs wget -m -p
