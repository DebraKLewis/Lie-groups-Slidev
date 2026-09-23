
# Appendix A: Background definitions and results for manifolds

- Smooth maps on manifolds: diffeomorphisms, submersions, immersions, and embeddings

- Relationships between linearizations and local behavior
    - Inverse Function and Rank Theorems
    - The constant rank level set theorem
    - The regular level set theorem

---
routeAlias: immersed-and-embedded-submanifolds
---

## Smooth maps on manifolds

$\varphi: M \to N$ between smooth manifolds is a *diffeomorphism* if $\varphi$ is a smooth bijection with smooth inverse.

$\varphi: M \to N$ is a *submersion* if $d_p \varphi$ is surjective for all $p \in M$.

$\varphi: M \to N$ is an *immersion* if $d_p \varphi$ is injective $\forall \, p \in M$.

An *immersed submanifold* in a manifold $N$ is a subset $M ⊂ N$ with a manifold structure such that the inclusion map $\iota: M → N$ is an immersion. 

A *smooth embedding* is an injective immersion $f : M → N$ such that $M$ is diffeomorphic to $f(M)$, where $f(M)$ has the submanifold topology described above.

Injective immersions of compact manifolds are embeddings. 

$M ⊂ N$ is a $k$-dimensional *embedded submanifold* of $N$ $\quad \Longleftrightarrow \quad$ for every $p \in M$, there exists a coordinate chart $p \in U\subset N,\varphi :U \to \R^n$, such that 
$$
\varphi(M \cap U) =  \varphi(U) \cap \{ (x_1, \ldots, x_k, 0, \ldots, 0) : x_j \in \R \}.%, j = 1, \ldots, k \}.
$$

---

#### Examples of injective immersions that aren't embeddings

Figure eight and related injective immersions of $\R$ into $\R^2$
<p align="center">
  <img alt="figure eight" src="/Images/figureEight.png" width="250" >
</p>

<Spacer />

An irrational winding on the torus, e.g. the trace of a parametrized curve $\R \to T^2 = S^1 \times S^1$ 
$$
t \mapsto \lp e^{i \, t },e^{i\, a \, t}\rp
$$
for irrational $a \in \R$, is another injective immersion that is not an embedding.

---
routeAlias: inverse-function-theorem 
---

## Relationships between linearizations and local behavior
<br/> 

### The Inverse Function Theorem

$F: U ⊂ \R^n → \R^n$ differentiable and $dF_p: \R^n → \R^n$ invertible 
$\ \ \Longrightarrow \ \ {} \newline$
$\exists$ neighborhoods $V \subset U$ of $p$ and $W \subset \R^n$ of $F(p)$ such that $F|_V: V → W$ has a differentiable inverse. 

I.e., invertibility of the linearization at a point implies local invertibiilty of the original mapping. 

### The Rank Theorem

Assume $𝑀$ and $𝑁$ are manifolds of dimension $𝑚$ and $𝑛$, $𝑝 \in 𝑀$, and $𝐹:𝑀 \to 𝑁$ is smooth.

If $d_q𝐹:𝑇𝑞𝑀→𝑇_{𝐹(𝑞)}𝑁$ has rank $𝑘$ for all $q$ in a neighborhood of $𝑝$, 
$\Longrightarrow \ \ {}$ are coordinates $(𝑥_1, \ldots ,𝑥_𝑚)$ around $𝑝$ and $(𝑣_1, \ldots,𝑣_𝑛)$ around $𝐹(𝑝)$ such that the coordinate representation of $F$ is
$$
𝐹(𝑥_1,\ldots,𝑥_𝑚)=(𝑥_1, \ldots,𝑥_𝑘,0, \ldots,0).
$$

*Proofs:* See, e.g., Theorems 5.11 and 5.13 in Lee's *An Introduction to Manifolds*. 

---
routeAlias: constant-rank-level-sets
---

### The constant rank level set theorem

Let $f : M \to N$ be a smooth map, and $c \in N$.
If $f$ has constant rank $k$ in a neighborhood of $f^{−1}(c)$, then $f^{−1}(c)$ is an embedded submanifold of $M$ of codimension $k$. 
$$
f(p) = c \qquad \Longrightarrow \qquad T_p f^{-1}(c) = \ker{d_p f}.
$$
<Spacer/>

*Proof:* See, e.g., Theorem 5.22 in Lee's *An Introduction to Manifolds*. 
<Spacer/>

*Pro tip:* In many situations, it may be convenient or intuitive to use a codomain $N$ that exactly "fits" the situation at hand, so that the rank is not only constant, but equal to the dimension of the codomain. 

The regular level set theorem (next slide) follows immediately from the constant rank level set theorem.

---
routeAlias: regular-level-sets
---

### The regular level set theorem

Let $f:M\to N$ be a smooth map between manifolds. $\ c \in N$ is a *regular value* of $f$ if 
$$
 p\in f^{-1}(c) \qquad \Longrightarrow \qquad d_p f:T_{p}M\to T_{c}N \ \text{is surjective.}
$$
<Spacer size="5px"/>

***Regular level set theorem:*** If $c \in N$ is a regular value of a smooth map $f:M\to N$, then $f^{-1}(c)$ is a closed embedded submanifold of $M$. 

If $f^{-1}(c) \neq \emptyset, \ {}$ then
$$
\dim f^{-1}(c) + \dim N = \dim M
$$
and 
$$
f(p) = c \qquad \Longrightarrow \qquad T_p f^{-1}(c) = \ker{d_p f}.
$$
<Spacer size="5px"/>

*Proof:* See, e.g., Corollary 5.24 in Lee's *An Introduction to Manifolds*. 