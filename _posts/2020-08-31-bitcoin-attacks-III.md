---
name: bitcoin-attacks
title: A Compilation of Attacks on Bitcoin-III
tags: bitcoin, blockchain
layout: blog
project: blockchain
proj_url:
order: 3
---

## Refund Attacks On Bitcoin's Payment Protocol

The BIP70 payment protocol was introduced as an attempt to reduce the complexity of the payment method. Features of BIP70-

- Merchant IDs can be identified using human readable names instead of public key hashes
- A refund address was also specified by the customer wallet during authorisation for future refunds. However, the refund address itself was not endorsed. This flaw was exploited in two attacks described below.

> **Note - BIP70 is now deprecated with BIP21 being the updated protocol but it has not yet been removed from the current Bitcoin-core**

[https://bitcoin.org/en/payment-processing-guide#qr-codes](https://bitcoin.org/en/payment-processing-guide#qr-codes)

**Overview of BIP70 Protocol** 

<img src="https://paper-attachments.dropbox.com/s_14C9898DE368CF2902814BF82BEA010385F0D71F6A45D37EAE6CC171CCD299C9_1558374258408_Trial-2.png" width="100%">
> Payment is in red as it is not authorised / signed by the customer 


### Silk Road Trader Attack

This attack allowed the customer to divert payments to a silk road trader ( illegal trader ) via an honest merchant while denying involvement in the transaction himself, if caught.
*Silk road* comes from the drug marketplace which made heavy use of bitcoin for transactions.

[https://en.wikipedia.org/wiki/Silk_Road_(marketplace)](https://en.wikipedia.org/wiki/Silk_Road_(marketplace))

> The history of this attack is seriously like something out of movie

**Attack mechanism**

1. Customer $$C$$ , visits the website of Silk road trader $$S$$, and downloads the **payment request** for illegal goods. He now has the payment address of $$S$$ say $$Y$$
2. He searches for an honest merchant $$M$$ who is selling an item for approximately the same price and uses the BIP70 payment protocol.
3. $$C$$ now visits $$M$$*’s website and clicks  Pay Now* and downloads the **payment request.**
4. $$C$$ now creates a transaction $$T$$x with the refund address as $$Y$$ and sends this transaction to the merchant as well as broadcasts it to the BTC network -  the **payment** message.
5. $$C$$ waits and receives the **payment ACK** message from $$M$$
6. $$C$$ now cancels his order and requests refund from $$M$$
7. If all goes according to protocol, $$M$$ sends money to the refund address $$Y$$  which belongs to $$S$$
8. **The illegal trade deal is done !!!**
9. If say the authorities catch $$M$$ for doing business with $$S$$, $$M$$ can show the **payment** message from $$C$$ as proof that he sent it to the refund address. But since **payment** is not signed, $$C$$ can deny any involvement.

<img src="https://paper-attachments.dropbox.com/s_14C9898DE368CF2902814BF82BEA010385F0D71F6A45D37EAE6CC171CCD299C9_1558541839403_Screenshot+2019-05-22+at+9.46.44+PM.png" width="100%">
> Silk Road Trader Attack Flowchart



### Marketplace Trader Attack

The marketplace trader attack also exploits the non-authorization of the refund addresses in the **payment** message.
In practice, Coinbase and BitPay policies encourage customers to provide refund addresses via email.
This opens up an avenue for a phishing style attack that can use the reputation of an honest merchant to encourage customers to buy from a fraudulent website.

**Attack Mechanism**

1. The Rogue Trader $$T$$ first creates a website where he sells products below market price.
2. To encourage customers to buy from his website he advertises that all payments are sent to a trusted merchant such as ***CeX***
3. Suppose a customer $$C$$ buys something from his website and proceeds to checkout.
4. $$C$$ clicks the **pay now** button on $$T's$$ website.
5. $$T$$ now visits the genuine merchant’s website an fetches the **Payment Request** from there which he forwards to $$C$$
6. $$C's$$ wallet opens up the **Payment Request** and displays the human-readable name as well as the number of BTCs required. $$C's$$ confidence is also boosted when he sees the ‘trusted’ merchants name.
7. The exploitation begins once $$C$$ authorises the payment to $$T$$ and broadcasts the transaction
8. $$T$$ detects the transaction on the blockchain and displays a fake confirmation page to $$C$$
9. Now, $$T$$ cancels the order and sends an email to the trusted merchant containing his own address as the refund address
10. According to the policy the merchant sends the refund at the address specified in the email and so $$T$$ receives the coins.


<img src="https://paper-attachments.dropbox.com/s_14C9898DE368CF2902814BF82BEA010385F0D71F6A45D37EAE6CC171CCD299C9_1558541887025_Screenshot+2019-05-22+at+9.47.42+PM.png" width="100%">
> Marketplace Trader Attack Flowchart

**Prevention**

The idea to prevent such attacks is to have the customer publicly endorse each refund address that he sends to the merchant.
If more than one key authorises the transaction then, each key should also endorse it’s own refund address.


**References**
1. [https://eprint.iacr.org/2016/024.pdf](https://eprint.iacr.org/2016/024.pdf)
2. [https://blogs.ncl.ac.uk/security/2016/01/11/refund-attacks-on-bitcoins-payment-protocol/](https://blogs.ncl.ac.uk/security/2016/01/11/refund-attacks-on-bitcoins-payment-protocol/)
