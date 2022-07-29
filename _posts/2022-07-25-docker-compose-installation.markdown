---
layout: post
title:  "Install Docker and Docker Compose"
date:   2022-07-25 09:32:15 +0700
categories: [docker, docker-compose]
---

## Install docker
{% highlight ruby %} 
# 1. Update the apt package index and install packages to allow apt to use a repository over HTTPS:
sudo apt-get update
sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

# 2. Add Docker’s official GPG key:
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

# 3. Use the following command to set up the repository:
echo \
  "deb [arch=$(dpkg --print-architecture) \
  signed-by=/etc/apt/keyrings/docker.gpg] \
  https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# 4. Install Docker Engine
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin

# 5. Check version
docker --version
{% endhighlight %}

## Manage Docker as a non-root user
```
sudo usermod -aG docker $USER

# On Linux, you can also run the following command to activate the changes to groups:
newgrp docker
```

## Install docker-compose  
```
sudo apt-get update
sudo apt-get install docker-compose-plugin

# Create a soft symbolic link for docker-compose
sudo ln -s /usr/libexec/docker/cli-plugins/docker-compose /usr/local/bin/docker-compose

# Check version
docker-compose --version
```
