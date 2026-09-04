---
marp: true
paginate: true
---

## Lie's three theorems

$\newcommand{\fg}{\mathfrak{g}}
\newcommand{\fh}{\mathfrak{h}}
\newcommand{\fk}{\mathfrak{k}}
\newcommand{\Ad}{\text{Ad}}
\newcommand{\ad}{\text{ad}}
\newcommand{\sands}{\qquad \text{and}\qquad}
\newcommand{\av}{\mathbf{a}}
\newcommand{\bv}{\mathbf{b}}
\newcommand{\ev}{\mathbf{e}}
\newcommand{\fv}{\mathbf{f}}
\newcommand{\vv}{\mathbf{v}}
\newcommand{\xv}{\mathbf{x}}
\newcommand{\yv}{\mathbf{y}}
\newcommand{\bzero}{\mathbf{0}}
\newcommand{\idm}{\mathbb{1}}
\newcommand{\C}{\mathbb{C}}
\newcommand{\R}{\mathbb{R}}
\newcommand{\Rn}{\mathbb{R}^n}
\newcommand{\calD}{{\cal D}}
\newcommand{\calF}{{\cal F}}
\newcommand{\calX}{{\cal X}}
\newcommand{\lp}{\left (}
\newcommand{\rp}{\right )}
\newcommand{\setdef}[4]{#1 = \{ #2 \in #3 : #4 \}}
\newcommand{\diffM}{\mbox{Diff}(M)}
\newcommand{\smallfrac}[2]{{\textstyle {#1 \over #2}}}
\newcommand{\half}{\smallfrac 1 2}
\newcommand{\dep}[1]{\smallfrac {d \ }{d \epsilon} \left . #1 \right |_{\epsilon = 0}}
\newcommand{\eqa}[1]{\begin{align} #1 \end{align}}$Lie's "three theorems" establish fundamental relationships between Lie algebras and connected Lie groups. 
$~$
 1. For any Lie group $G$, the map
$$H → \fh := T_1 H$$
$\quad \ {}$is a bijection between the set of connected Lie subgroups of $G$ and the set of Lie 
$\quad \ {}$subalgebras of $\fg$.

2. If $G_1$ is a connected and simply connected Lie group, then for any Lie group $G_2$, 
$$
\text{Hom}(G_1, G_2) = \text{Hom}(\fg_1, \fg_2).
$$

3. Any finite-dimensional Lie algebra is isomorphic to the Lie algebra of some Lie group.
$~$

---

*Corollary:* For any finite-dimensional Lie algebra $\fg$, there is a unique (up to isomorphism) connected simply-connected Lie group $G$ with Lie algebra $\fg$. 
$~$
If $\widetilde G$ is a connected Lie group with Lie algebra $\fg$, then there is a discrete central subgroup $Z ⊂ G$ such that $\widetilde G = G/Z$.
$~$
We'll (mostly) prove 1. today, and defer the proof of 2.
$~$
The proof of 3.  relies on Ado's Theorem:

$\quad{}$Any Lie algebra is isomorphic to a subalgebra in $\ gl(n, K), \ K = \R$ or $\C$.

We won't prove that.

---

### Distributions, integral submanifolds, and Frobenius' Theorem

A $k$-*dimensional distribution* ${\cal D} ⊂ TM$ on a smooth manifold $M$ is a smooth assignment of a $k$-dimensional subspace ${\cal D}_p$ of the tangent space $T_p M$ of $M$ at $p$.

More precisely, for every $p \in M, \exists \ {}$ a neighborhood $U$ of $p$ and vector fields $\ X_1, \ldots, X_k \ \in \calX(U)$ such that 
$$
{\cal D}_m = \text{span}\{X_1(m), \ldots, X_k(m)\} \qquad \qquad \forall \ m \in U.
$$
$~$
A vector field $X \in {\cal X}(M)$ *belongs to a distribution* ${\cal D}$ if 
$$
X(p) ∈ {\cal D}_p \qquad \forall \ p ∈ M.
$$
$~$
A distribution ${\cal D}$ is *involutive* if the subspace of ${\cal X}(M)$ of vector fields belonging to ${\cal D}$ 
is a Lie subalgebra of ${\cal X}(M)$.

---

***Examples of distributions.***

- If we identify the tangent space $T_p \Rn$ with $\Rn$, then any $k$-dimensional subspace $S$ of $\Rn$ determines a $k$-dimensional distribution $\calD$ on $\Rn$ with $\calD_{\xv} = S, \ \ \forall \ \xv \in \Rn$. 
Involutive.

- $\calD$ on $\R^3$, with $\ \calD_{\xv} := \mbox{span}\{V, W \}$, where 
$$
𝑉(𝑥,𝑦,𝑧)= \ev_1 + y \, \ev_3 = (1,0,𝑦) \sands  𝑊(𝑥,𝑦,𝑧)=\ev_2 = (0,1,0).
$$ 
$\qquad{}$Not involutive.

- $\calD$ on $\Rn\backslash \{\bzero\}$, with $\ \calD_\xv := \{ \vv \in \Rn : \langle \vv, \xv \rangle = 0 \}, \ {}$. 
Involutive.

- $\calD$ on $SO(3, \R)$, with $\ \calD_U := \mbox{span}\{U \widehat \ev_1, U \widehat \ev_2 \}$. 
Not involutive.

---

An immersed submanifold $N \subseteq M$ is an *integral manifold* of ${\cal D}$ if 
$$
T_p N = {\cal D}_p \qquad \forall \ p ∈ N.
$$
$~$
*Heads up!* &nbsp; Integral manifolds don't need to be embedded submanifolds.
$~$
${\cal D}$ is *completely integrable* if $\ \forall \ p ∈ M, \ \exists \ {}$ an integral manifold of ${\cal D}$ containing $p$.
$~$
A connected integral manifold $N$ of ${\cal D}$ is *maximal* if it contains any other connected integral manifold of ${\cal D}$.
$~$
***Frobenius' Theorem:*** 
If ${\cal D}$ is an involutive distribution on $M$, then for every $\  p ∈ M, \ \exists \ {}$ unique maximal connected integral manifold of ${\cal D}$ containing $p$.

---

***Examples of integral manifolds.***

- Translations of subspaces in $\Rn$. 
Given a $k$-dimensional subspace $S$ of $\Rn$, and point $\xv \in \Rn$, 
$$
N = \{ \xv + \vv : \vv \in S \}
$$
$\qquad{}$is an integral submanifold of our first example of a distribution.

- Nested spheres centered at the origin in $\Rn\backslash \{\bzero\}$ are integral submanifolds of 
$$ \calD_\xv := \{ \vv \in \Rn : \langle \vv, \xv \rangle = 0 \}. $$
$~$
$~$
$~$
$~$

---


### Left (or right) invariant involutive distributions on Lie groups

A distribution ${\cal D}$ on a manifold $M$ acted on by a Lie group $G$ is $G$-*invariant* if 
$$
{\cal D}_{g \cdot p} = d_p \rho(g)({\cal D}_p) \qquad \qquad \forall \ g \in G, p \in M.\phantom{x_\int}
$$

The $G$ action takes integral manifolds of a $G$-invariant distribution ${\cal D}$ to integral manifolds:

***Claim:*** If $N$ is an integral manifold of a $G$-invariant distribution ${\cal D}, \, {}$ and $g \in G,\, {}$ then
$$
g \cdot N = \{ \rho(g)(p):  p \in N \}
$$ 
is an integral manifold of $\calD.$ 

*Verify:* For any $p \in N$ and $g \in G$
$$
\begin{align}
T_{g \cdot p}(g \cdot N) &= d_p \rho(g)(T_p N) \\
&= d_p \rho(g)({\cal D}_p) \\
&= {\cal D}_{g \cdot p}. 
\end{align}
$$

---

***Claim:*** A subalgebra $\fh$ of the Lie algebra $\fg$ of a Lie group $G$ determines an involutive 
$\lozenge$-invariant distribution ${\cal D}$ on $G$ given by
$$
{\cal D}_g := d_1 \lozenge_g(\fh).
$$

*Verify:* Recall that 
$$
\xi \mapsto X^\lozenge_\xi \in \calX(G), 
\qquad \qquad X^\lozenge_\xi(g) = d_1 \lozenge_g(\xi),
$$
is an algebra homomorphism or anti-homomorphism, depending on the handedness of $\lozenge$ and the sign convention used for the bracket of vector fields.
$~$
***Claim:*** The maximal integral submanifold $H$ of $\calD$ containing the identity element is a Lie subgroup of $G$ with Lie algebra $\fh$.
$~$

---

In proving the claim, we'll use the following: 

If $G$ is a connected Lie group and $U$ is a neighborhood of 1, then $U$ generates $G$, 
i.e. any element of $G$ can be expressed as a product of elements of $U$ and their inverses.

*Verify:* Let $\tilde G$ be the subgroup generated by $U$. If $g ∈ \tilde G$, 
$$
g·U = \{ g h : h \in U \}
$$
is a neighborhood of $g$ in $G$.

Hence $\tilde G$ is open in $G$.  

An open subset of a manifold is a submanifold, so $\tilde G$ is a closed Lie subgroup of $G$.

Closed Lie subgroups are closed subsets.  

Hence $\tilde G$ is a nonempty subset of $G$ that is both open and closed in $G$ and thus equals $G$.

---

*Verify the maximal integral submanifold of $\calD$ claim:*

$\lozenge$-invariance of ${\cal D}$ implies that for any $\ h \in H, \ h \cdot H$ is an integral manifold of ${\cal D}$.
$$
h = h \cdot 1 \in h \cdot H \qquad \Longrightarrow \qquad H \cap h \cdot H \neq \emptyset.
$$
$~$
Maximality of $H \ \Longrightarrow \ \ h \cdot H = H. \ {}$ Hence $H$ is closed under multiplication. 
$~$
Given a neighborhood $\ U \subset \fh\ {}$ of $0$, $\lozenge_g(\exp(U)) \ {}$ is an integral manifold of ${\cal D}$ containing $g,$ since for any $\xi \in \fh,$ 
$$
t \mapsto \lozenge_g(\exp(t \, \xi)) 
$$
is an integral curve of $X_\xi^\lozenge$.
$~$

---

Since $\, \exp(U) \subseteq H, \ {}$ given $\ t \in \R \ {}$ and $\xi \in \fh, \ \exists \ n \in {\mathbb N} \ {}$ such that  
$$
\smallfrac t n \, \xi \in U \quad \text{and hence}\quad
\exp(t \, \xi) = \exp\lp \smallfrac t n \, \xi \rp^n \in H.
$$
$~$
Hence $\exp(\fh) \subseteq H$. 

$~$
Since $\exp(\fh)$ generates a connected Lie group, $H$ is a Lie group.
$~$
$~$
$~$
$~$
$~$


---

### Local homomorphisms and local formulations of some Lie theorems

A *local homomorphism* between Lie groups $G$ and $H$ is a smooth map $\ f: U \to V,\ {}$ where $U \subseteq G$ is a neighborhood of $1_G$ and $V \subseteq H$ is a neighborhood of $1_H$ such that
$$
f(g_1g_2) = f(g_1)f(g_2)
$$
when both sides are defined, i.e. when $g_1, g_2$, and $g_1g_2 ∈ U$. 
$~$
$f$ is a *local isomorphism* if
- $f$ is a diffeomorphism
- $f$ and $f^{-1}$ are both local homomorphisms.

$~$
Any local homomorphism determines a Lie algebra homomorphism $\ d_1f: \fg \to \fh$.

---

***Claim:***

1. If $G$ and $H$ are locally isomorphic, then $\fg$ and $\fh$ are isomorphic.

2. If $\fg$ and $\fh$ are isomorphic Lie algebras, then $G$ and $H$ are locally isomorphic Lie groups.

$~$
*Verify:* If $f$ is a local isomorphism between $G$ and $H$, then since $\exists\ {}$ neighborhood $\tilde U \subseteq \fg$ of $0$ such that $\exp|_{\tilde U}$ is a diffeomorphism onto its image,
$$
f \circ \exp = \exp \circ d_1f
$$
implies that $d_1 f$ is a Lie algebra isomorphism, i.e. a bijective Lie algebra homomorphism.
$~$

---

If $\ \psi : \fg → \fh$ is the Lie algebra isomorphism, then
$$
\fk = \{(\xi, \psi(\xi)) : \xi ∈ \fg \}
$$
is a Lie algebra with bracket
$$
[(\xi, \psi(\xi)), (\eta, \psi(\eta))]_\fk = \lp [\xi, \eta]_\fg, [\psi(\xi), \psi(\eta)]_\fh \rp.
$$
$~$
Let $K$ denote the connected Lie subgroup of $G × H$ with Lie algebra $\fk$. 
(The existence of $K$ is guaranteed by our earlier versions Lie's Theorems.) 
$~$

If $P_1: G \times H \to G$ denotes projection onto the first factor, then
$$
\phi := P_1|_K: K \to G
$$
is a Lie group homomorphism and $\ d_1 ϕ : \fk → \fg \ {}$ is bijective.

---

Hence $\ \exists\ {}$ neighborhood $U \subseteq K$ of $1_K$ such that
- $\phi_U$ is a diffeomorphism onto $\phi(U)$
- $\phi(1_K) = 1_G$,

so $\phi$ is a local isomorphism.
$~$
Analogously, projection $P_2: G \times H \to H$ onto the second factor determines a 
Lie group homomorphism
$$
\tilde \phi := P_2|_K: K \to H
$$ 
with bijective $d_1 \tilde \phi$ (since $\psi$ is an isomorphism), etc., so $\tilde \phi$ is also a local isomorphism.

$\tilde \phi \circ \phi^{-1}: G \to H \ {}$ is the desired local isomorphism.

---

### Normal subgroup (with some strings attached) $\ \Longleftrightarrow \ {}$ algebra is an ideal

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

We showed last week that a morphism of Lie groups determines a morphism of Lie algebras, and
$$
\text{Hom}(G_1,G_2) → \text{Hom}(\fg_1, \fg_2)
$$
is injective if $G_1$ is connected. 

---

We still NTS that a morphism $\psi : \fg_1 → \fg_2$ determines a morphism of Lie groups $\Psi: G_1 → G_2$ with $\ d_1 \Psi = \psi$.

Let 
$$
G=G_1×G_2 \sands \fh= \{(\xi,\psi(\xi)): \xi ∈\fg_1 \}⊂ \fg.
$$

$\fh$ is a Lie algebra with bracket
$$
[(\xi, \psi(\xi)), (\eta, \psi(\eta))]_\fk = \lp [\xi, \eta]_\fg, [\psi(\xi), \psi(\eta)]_\fh \rp.
$$
$~$
There is a corresponding connected Lie subgroup 
$$H \hookrightarrow G_1 × G_2.$$

If $P_1: G_1 \times G_2 \to G_1$ denotes projection onto the first factor, then 
$$
d_{(1, 1)}P_1|_{\fh} : \fh \to \fg_1
$$
is an isomorphism. 

---

Exercise 2.3 implies that $P_1|_ H$ is a covering map. 

Since $G_1$ is simply-connected, and $H$ is connected, so $P_1|_ H$ is an isomorphism. 
$~$
The map
$$
\Psi := P_2 \circ \iota_H \circ (P_1|_H)^{-1} : G_1 \to G_2,
$$
where $\iota_H: H \to G_1 \times G_2$ denotes inclusionn and $P_2$ denotes projection onto the second factor, is a morphism of Lie groups, with $d_1 \Psi = \psi$. 


---


