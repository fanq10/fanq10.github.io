---
layout: post
title:  "Linux Useful Bash Commands"
date:   2022-07-26 22:11:00 +1200
categories: [ linux ]
---

### Create multiple files:
```
for i in {01..35}; do touch file${i}.txt; done
```

### Rename files name for multiple files, which it has to be done in the directory itself 批量改名
```
# For example, we have a number of files extension called '.20220114'
# and we want to remove/renmae the file extension.
# Dry run:
for i in *.20220114; do echo mv $i `echo $i | sed 's/.20220114$//'`; done

# real run
for i in *.20220114; do mv $i `echo $i | sed 's/.20220114$//'`; done
```
