---
routeAlias: Lies-three-theorems
---
## Lie's three theorems
<Spacer size="5px"/>

1. For any Lie group $G$, the map
$$H → \fh := T_1 H$$
$\quad \ {}$is a bijection between the set of connected Lie subgroups of $G$ and the set of Lie subalgebras of $\fg$.

2. If $G_1$ is a connected and simply connected Lie group, then for any Lie group $G_2$, 
$$
\text{Hom}(G_1, G_2) \approx \text{Hom}(\fg_1, \fg_2).
$$

3. Any finite-dimensional Lie algebra is isomorphic to the Lie algebra of some Lie group.
<Spacer/>

***Corollary:*** For any finite-dimensional Lie algebra $\fg$, there is a unique (up to isomorphism) connected simply-connected Lie group $G$ with Lie algebra $\fg$. 
<Spacer size="5px"/>

If $\widetilde G$ is a connected Lie group with Lie algebra $\fg$, $\exists$ discrete central subgroup $Z ⊂ G$ such that $\widetilde G \approx G/Z$.

---

### Proving Lie's three theorems
<Spacer size="5px"/>

We'll (mostly) prove theorems 1. and 2., after developing some machinery over the next few slides.
<Spacer size="5px"/>

To prove theorem 1., we'll construct connected Lie subgroups by applying [Frobenius' Theorem](integral-manifolds) to <br/> 
[distributions](distributions) determined by [$\lozenge$-invariant vector fields](LR-invariant-vector-fields). 
<Spacer />

The proof of theorem 2. follows from theorem 1. via the graph of the Lie algebra homomorphism, <br/> plus a little bit of covering space theory.
<Spacer/>

The proof of theorem 3. uses [Ado's Theorem](https://terrytao.wordpress.com/2011/05/10/ados-theorem):

$\quad{}$Any Lie algebra is isomorphic to a subalgebra of $\,\mathfrak{gl}(n, F), \ F = \R$ or $\C$.

We won't prove Ado's Theorem or theorem 3.

---

### $G$-invariant involutive distributions 

A [distribution](distributions) $\calD$ on a manifold $M$ acted on by a Lie group $G$ is $G$-*invariant* if 
$$
\calD_{g \cdot p} = d_p \rho(g)(\calD_p) \qquad \qquad \forall \ g \in G, p \in M.
$$

The $G$ action takes [integral manifolds](integral-manifolds) of a $G$-invariant distribution $\calD$ to integral manifolds:

***Claim:*** If $N$ is an integral manifold of a $G$-invariant distribution $\calD$ and $g \in G,\, {}$ then
$$
g \cdot N := \{g \cdot p \, : \, p \in N\}
$$ 
is an integral manifold of $\calD.$ 

*Verify:* For any $p \in N$ and $g \in G$
$$
\eqa{
T_{g \cdot p}(g \cdot N) &= d_p \rho(g)(T_p N)  \\
&= d_p \rho(g)(\calD_p)  \\
&= \calD_{g \cdot p}. 
}
$$

---

### Subalgebras determine Lie subgroups

Recall that the map $\xi \mapsto X^\lozenge_\xi$, where
$$ 
X^\lozenge_\xi(g) = d_1 \lozenge_g(\xi),
$$
from $\fg$ to the Lie algebra of [$\lozenge$-invariant vector fields](LR-invariant-vector-fields) is an algebra homomorphism or anti-homomorphism.<br/>

Hence a Lie subalgebra $\fh$ of $\fg$ determines an involutive 
$\lozenge$-invariant distribution $\calD^\fh$ on $G$:
$$
\calD^\fh_g := \{ X^\lozenge_\xi(g) \, : \, \xi \in \fh \}.
$$
<Spacer/>

***Claim:*** The maximal connected integral submanifold $H$ of $\calD^\fh$ containing the identity element is a Lie subgroup of $G$ with Lie algebra $\fh$.

*Verify:* $h \in H \ \ \Longrightarrow \ \ h \cdot H$ is a maximal connected integral submanifold of $\calD^\fh$. 

$h \in H \cap h \cdot H$ and maximality of $H \ \ \Longrightarrow \ \ h \cdot H = H \ \ \Longrightarrow \ \ H$ is closed under multiplication.

*Proof continues on next slide*

---

#### Second slide of the proof that subalgebras determine Lie subgroups
<Spacer size="5px"/>

$t \mapsto \lozenge_g(\exp(t \, \xi)) \ {}$
is an integral curve of $X_\xi^\lozenge$ containing $1$, so
Frobenius' Theorem $\ \ \Longrightarrow$ <br/>
$\exists\,{}$ neighborhood $U$ of $0$ in $\fh$, such that $\, \lozenge_g(\exp(U)) \, {}$ is an integral manifold of $\calD^\fh$ containing $g$. 

Maximality of $H \ \ \Longrightarrow \ \ \exp(U) \subseteq H$

$\exp(U)$ generates a connected Lie subgroup. 

Closure of $H$ under multiplication $\ \ \Longrightarrow \ \ {}$ that subgroup equals $H$.

<!--
$\Longrightarrow \ \ {}$ given $\ t \in \R \ {}$ and $\xi \in \fh, \ \exists \ n \in {\mathbb N} \ {}$ such that $\, \smallfrac t n \, \xi \in U\,{}$

$\Longrightarrow \ \ \exp(t \, \xi) = \exp\lp \smallfrac t n \, \xi \rp^n \in H$.

$\Longrightarrow\ \ \exp(\fh) \subseteq H$.

The image under the exponential map of a neighborhood of $0$ in $\fh$ is thus a neighborhood of $1$ is $H$.
-->

---

### Connected components and universal covers of Lie groups

***Claim:*** The connected component $G^0$ of a real or complex Lie group $G$ that contains the identity element is a Lie subgroup and a normal subgroup of $G$.

*Verify:* Multiplication, inversion, and inner automorphisms are continuous maps that fix the identity element. 

Continuous maps take connected spaces to connected spaces, so the group operations and inner automorphisms preserve $G^0$. 
<Spacer size="5px"/>

The quotient group $G/G^0$ is discrete, consisting of the "labels" of the connected components of $G$.
<Spacer size="5px"/>

***Claim:*** The universal cover $\tilde G$ of a connected Lie group $G$ is a Lie group
such that the covering map
$p :\tilde G → G$ is a Lie group morphism with kernel isomorphic to the fundamental group of $G$.

$\text{ker}\, p$  is a discrete central subgroup of $\tilde G$.

*Rough idea of proof:* General covering space results guarantee that choices of "upstairs" elements in $\tilde G$ determine unique lifts of the group operations. 

---

#### Proof of [Lie's second theorem](Lies-three-theorems)

Let $G_1$ be connected and simply connected, and let $f : \fg_1 \to \fg_2$ be a Lie algebra homomorphism.

The graph
$$
\fh := \{( \xi, f(\xi)) \, : \, \xi \in \fg_1 \}
$$
of $f$ is a Lie subalgebra of $\fg_1 \times \fg_2$.

The first of Lie's three theorems $\ \ \Longrightarrow \ \ \exists \ {}$  connected Lie subgroup $H$ of $G_1 × G_2$ with Lie algebra $\fh$.

Composition of inclusion of $H$ in $G_1 × G_2$ with projection onto the first factor gives a Lie group homomorphism $π : H → G_1$ such that $d_1 \pi$ is an isomorphism.

$\ \ \Longrightarrow \ \  \pi$ is a covering map.  (Exercise 2.3 in Kirillov.)

$G_1$ simply connected $\ \ \Longrightarrow \ \  \pi$ is an isomorphism. 

The composition $\phi : G_1 \to G_2$ of projection onto the second factor of $H$ with $\pi^{-1}$ is a Lie group homomorphism with $d_1 \phi = f$.

---

### Normal subgroup (with some strings attached) $\ \Longleftrightarrow \ {}$ algebra is an ideal

*Recall:* A subgroup $H$ of a group $G$ is *normal* if $H$ is invariant under inner automorphisms,
i.e.
$$
g \in G, h \in H  \qquad \Longrightarrow \qquad g h g^{-1} \in H .
$$
<Spacer size="5px"/>

A subspace $\fh$ of a Lie algebra $\fg$ is an *ideal* if $\fh$ is invariant under the endomorphisms $\ad_\xi: \fg \to \fg$<br/> for all $\xi \in \fg$, i.e. 
$$
\xi \in \fg, \eta \in \fh\qquad \Longrightarrow \qquad [\xi, \eta] \in \fh.
$$

<Spacer/>

***Claim:*** If $G$ is Lie group with Lie algebra $\fg$, and $H$ is a normal closed Lie subgroup of $G$, then $\ \fh = T_1H \ {}$ is an ideal in $\fg$, and the Lie algebra of $G/H$ is isomorphic to $\ \fg/\fh$.

Conversely, if 
$H$ is a connected closed Lie subgroup of a connected Lie group $G$, and 
$\,\fh=T_1H\,{}$ is an ideal in $\fg$, then $H$ is normal.

---

#### First slide of the proof of the relationship between normal subgroups and ideals

If $H$ is a normal closed Lie subgroup of $G$, normality of $H$ implies
$$
\exp(t \, \xi) \exp(s \, \eta) \exp(t \, \xi)^{-1} \in H 
$$
for all $s, t \in \R, \xi \in \fg, \eta \in \fh$, and hence
$$
[\xi, \eta] = {\smallfrac {\partial^2 \ }{\partial s \partial t} \left . \exp(t \, \xi) \exp(s \, \eta) \exp(t \, \xi)^{-1} \right |_{s = t = 0}} \in \fh,
$$
so $\fh$ is an ideal in $\fg$.
<Spacer size="5px"/>

Conversely, assume $\fh$ is an ideal.
$$
\textstyle{\Ad(\exp_G(\xi)) = \exp_{GL(\fg)}(\ad_\xi) = \sum_{j = 0}^\infty \frac 1 {j!}(\ad_\xi)^j}\qquad \forall \ \xi \in \fg, 
$$
and hence $\eta \in \fh \ \ \Longrightarrow$ 
$$
\Ad(\exp_G(\xi))(\eta) = \eta + [\xi, \eta] + \smallfrac 1 2 [\xi, [\xi, \eta]] + \cdots \ \in \fh.
$$

---

#### Second slide of the proof of the relationship between normal subgroups and ideals
<Spacer size="5px"/>

$G$ connected $\ \ \Longrightarrow \ \ G$ is generated by the image under $\exp$ of any neighborhood of $0$ in $\fg$.

$\Longrightarrow \ \ \fh$ is invariant under $\Ad_g$ for all $g \in G$, i.e. $\fh$ is a representation of $G$ with $\rho(g) = \Ad_g|_\fh$. 
<Spacer size="5px"/>

If we define $\psi: H \to \text{End}(G)$ and $\tilde H \subset H$ by 
$$
\psi(h)(g) := \psi_h(g) := g h g^{-1} 
\sands
\setdef {\tilde H} h H {\psi_h(G) \subseteq H}, 
$$

$\tilde H$ is a subgroup of $H$. $\, H$ is normal $\ \ \Longleftrightarrow \ \ H = \tilde H$.
<Spacer size="5px"/>

$$
L_g \circ R_{g^{−1}} \circ \exp = \exp \circ \Ad_g \qquad \forall \ \ g \in G
$$
$\Longrightarrow \ \ \exp(\fh) \subseteq \tilde H$. 

The connected closed Lie subgroup $H$ is generated by $\exp\!|_\fh(U)$ for any neighborhood $U$ of $0$ in $\fh$, <br/> so $H = \tilde H$ is normal.

---

## Local homomorphisms and local formulations of some Lie theorems

A *local homomorphism* between Lie groups $G$ and $H$ is a smooth map $\ f: U \to V,\ {}$ where $U \subseteq G$ is a neighborhood of $1_G$ and $V \subseteq H$ is a neighborhood of $1_H$ such that
$$
f(g_1g_2) = f(g_1)f(g_2)
$$
when both sides are defined, i.e. when $g_1, g_2$, and $g_1g_2 ∈ U$. 

A diffeomorphism $f$ is a *local isomorphism* if $f$ and $f^{-1}$ are both local homomorphisms.

Any local homomorphism determines a Lie algebra homomorphism $\ d_1f: \fg \to \fh$.

***Claim:***

1. If $G$ and $H$ are locally isomorphic, then $\fg$ and $\fh$ are isomorphic.

2. If $\fg$ and $\fh$ are isomorphic Lie algebras, then $G$ and $H$ are locally isomorphic Lie groups.

---

#### Proof of the local formulations of some Lie theorems

If $f$ is a local isomorphism between $G$ and $H$, then since $\exists\ {}$ neighborhood $\tilde U \subseteq \fg$ of $0$ such that $\exp|_{\tilde U}$ is a diffeomorphism onto its image,
$$
f \circ \exp = \exp \circ d_1f
$$
implies that $d_1 f$ is a Lie algebra isomorphism, i.e. a bijective Lie algebra homomorphism.

If $\ \psi : \fg → \fh$ is the Lie algebra isomorphism, then
$$
\fk = \{(\xi, \psi(\xi)) : \xi ∈ \fg \}
$$
is a Lie algebra with bracket
$$
[(\xi, \psi(\xi)), (\eta, \psi(\eta))]_\fk = \lp [\xi, \eta]_\fg, [\psi(\xi), \psi(\eta)]_\fh \rp.
$$

Let $K$ denote the connected Lie subgroup of $G × H$ with Lie algebra $\fk$. 
(The existence of $K$ is guaranteed by our earlier versions Lie's Theorems.) 

---

#### Second slide in the proof of the local formulations of some Lie theorems

If $P_1: G \times H \to G$ denotes projection onto the first factor, then
$$
\phi := P_1|_K: K \to G
$$
is a Lie group homomorphism and $\ d_1 ϕ : \fk → \fg \ {}$ is bijective.

$\Longrightarrow \ \ \exists\ {}$ neighborhood $U \subseteq K$ of $1_K$ such that
$\phi|_U$ is a diffeomorphism onto $\phi(U)$ <br/>
$\Longrightarrow \ \ \phi$ is a local isomorphism.

Analogously, projection $P_2: G \times H \to H$ onto the second factor determines a 
Lie group homomorphism
$$
\tilde \phi := P_2|_K: K \to H
$$ 
with bijective $d_1 \tilde \phi$ (since $\psi$ is an isomorphism), etc., so $\tilde \phi$ is also a local isomorphism.

$\tilde \phi \circ \phi^{-1}: G \to H \ {}$ is the desired local isomorphism.
