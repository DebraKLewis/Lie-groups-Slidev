## Recap: a little manifold topology 

A smooth map $\varphi: M \to N$ between smooth manifolds is a *diffeomorphism* if  $\varphi$ is a bijection with smooth inverse.

A smooth map $\varphi$ between smooth manifolds is a *submersion* if $d_p \varphi$ is surjective for all $p \in M$.

$\varphi: M \to N$ is an *immersion* if $d_p \varphi$ is injective $\forall \, p \in M$.

An *immersed submanifold* in a manifold $N$ is a subset $M ⊂ N$ with a manifold structure such that the inclusion map $\iota: M → N$ is an immersion. 

$M ⊂ N$ is a $k$-dimensional *embedded submanifold* (AKA *regular submanifold) of $N$ $\quad \Longleftrightarrow \quad$ for every $p \in M$, there exists a coordinate chart $p \in U\subset N,\varphi :U \to \R^n$, such that 
$$
\varphi(M \cap U) =  \varphi(U) \cap \{ (x_1, \ldots, x_k, 0, \ldots, 0) : x_j \in \R \}.%, j = 1, \ldots, k \}.
$$

$\{ (M \cap U,\varphi \vert_{M\cap U}) \}$  form an atlas for the differential structure on $M$.

---

### More recap: embeddings

A *smooth embedding* is an injective immersion $f : M → N$ such that $M$ is 
diffeomorphic to $f(M)$, where $f(M)$ has the submanifold topology described above.

Injective immersions of compact manifolds are embeddings. 
<br/>

Two injective immersions that *aren't* embeddings:

- Figure eight and related injective immersions of $\R$ into $\R^2$

<p align="center">
  <img alt="figure eight" src="/Images/figureEight.png" width="175" >
</p>

- An irrational winding on the torus, e.g. the trace of a parametrized curve $\R \to T^2 = S^1 \times S^1$ 
$$
t \mapsto \lp e^{i \, t },e^{i\, a \, t}\rp \qquad \qquad a \not \in \mathbb{Q}.
$$

---

## Relationships between linearizations and local behavior
<br/> 

### The Inverse Function Theorem

$F: U ⊂ \R^n → \R^n$ differentiable and $dF_p: \R^n → \R^n$ invertible 
$\ \ \Longrightarrow \ \ {} \newline$
$\exists$ neighborhoods $V \subset U$ of $p$ and $W \subset \R^n$ of $F(p)$ such that $F|_V: V → W$ has a differentiable inverse. 

I.e., invertibility of the linearization at a point implies local invertibiilty of the original mapping. 

### The Constant Rank and Constant Rank Level Set Theorems

Assume $𝑀$ and $𝑁$ are manifolds of dimension $𝑚$ and $𝑛$, $𝑝∈𝑀$, and $𝐹:𝑀→𝑁$ is smooth.

If $d_q𝐹:𝑇𝑞𝑀→𝑇_{𝐹(𝑞)}𝑁$ has rank $𝑘$ for all $q$ in a neighborhood of $𝑝$, 
there are coordinates $(𝑥_1, \ldots ,𝑥_𝑚)$ around $𝑝$ and $(𝑣_1, \ldots,𝑣_𝑛)$ around $𝐹(𝑝)$ such that the coordinate representation of $F$ is
$$
𝐹(𝑥_1,\ldots,𝑥_𝑚)=(𝑥_1, \ldots,𝑥_𝑘,0, \ldots,0).
$$
<Spacer/>

Let $f : M \to N$ be a smooth map, and $c \in $N$.
If $f$ has constant rank $k$ in a neighborhood of $f^{−1}(c)$, then $f^{−1}(c)$ is an embedded submanifold of $M$ of codimension $k$.

<Spacer/>

*Proofs:* See, e.g., Theorems 11.1-2 in Lee's *An Introduction to Manifolds*. (Regular submanifold = embedded submanifold.)

---

### Lie subgroups and closed Lie subgroups

A *Lie subgroup* $H$ of a Lie group $G$ is 
- a subgroup of $G$, and
- an immersed submanifold of $G$.

A *closed Lie subgroup* $H$ of a Lie group $G$ is a Lie subgroup of $G$ that is an embedded submanifold of $G$.

---

***Examples:***

- The matrix groups described earlier are closed Lie subgroups of $GL(n, F)$.

- An irrational winding on the torus is a Lie subgroup, but not a closed Lie subgroup, 
of $T^2 \approx S^1 \times S^1$.

$~$
Any closed Lie subgroup of $G$ is closed in $G$.

Any closed subgroup of a Lie group is a closed real Lie subgroup.
(Proof after we've developed more machinery.)
$~$
$~$

---

## The second Lie theorem: 

If $G_1$ is a connected and simply connected Lie group, then for any Lie group $G_2$, 
$$
\text{Hom}(G_1, G_2) = \text{Hom}(\fg_1, \fg_2).
$$

FIX/CHECK We showed last week that a morphism of Lie groups determines a morphism of Lie algebras, and
$$
\text{Hom}(G_1,G_2) → \text{Hom}(\fg_1, \fg_2)
$$
is injective if $G_1$ is connected. 

We still need to show that a Lie algebra morphism $\psi : \fg_1 → \fg_2$ determines a morphism of Lie groups $\Psi: G_1 → G_2$ with $\ d_1 \Psi = \psi$. 

---

Let 
$$
G=G_1×G_2 \sands \fh= \{(\xi,\psi(\xi)): \xi ∈\fg_1 \}⊂ \fg.
$$

$\fh$ is a Lie algebra with bracket
$$
[(\xi, \psi(\xi)), (\eta, \psi(\eta))]_\fh = \lp [\xi, \eta]_{\fg_1}, [\psi(\xi), \psi(\eta)]_{\fg_2} \rp.
$$
$~$
The first Lie theorem implies that there is a corresponding connected Lie subgroup 
$$\iota_H: H \hookrightarrow G_1 × G_2.$$
$~$
If $P_1: G_1 \times G_2 \to G_1$ denotes projection onto the first factor, then 
$$
d_{(1, 1)}P_1|_{\fh} : \fh \to \fg_1
$$
is an isomorphism. 

---

$P_1|_ H$ is a covering map.

Rough justification: Since $d_{(1, 1)}P_1|_{\fh}$ is an isomorphism, $P_1|_ H$ is a local diffeomorphism.
Since $P_1|_ H$ is a group homomorphism, we can "rachet"/"walk" along a path neighborhood by neighborhood.
$~$
Since $G_1$ is simply-connected, and $H$ is connected, $P_1|_ H$ is an isomorphism. 
$~$
The map
$$
\Psi := P_2 \circ \iota_H \circ (P_1|_H)^{-1} : G_1 \to G_2,
$$
where $P_2$ denotes projection onto the second factor, is a morphism of Lie groups, with $d_1 \Psi = \psi$. 


---

## Normal subgroup (with some strings attached) $\ \Longleftrightarrow \ {}$ algebra is an ideal

A subgroup $H$ of a group $G$ (not necessarily Lie groups) is *normal* if $H$ is invariant under the action of $G$ on itself by conjugation
$$
\rho(g)= L_g \circ R_{g^{-1}},
$$
i.e. if $h \in H$, then $g h g^{-1} \in H$ for any $g \in G$.
$~$
A subspace $\fh$ of a Lie algebra $\fg$ is an *ideal* if $\fh$ is invariant under the endomorphisms $\ad_\xi: \fg \to \fg$ for all $\xi \in \fg$, i.e. if $\xi \in \fg$ and $\eta \in \fh$, then $[\xi, \eta] \in \fh$.
$~$

***Claim:*** If $G$ is Lie group with Lie algebra $\fg$, and $H$ is a normal closed Lie subgroup of $G$, then $\ \fh = T_1H \ {}$ is an ideal in $\fg$, and the Lie algebra of $G/H$ is isomorphic to $\ \fg/\fh$.

---

Conversely, if 
- $H$ is a connected closed Lie subgroup of a connected Lie group $G$, and 
- $\ \fh=T_1H\ {}$ is an ideal in $\fg$, 

then $H$ is normal.

*Verify:* 
$$
\eta ∈ T_1H \ \Longrightarrow\  \exp(t\, \eta) ∈ H \qquad \qquad \forall\ t.
$$
Hence normality of $H$ implies
$$
\exp(t \, \eta) \exp(s \, \xi) \exp(t \, \eta)^{-1} \in H \qquad \qquad \forall\ s, t \in \R, \xi \in \fg,
$$
and hence
$$
[\eta, \xi] = {\smallfrac {\partial^2 \ }{\partial s \partial t} \left . \exp(t \, \eta) \exp(s \, \xi) \exp(t \, \eta)^{-1} \right |_{s = t = 0}} \in \fh,
$$

---

so $\fh$ is an ideal in $\fg$.

$~$
For any $\xi \in \fg$, 
$$
\Ad(\exp_G(\xi)) = \exp_{GL(\fg)}(\ad_\xi) = \sum_{j = 0}^\infty \smallfrac 1 {j!}(\ad_\xi)^j.
$$
Hence if $\fh$ is an ideal in $\fg$, and $\eta \in \fh$, then 
$$
\Ad(\exp_G(\xi))(\eta) = \eta + [\xi, \eta] + \smallfrac 1 2 [\xi, [\xi, \eta]] + \cdots \in \fh.
$$
$~$
The image $\exp(U)$ of a neighborhood $U$ of the origin in $\fg$ under the exponential map generates $G$, so for any $g ∈ G$, $\fh$ is invariant under $\Ad_g$. 

---

Since 
- $g \exp(\eta)g^{−1} = \exp(\Ad_g(\eta))$

- the image under $\exp_H$ of a neighborhood of $0$ in $\fh$ generates $H$, as above, 

- $h_1, h_2 \in H \ \Longrightarrow$
$$
g h_1 h_2 g^{−1} = \lp g h_1 g^{−1} \rp \lp g h_2 g^{−1} \rp \in H, \qquad \text{and}
$$

- $h \in H \ \Longrightarrow$
$$
g h^{-1} g^{−1} =  \lp g h g^{−1} \rp^{-1} \in H,
$$

$H$ is normal. 

---

### More topology

A map is *open* if it sends open sets to open sets.

A *covering map* is a surjective open map that is locally a homeomorphism, i.e. each point in the domain has a neighborhood such that the restriction of the map to that neighborhood is a homeomorphism. 

If $\varphi: M \to N$ is a covering map, $\varphi^{-1}(q)$ is a discrete set for any $q \in N$, and the cardinality of $\varphi^{-1}(q)$ is independent of $q$.

A topological space is *simply connected* if it is path-connected and every loop in the space can be continuously shrunk to a point.

If $M$ is simply connected, every covering map on $M$ is a homeomorphism.  

The *quotient* of a topological space $M$ by an equivalence relation $∼$ is the set
$$
M/\!∼ := \{[x] : x ∈ M\}
$$
of all equivalence classes of $∼$ in $M$. The points of $M/\!∼$ are subsets of $M$.
$~$

The *canonical projection* $π : M → M/\!∼$ given by 
$$
π(x) := [x].
$$ 
$~$
*Quotient topology*: $U \subset M/∼$ is open $\ \Longleftrightarrow\  \pi^{-1}(U)\ {}$ is open in $M$.

If $M$ is a manifold with an equivalence relation $∼$ and ${\mathcal B}$ is an atlas (manifold structure) on the set $M/\!∼$, the manifold $(M/\!∼, {\mathcal B})$ is a *quotient manifold* of $M$ if the canonical projection $π$ is a submersion.