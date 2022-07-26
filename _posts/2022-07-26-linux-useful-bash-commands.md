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

### Rename multiple files 批量改名
```
# For example, we have a number of files extension called '.20220114'
# and we want to remove/renmae the file extension.
# Dry run:
for i in *.20220114; do echo mv $i `echo $i | sed 's/.20220114$//'`; done

# real run
for i in *.20220114; do mv $i `echo $i | sed 's/.20220114$//'`; done
```

### extend/add disk without reboot
```
echo "- - -" | tee /sys/class/scsi_host/host*/scan
    or 
for host in /sys/class/scsi_host/*; do echo "- - -" | sudo tee $host/scan; ls /dev/sd* ; done
    or
for HOST in /sys/class/scsi_host/host*/scan; do echo "- - -" >  ${HOST}; done
```
