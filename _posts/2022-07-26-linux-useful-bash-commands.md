---
layout: post
title:  "Linux Useful Bash Commands"
date:   2022-07-26 22:11:00 +1200
categories: [ linux ]
---

### Create multiple files:
```bash
for i in {01..35}; do touch file${i}.txt; done
```

### ps commands:

- Sort by CPU:
```
ps aux | sort -n -k 3 | head -n 10
```
- Sort by Memory:
```
ps aux --sort -rss | head -n 10
```

### Find largest file in directory:
```bash
du -a / | sort -n -r | head -n 20
```

### Rename multiple files 批量改名
```bash
# For example, we have a number of files extension called '.20220114'
# and we want to remove/renmae the file extension.
# Dry run:
for i in *.20220114; do echo mv $i `echo $i | sed 's/.20220114$//'`; done

# real run
for i in *.20220114; do mv $i `echo $i | sed 's/.20220114$//'`; done
```
### Fix the offending ssh key in line 6, replace the ln number with the actual error line number
```bash
sed -i '6d' ~/.ssh/known_hosts
```

### extend/add disk without reboot
```bash
echo "- - -" | tee /sys/class/scsi_host/host*/scan
    or 
for host in /sys/class/scsi_host/*; do echo "- - -" | sudo tee $host/scan; ls /dev/sd* ; done
    or
for HOST in /sys/class/scsi_host/host*/scan; do echo "- - -" >  ${HOST}; done
```
