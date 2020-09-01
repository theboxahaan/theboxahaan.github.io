---
name: bitcoin-attacks
title: A Compilation of Attacks on Bitcoin-I 
tags: bitcoin, blockchain
layout: blog
project: blockchain
proj_url:
order: 1
---
These attacks were a part of the literary survey I did for my research internship. Some of them are pretty cool ;) Overall they make a very interesting and insightful read. Due to sheer volume, I have split them into a four part post. Check em' out !!!

## Double Spend Attacks

The cryptocurrency equivalent of spending the same asset twice.

### Finney Attack

Finney Attack is a type of double spend attack. It is named after *Hal Finney* who described it in the comment below.

[https://bitcointalk.org/index.php?topic=3441.msg48384#msg48384](https://bitcointalk.org/index.php?topic=3441.msg48384#msg48384)

**Attack Conditions**

1. The merchant must accept unconfirmed / 0 confirmation transactions in return of *immediate services*
2. The attacker can mine and control the content of his blocks.

**Attack Mechanism**

1. Attacker mines blocks normally. In the current block ( $$B_1$$ ) that he's mining, he includes a transaction ( $$Tx_1$$ ) that pays a few of his coins to himself.
2. When he solves the puzzle of that block ( $$B_1$$ ), he doesn’t broadcast it. Instead he pays the merchant using the *incoins* of $$Tx_1$$ in a separate transaction $$Tx_2$$.
3. He then sends $$Tx_2$$ to the merchant (who might broadcast the transaction to the miners ). After the merchant provides the services / delivers the goods, the attacker immediately broadcasts the block $$B_1$$ paying the coins to himself.
4. Thus the merchants transaction $$Tx_2$$ will be seen as a double spend.

**Prevention**

1. Merchant should wait for few confirmations before delivering.
2. When immediate delivery is vendor requires, use of *****Escrow payments*** - 1 trusted party.



<img src="https://paper-attachments.dropbox.com/s_14C9898DE368CF2902814BF82BEA010385F0D71F6A45D37EAE6CC171CCD299C9_1558080074592_nonce.png" width="80%">


a. If another block containing $$Tx_2$$  is mined within time t, then attack will fail and the attacker will lose the ***Block Reward*** 
b. $$Probability \: of \: Attack \: failure = \frac{t}{<T>}$$ where $$<T>$$ is the average time before a new block is mined.



### Race Attack

Race attack is also a type of a double spend attack

**Attack Conditions**

1. The merchant must accept unconfirmed / 0 confirmation transactions in return of *immediate services* 
2. Attack becomes a probable event when the miner is in control of 50% of the hashrate of the network

**Attack Mechanism**

1. Attacker sends two conflicting transactions, one paying the vendor $$T_v$$ and the other paying himself $$T_a$$
2. There is a chance that the transaction paying the vendor would be invalidated if the transaction paying himself is mined first.
3. To aid this the attacker can do the following -
    1. He creates helper nodes and sends $$T_a$$ to them 
    2. He sends $$T_v$$ only to the vendor
4. Because of the way the bitcoin peers are connected, there is greater chance that $$T_a$$ would be considered valid as the helper nodes would validate it.
5. However if the attack fails, then the attacker loses the block mining reward. Thus the cost/reward ratio needs to be considered.

**Prevention**

1. Merchant should wait for confirmations before delivering.
2. When immediate delivery is required, use Escrow payments - 1 trusted party
3. Disabling incoming connections (transactions)
4. Connecting to trusted sources
5. ~~Inserting Observers~~
6. ~~Keeping the number of incoming connections above a certain limit.~~
7. **Prevention Method** ***( mentioned in the paper )*** - Spreading alert messages among peers. Assuming majority of the nodes are honest, nodes can spread alert messages so that the vendor is forewarned of the double spend.

 The way the bitcoin network is connected it has been shown [here](https://www.tik.ee.ethz.ch/file/49318d3f56c1d525aabf7fda78b23fc0/P2P2013_041.pdf) that
 -

    1. It takes 6.5 s for block to reach 50% of the nodes
    2. It takes 40 s for block to reach 95% of the nodes
    3. Mean delay= 12.6 s

Hence,  spreading alert messages is an efficient way of preventing race attacks.


<img src="https://paper-attachments.dropbox.com/s_14C9898DE368CF2902814BF82BEA010385F0D71F6A45D37EAE6CC171CCD299C9_1558081915223_nonce1.png" width="80%">

`TX_a` $$\rightarrow$$ Pays the Vendor { *Incoin*: $$`tx_i`$$ }
`TX_b` $$\rightarrow$$ Pays the Attacker { *Incoin*: $$`tx_i`$$ }
If `TX_b` starts getting confirmations from the network, then `TX_a` will be seen as a double spend, and hence be discarded.




### Vector76 Attack

The Vector76 attack is a combination of the above two attacks - It exploits the fact that different parts of the network see the broadcasted transaction at different times.

**Attack Mechanism**

The objective of this attack ( in this case ) is to obtain the services of the node $$E$$ at a lesser cost. 

[https://bitcointalk.org/index.php?topic=36788.msg463391#msg463391](https://bitcointalk.org/index.php?topic=36788.msg463391#msg463391)


1. The attacker $$A$$ creates two nodes - $$N_1$$ and $$N_2$$
2. $$A$$ connects $$N_1$$ to $$E$$ only and $$N_2$$ is well connected to the main network
3. $A$ creates two transactions -
    1. $$T_{high}$$ which is a high value transaction ( of the value of the services of $$E$$ )
    2. $$T_{low}$$ which is a low value transaction

4. Now $$A$$ pre-mines a block containing $$T_{high}$$ and keeps it to himself. He listens to the network for a block announcement.
5. As soon as he hears it he broadcasts his block via $$N_1$$ which is accepted by $$E$$ as valid
6. Once $$E$$ confirms the payment, $$A$$  avails the services and releases $$T_{low}$$ via $$N_2$$ 
7. The main network sees this transaction and rejects the block containing $$T_{high}$$ as a double spend
8. Hence $$A's$$ low value transaction is accepted


 For the attack to be sucessful, the attacker needs to sacrifice one block reward.

![Vector76 Attack](https://paper-attachments.dropbox.com/s_14C9898DE368CF2902814BF82BEA010385F0D71F6A45D37EAE6CC171CCD299C9_1558542278067_Untitled+Diagram.png)



**References**

1. [https://en.bitcoin.it/wiki/Irreversible_Transactions#Race_attack](https://en.bitcoin.it/wiki/Irreversible_Transactions#Race_attack)
2. [https://bitcoin.stackexchange.com/questions/4942/what-is-a-finney-attack](https://bitcoin.stackexchange.com/questions/4942/what-is-a-finney-attack)
3. [https://eprint.iacr.org/2012/248.pdf](https://eprint.iacr.org/2012/248.pdf) 



## Block Witholding Attack

This attack involves withholding of valid blocks by an attacker i.e. once the block has been mined the attacker would not broadcast it to the pool. This attack is carried out when the attacker is a part of a mining pool. Block withholding attacks are of two types -
1. *Sabotage*  - No gain to the attacker 
2. *Lie in Wait* - Profit for the attacker ( Finney Attack )

The attack though not very profitable to attacker is highly damaging to the pool as the whole pool loses the block reward.

**Attack Conditions**

1. Attacker should be able part of a mining pool (for effectiveness)
2. Attacker should have control over his mined blocks.

**Attack Mechanism** 
*Described above*

**Prevention Techniques**

- Prevention techniques involve making the miner uncertain of whether his block is valid or not. 
- That is the miner has to submit his **PoW** without knowing whether its a full **PoW** or a partial **PoW**. example - Rosenfelds and Sirers countermeasures
- The idea is to hide the target value from the miner. This can be done by asking the miner to submit his hashes and the pool manager would evaluate them and decide whether the block is valid or not.
- Also if after being validated if the miner does not submit his block then,the pool manager can penalise the miner by reducing the reward to that miner.


**References**

1. [https://eprint.iacr.org/2018/1211.pdf](https://eprint.iacr.org/2018/1211.pdf)
