---
layout: post
title:  "aws cdk bootstrapping"
date:   2023-03-29 22:04:00 +1200
categories: [aws cdk]
---

## Bootstrapping with the AWS CDK Toolkit:
```bash
cdk bootstrap aws://ACCOUNT-NUMBER-1/REGION-1 aws://ACCOUNT-NUMBER-2/REGION-2 ...
```

For example:
```
# bootstrap in account: 123456789012 in region: us-east-1
cdk bootstrap aws://123456789012/us-east-1

# bootstrap in account: 123456789012 in region: us-east-1 and us-west-2
cdk bootstrap 123456789012/us-east-1 123456789012/us-west-2

```

## Customizing bootstrapping:

* **--bootstrap-bucket-name** 
* **--bootstrap-kms-key-id**
* **--cloudformation-execution-policies**
* **--qualifier**: The default value is `hnb659fds`
* **--trust**: Use this flag when bootstrapping an environment that a CDK Pipeline in another environment will deploy into. The account doing the bootstrapping is always trusted.
* **--trust-for-lookup**: Use this flag to give accounts permission to synthesize stacks that will be deployed into the environment, without actually giving them permission to deploy those stacks directly.

## Customizing synthesis:
