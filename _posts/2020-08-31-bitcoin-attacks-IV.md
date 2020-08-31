---
name: bitcoin-attacks
title: A Compilation of Attacks on Bitcoin-IV
tags: bitcoin, blockchain
layout: blog
project: blockchain
proj_url:
order: 4
---

## Eclipse Attacks

Eclipse attacks focus on attacking an individual node in the network. The aim of this attack is to control all the outgoing connections of the target in order to isolate it. In blockchains, for the sake of efficiency, nodes connect to only a limited number of nodes instead of all other nodes. In case of Ethereum, it is only 13 and for Bitcoin, it is 8. So, if an attacker controls all of the outgoing connections to the target, the target can be duped by being shown a fabricated version of the blockchain by the attacker.


**Attack Mechanism**

1. Suppose Attacker $$A$$ makes a payment to a node $$C$$ in transaction $$Tx$$
2. Since $$A$$ controls what target node $$B$$ sees, he fabricates the blockchain which $$B$$ receives and does not append $$Tx$$ in it.
3. He pays $$B$$ using the same coins used in $$Tx$$ .
4. Since $$B$$ is looking a modified version of the blockchain, he sees this payment as legitimate.
5. After some confirmations, this attack becomes successful.

<img src="https://paper-attachments.dropbox.com/s_14C9898DE368CF2902814BF82BEA010385F0D71F6A45D37EAE6CC171CCD299C9_1558330343230_Untitled+Diagram.png" width="50%">
> Target node (B) is surrounded with attacker nodes

**Prevention**

1. Increase the number of outgoing connections
2. Randomise neighbour selection procedure 
3. Bundle node identity with some physical resource so that creating multiple identities is tough for the attacker


**References**

1. [https://www.radixdlt.com/post/what-is-an-eclipse-attack/](https://www.radixdlt.com/post/what-is-an-eclipse-attack/)
2. [https://hackernoon.com/eclipse-attacks-on-blockchains-peer-to-peer-network-26a62f85f11](https://hackernoon.com/eclipse-attacks-on-blockchains-peer-to-peer-network-26a62f85f11)


## Time Jacking Attack

- For connected machines that operate across time-zones, being synchronised is vital for correct and accurate functioning. Keeping this requirement in mind the bitcoin network also has a time-stamping feature using which it places an upper and lower bound on the difference in time at which the block was created  and the time at which it arrived to a node.
- Each node in the blockchain network keeps an internal time counter that represents the $$network \;time$$
- $$Network \; Time$$ depends on the median time of a node’s peers ( which is sent during peer connect )
- $$System \;time$$ is defined as local time or [UNIX](http://en.wikipedia.org/wiki/Unix_time) timestamp of the machine.
- This time reverts to $$system\;time$$ if $$\vert System\;Time - Median \; time \; of \; peers \vert > 70\; mins$$
- As a precaution a node rejects a block if -
    1. $\vert Timestamp \; of\; block - Current \; network \; time \vert > 120\; mins$
    2. $Timestamp\;of\;block < median\;time\;of\;past\; 11\; blocks$


- Thus if a node is not properly synchronised before joining the network, it will not be able to receive any blocks from the miners

**Manipulation of internal Time of a Node in a network**

![Green Node’s internal-time is modified to +70](https://paper-attachments.dropbox.com/s_14C9898DE368CF2902814BF82BEA010385F0D71F6A45D37EAE6CC171CCD299C9_1558501402827_Zx.png)



**Attack Mechanism ( time here is relative to current network time )**

1. The attacker first launches a *Sybil Attack* and manipulates the time of the target node to $$-70\;mins$$
2. The attacker also manipulates the time of the miners to $$+70\;mins$$
3. He now mines a block with the timestamp of $$+190\;mins$$ and broadcasts that block
4. The target node rejects this block as the time difference is $$190+70 = 260 > 120\;mins$$ 
5. The miners however accept the block as time difference is $$190-70 = 120\;mins$$ and hence attach it to their blockchain and start mining on it.
6. This causes the blockchain to split and the target to get isolated
7. This attack goes on indefinitely as the time difference of the blocks released by the miners and the target would be $$70+70=140 > 120\;mins$$


**Prevention**

1. Use a centralised time server
2. Use only trusted peers
3. Monitor network health and shutdown on suspicious activity


**References**
1. [http://culubas.blogspot.com/2011/05/timejacking-bitcoin_802.html](http://culubas.blogspot.com/2011/05/timejacking-bitcoin_802.html)


## Mining Pool Attacks

Mining pools are cartels that miners join in order to reduce the variance in their earnings. All the miners belonging to a pool collectively try to solve the puzzle and share the reward among themselves.

**Attack Goals**

1. Sabotage rival mining pool
2. Get more reward then deserved

## Sabotage Attacks and other Block Withholding Attacks

In this attack the rogue miner only submits the partial PoW and never submits the full PoW. Thus the whole pool loses out on the block reward.

[https://www.slideshare.net/vpnmentor/mining-pools-and-attacks](https://www.slideshare.net/vpnmentor/mining-pools-and-attacks)


**Prevention**

[+Attacks on BlockChain: BLOCK WITHHOLDING ATTACK](https://paper.dropbox.com/doc/Attacks-on-BlockChain-BLOCK-WITHHOLDING-ATTACK-ZKdYzPfSziV0ehTD5k1UQ#:uid=789908424709152855291738&amp;h2=BLOCK-WITHHOLDING-ATTACK) 


## DDoS Attacks On Blockchain

Denial of Service ( DoS ) or Distributed Denial of Service ( DDoS ) attacks are events in which the malicious device(es) overwhelm the service provider by sending repeated requests at a rate which it cannot handle and ultimately crashes.

Block Withholding attacks, selfish mining, blacklisting etc. are examples of DoS attacks on blockchain. (D)DoS attacks are still very common on the blockchain, where malicious users try to bring down wallet servers, crypto exchanges etc. DoS attacks can also occur at the application layer level.
A DDoS attack can be launched on a blockchain in the form of a ***Sybil Attack***


### Sybil Attack
> In a Sybil attack, the attacker subverts the reputation system of a peer-to-peer [network](https://en.wikipedia.org/wiki/Computer_network) by creating a large number of [pseudonymous](https://en.wikipedia.org/wiki/Pseudonymity) identities and uses them to gain a disproportionately large influence
                - Wikipedia-  https://en.wikipedia.org/wiki/Sybil_attack

Since a blockchain network is trustless and pseudonymous a single user can create multiple identities that can be used to influence the network. Sybil attacks can be used to launch other attacks such as eclipse attacks, time jacking attacks etc.

**Prevention**

1. PoW based restrictions
2. Quotas on the resources allocated to each node in the network
3. Trusted nodes
4. Monitoring of network for such attacks


> A blockchain is supposed to be resistant to the traditional DoS attacks as there is no central server. Blockchain technologies are being used to mitigate (D)DoS attacks on other platforms.



## Attacks That Slow Down Cryptocurrency Adoption

Attacks that slow down cryptocurrency adoption can be classified into two categories 

**Legal Attacks**\\
Various countries around the world have banned cryptocurrency use such as Bolivia, Ecuador etc. because of reasons ranging from protectionism, fear etc.

**Cyberwarfare**\\
Professional programmers can be hired by governments to wage cyberwarfare on cryptocurrencies belonging to other countries.
    Hackers also end up disrupting cryptocurrency adoption because they attack those systems in order to make a profit. Examples given in the above section.

> [https://www.zdnet.com/article/2018s-most-high-profile-cryptocurrency-catastrophes-ico-failures-and-cyberattacks/
](https://www.zdnet.com/article/2018s-most-high-profile-cryptocurrency-catastrophes-ico-failures-and-cyberattacks/
)
