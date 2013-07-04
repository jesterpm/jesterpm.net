---
title: SSH by Selection
date: 2013-07-03
category: blog
layout: blog
---
This last week was my first on-call rotation at work. With each issue I
was working on, I would usually find myself looking at some dashboard of
hostnames and metrics. When I found the suspect machine, I would copy the
hostname, open a new terminal, and type `ssh hostname`. Pretty
straightforward, but I still got tired of doing the same repeative actions
ad nauseam. I turned to one of my co-workers and said "wouldn't it be
great if I could highlight a hostname, press a button, and have a new
shell opened on that host?"

It turns out I can. I use [Ubuntu][] and the [i3][] window manager at
work. X11 has two clipboards: the primary clipboard contains the last
selected text and the secondary clipboard is usually filled 
after you press ctrl+c. I found a utility called [xclip][]
which gives me the contents of either in a shell script. Now I have a
script, [sshclip][], which will launch a terminal and connect to whatever is
in my primary clipboard. I bound the script to super+g for go-to
(really it was the only free key close to ctrl+c).

The script attempts to strip off any surrounding garbage or port numbers from
the hostname, so I don't even need to be picky about what I select.

sshclip is available in my [bin/][bin] git repo.

[ubuntu]: http://www.ubuntu.com/
[i3]: http://i3wm.org/ 
[xclip]: http://sourceforge.net/projects/xclip/
[sshclip]: https://github.com/jesterpm/bin/blob/master/sshclip
[bin]: https://github.com/jesterpm/bin

