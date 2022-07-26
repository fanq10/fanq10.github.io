---
layout: post
title:  "macOS Common Commands"
date:   2022-07-26 22:04:00 +1200
categories: [macos]
---

### Flush DNS:
```
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
```

### Show your actual resolution for various monitors:
```
system_profiler SPDisplaysDataType | grep -C1 Resolution
```

### Restart OSX and have your external keyboards actually work:
```
sudo fdesetup authrestart
```
