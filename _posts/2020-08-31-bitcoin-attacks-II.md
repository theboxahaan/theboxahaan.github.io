---
name: bitcoin-attacks
title: A Compilation of Attacks on Bitcoin-II
tags: bitcoin, blockchain
layout: blog
project: blockchain
proj_url:
order: 2
---

## Majority Attack Or >50% Attack

<img src="https://paper-attachments.dropbox.com/s_14C9898DE368CF2902814BF82BEA010385F0D71F6A45D37EAE6CC171CCD299C9_1558542419101_image17-1.png" width="90%" tag="Bitcoin">
> Bitcoin 

<img src="https://paper-attachments.dropbox.com/s_14C9898DE368CF2902814BF82BEA010385F0D71F6A45D37EAE6CC171CCD299C9_1558542412265_image16-1.png" width="90%" tag="Monero Hash">
> Monero Hash


The above figures show -

1. 50% of the worlds supply of Bitcoin in being mined by only 4 pools
2. An unknown pool controls 42.6% of the **Monero** hash 
3. When a pool takes more and more stake in the hashrate distribution, it defeats the purpose of decentralisation. When a group of miners take over 51% of the hashrate, they can initiate a majority attack.
4. This attack opens up the possibility of Selfish Mining, Cancelling All transactions, Double spending, Random forks

**Attack Conditions**

1. Attacker should control more than 50% of the networks hashrate

**Attack Mechanism**

1. Since the attacker can mine blocks faster than the network, he can continue to build on his fork until it is longer than the fork made by the honest nodes.
2. While mining he keeps collecting the block reward. He does not need to wait for confirmation from the other nodes as he himself represents the majority.
3. Once it becomes the longest chain it will be considered the legal chain.

**Prevention**

1. Bitcoin did face this attack when ***GHash.io*** exceeded the 50% hashrate, however the likelihood of that happening again is very small.
2. Initial Incentives are very low
3. The amount of  capital required to initiate this attack is ***HUGE*** ( because of the high market price of bitcoin )


### Cancelling Transaction Attack

**Usual Scenario**
A miner generally tries to accept incoming transactions, as they are required to build blocks.

**Attack Scenario**

- Suppose Bob controls more than 50% of the hashrate of the network.
- Now it becomes ***feasable*** for him to reject incoming transactions of other nodes. He only mines blocks containing his own transactions.
- This will destroy the cryptocurrency as nobody’s transactions would enter the blockchain



### Random Forks Attack

This attack creates an intentional fork in the blockchain to favour the attacker. The legitimate chain is abandoned and the fraudulent blockchain becomes the legit one. This is also called the **Alternative History Attack** 

**Attack Mechanism**

1. Attacker spends 50 BTC on a Bugatti Veron in the honest branch of the blockchain and receives the car.<br><br>
<img src="https://paper-attachments.dropbox.com/s_14C9898DE368CF2902814BF82BEA010385F0D71F6A45D37EAE6CC171CCD299C9_1558092090643_p1.png" width="50%">

2. He starts mining his own separate branch from the previous block but doesn’t broadcast his blockchain yet<br><br>
<img src="https://paper-attachments.dropbox.com/s_14C9898DE368CF2902814BF82BEA010385F0D71F6A45D37EAE6CC171CCD299C9_1558092390056_p21.png" width="60%">

3. The honest miners keep working on the legit branch. The attacker has much more power and therefore creates a longer branch quickly. When this branch is longer then the legit branch, he broadcasts it.<br><br>
<img src="https://paper-attachments.dropbox.com/s_14C9898DE368CF2902814BF82BEA010385F0D71F6A45D37EAE6CC171CCD299C9_1558092634625_p3.png" width="90%">

4. The honest nodes now see a longer chain and start building on it as they think its more trustworthy.<br><br>
<img src="https://paper-attachments.dropbox.com/s_14C9898DE368CF2902814BF82BEA010385F0D71F6A45D37EAE6CC171CCD299C9_1558092713197_p5.png" width="90%">

5. In this branch the attacker has not spent his 50 BTC and hence he still has his coins



**References**
1. [https://blockgeeks.com/guides/hypothetical-attacks-on-cryptocurrencies/](https://blockgeeks.com/guides/hypothetical-attacks-on-cryptocurrencies/)
2. [https://medium.com/coinmonks/what-is-a-51-attack-or-double-spend-attack-aa108db63474](https://medium.com/coinmonks/what-is-a-51-attack-or-double-spend-attack-aa108db63474)
3. [https://en.bitcoin.it/wiki/Irreversible_Transactions](https://en.bitcoin.it/wiki/Irreversible_Transactions)

