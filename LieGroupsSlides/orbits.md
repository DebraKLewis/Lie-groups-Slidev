---
marp: true
paginate: true
---

## A little topology terminology

$\newcommand{\fg}{\mathfrak{g}}
\newcommand{\fh}{\mathfrak{h}}
\newcommand{\Ad}{\text{Ad}}
\newcommand{\ad}{\text{ad}}
\newcommand{\sands}{\qquad \text{and}\qquad}
\newcommand{\av}{\mathbf{a}}
\newcommand{\bv}{\mathbf{b}}
\newcommand{\fv}{\mathbf{f}}
\newcommand{\pv}{\mathbf{p}}
\newcommand{\xv}{\mathbf{x}}
\newcommand{\yv}{\mathbf{y}}
\newcommand{\idm}{\mathbb{1}}
\newcommand{\C}{\mathbb{C}}
\newcommand{\R}{\mathbb{R}}
\newcommand{\Rn}{\mathbb{R}^n}
\newcommand{\calF}{{\cal F}}
\newcommand{\calX}{{\cal X}}
\newcommand{\lp}{\left (}
\newcommand{\rp}{\right )}
\newcommand{\setdef}[4]{#1 = \{ #2 \in #3 : #4 \}}
\newcommand{\diffM}{\mbox{Diff}(M)}
\newcommand{\smallfrac}[2]{{\textstyle {#1 \over #2}}}
\newcommand{\half}{\smallfrac 1 2}
\newcommand{\dep}[1]{\smallfrac {d \ }{d \epsilon} \left . #1 \right |_{\epsilon = 0}}
\newcommand{\eqa}[1]{\begin{align} #1 \end{align}}$A map $\varphi: M \to N$ between topological spaces is a *homeomorphism* if 
   - $\varphi$ is a bijection,
   - $\varphi$ and $\varphi^{-1}$ are continuous.
$~$

A differentiable map $\varphi: M \to N$ between differentiable manifolds is an *immersion* 
if $d_p \varphi$ is injective for all $p \in M$.

$\varphi$ is a *submersion* if $d_p \varphi$ is surjective for all $p \in M$.
$~$

An immersion is an *embedding* if is homeomorphic onto its image.

---

### Relationships between linearizations and local behavior

(One simple version of the) ***Inverse Function Theorem***: 

Let $F: U ⊂ {\mathbb R}^n → {\mathbb R}^n$ be differentiable mapping. 
If $dF_p: {\mathbb R}^n → {\mathbb R}^n$ is invertible, 
$\Longrightarrow \ \ {}$ there is a neighborhood $V \subset U$ of ${\mathbf p}$ and a neighborhood $W \subset {\mathbb R}^n$ of $F(p)$ such that $F|_V: V → W$ has a differentiable inverse $(F|_V)^{−1}: W → V$.
$~$
I.e., invertibility of the linearization implies local invertibiilty of the original mapping: 
if the linearization of a differentiable map $F$ at some point $p$ is invertible, then the restriction of $F$ to some open set $U$ containing $p$ is a diffeomorphism between $U$ and $F(U)$.
$~$

---

***Rank Theorem***: Assume $𝑀$ and $𝑁$ are manifolds of dimension $𝑚$ and $𝑛$, $𝑝∈𝑀$, and $𝐹:𝑀→𝑁$ is smooth.

If $d_q𝐹:𝑇𝑞𝑀→𝑇_{𝐹(𝑞)}𝑁$ has rank $𝑘$ for all $q$ in a neighborhood of $𝑝$, 
$\Longrightarrow \ \ {}$ are coordinates $(𝑥_1, \ldots ,𝑥_𝑚)$ around $𝑝$ and $(𝑣_1, \ldots,𝑣_𝑛)$ around $𝐹(𝑝)$ such that the coordinate representation of $F$ is
$$
𝐹(𝑥_1,\ldots,𝑥_𝑚)=(𝑥_1,…,𝑥_𝑘,0,…,0).
$$
$~$
Via these theorems and their relatives, knowing that a map is an immersion/submersion/both implies some important qualitative ***local*** behavior.
$~$
If the manifolds in question are Lie groups and $F$ (resp. $d_g F$) is a group (resp. algebra) homomorphism, we can sometimes infer global properties from the local behavior. 


---

### Some more terminology

A map is *open* if it sends open sets to open sets.

A *covering map* is a surjective open map that is locally a homeomorphism, i.e. each point in the domain has a neighborhood such that the restriction of the map to that neighborhood is a homeomorphism. 

If $\varphi: M \to N$ is a covering map, $\varphi^{-1}(q)$ is a discrete set for any $q \in N$, and the cardinality of $\varphi^{-1}(q)$ is independent of $q$.
$~$
A topological space is *simply connected* if it is path-connected and every loop in the space can be continuously shrunk to a point.
$~$
If $M$ is simply connected, every covering map on $M$ is a homeomorphism.  

---

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

---

### From Tuesday, the second Lie theorem: 

If $G_1$ is a connected and simply connected Lie group, then for any Lie group $G_2$, 
$$
\text{Hom}(G_1, G_2) = \text{Hom}(\fg_1, \fg_2).
$$
$~$
We showed last week that a morphism of Lie groups determines a morphism of Lie algebras, and
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

## Action stuff: Infinitesimal generators, stabilizers, orbits, etc.

An action $\rho$ of a group $G$ on a manifold $M$ determines a subalgebra  of the Lie algebra $\calX(M)$ of smooth vector fields.

The *infinitesimal generator* associated to the action $\rho$ and algebra element $\xi \in \fg$ is given by 
$$
\xi_M(p) := \dep {\rho(\exp(t \, \xi))(p)} .
$$
$~$
Equivalently, given $p \in M$, define $\Phi_p: G \to M$ by
$$
\Phi_p(g) := \rho(g)(p).
$$
Then 
$$
\xi_M(p) = d_1 \Phi_p(\xi).
$$

---

### Examples

If $M = G$ and $\rho(g) = L_g$, then 
$$
\xi_G = X_\xi^R, \qquad \text{i.e.} \qquad 
\xi_G(g) = d_1 R_g(\xi),
$$ 
since
$$
\Phi_h(g) = \rho(g)(h) = g \, h = R_h(g) \qquad \Longrightarrow \qquad \Phi_h = R_h.
$$
$~$
Analogously, if $\rho(g) = R_{g^{-1}}$, then $\Phi_h = L_h \circ \iota$
$$
\xi_G = - X_\xi^L,
$$ 
$~$
If $M = \fg$ and $\rho(g) = \Ad_g$, then $\ \xi_G = \ad_\xi$. 
$~$


---

## Stabilizers and isotropy

Given an action $\rho$ of a Lie group $G$ on a manifold $M$, for any $p \in M$, the *stabilizer (isotropy subgroup)* of $p$ is
$$
G_p := \{g \in G : g \cdot p := \rho(g)(p) = p \}.
$$
$~$
***Claim:*** $G_p$ is a closed Lie subgroup of $G$, with 
$$
T_g G_p = \ker d_g \Phi_p = d_1 L_g(\fg_p),
$$
where
$$
\setdef{\fg_p} \xi \fg {\xi_M(p) = 0}.
$$  
$~$
$~$
$~$

---

*Verify:* If we define 
$$\eqa{
\Phi_p: G &\to M \\
\Phi_p(g) &:= g \cdot p, 
}
$$
then 
$$
G_p = \Phi_p^{-1}(p).
$$
Since $\Phi_p$ is continuous, $G_p$ is a closed subgroup of $G$, and thus a closed Lie subgroup.
$~$
$$
T_g G_p \subseteq \ker d_g \Phi_p,
$$
since for any smooth curve $\ \gamma: (-\epsilon, \epsilon) \to G_p\ {}$, $\ \Phi_p \circ \gamma\ {}$ is constant.

To show that $\ T_g G_p \supseteq \ker d_g \Phi_p,\ {}$ given $v_g \in \ker d_g \Phi_p$, we need to construct a curve $\gamma: (-\epsilon, \epsilon) \to G_p\ {}$ with $\gamma'(0) = v_g\ {}$.  
$~$

---

Crucial identity: For any $g \in G$,
$$
\Phi_p \circ L_g = \rho(g) \circ \Phi_p,
$$
since $\ (g h) \cdot p = g \cdot (h \cdot p)$.

Linearizing at $1$ in the direction of $\eta \in \fg$ gives
$$
%d_g \Phi_p(X_\eta^L(g)) = 
d_g \Phi_p(d_1 L_g(\eta))
= d_p \rho(g)(d_1 \Phi_p(\eta)).
%&= d_p \rho(g)(\eta_M(p)).%
$$
$~$
Start with the case $g = 1$: Consider $\ \xi \in \ker d_1 \Phi_p$ and define 
$$
\gamma(t) := \exp(t \, \xi), \qquad \text{with}\qquad \gamma'(t) = X_\xi^L(\gamma(t)) = d_1 L_{\gamma(t)}(\xi).
$$

Taking $g = \gamma(t)$ and $\eta = \xi$, we see that 
$$
\smallfrac {d \ }{dt} \Phi_p(\gamma(t)) = d_{\gamma(t)} \Phi_p(d_1 L_{\gamma(t)}(\xi))
= d_p \rho(\gamma(t))(d_1 \Phi_p(\xi)) = 0.
$$
Hence $\gamma(t) \in G_p$. 

---

General case: Given $v_g \in \ker d_g \Phi_p$, if we set
$$
\xi := d_gL_{g^{-1}}(v_g) \in \fg, \sands \gamma(\epsilon) := g \, \exp(\epsilon \, \xi),
$$
then
$$
\gamma'(0) = d_1 L_g(\xi) = d_1 L_g(d_gL_{g^{-1}}(v_g)) = d_1 (L_g \circ L_{g^{-1}})(v_g) = v_g,
$$
and
$$\eqa{
    0 &= d_p\rho(g^{-1})(d_g\Phi_p(v_g)) \\
    &= d_1 \Phi_p(d_1 L_{g^{-1}}(v_g)) \\
    &= d_1 \Phi_p(\xi)
}
$$
implies that $\exp(t \, \xi) \in G_p,\ {}$ and hence
$$
\Phi_p(\gamma(t)) = \rho(g)(\Phi_p(\exp(t \, \xi))) = \rho(g)(p) = p,
$$
since $g \in G_p$.

---

## Orbits

For any $p \in M$, 
$$
{\cal O}_p = G \cdot p := \{g \cdot p : g \in G\}
$$
is the *orbit* of $p$. 
$~$
If $h \in G_p$, then for any $g \in G$, 
$$
\Phi_p({g h}) = (g h) \cdot p = g \cdot (h \cdot p) = g \cdot p,
$$
so $\Phi_p$ determines a map 
$$\eqa{
\tilde \Phi_p: G/G_p &\to M \\
\tilde \Phi_p([g]) &:= g \cdot p, 
}
$$

---
`
$\tilde \Phi_p$ is injective, with image $G \cdot p$, since 

 $$
\tilde \Phi_p([g]) = \tilde \Phi_p([h]) \ \ 
\Longleftrightarrow \ \  g \cdot p = h \cdot p \ \ 
\Longleftrightarrow \ \ 
g^{-1} h \in G_p\ \
 \Longleftrightarrow \ \ [g] = [h].
 $$
$~$

The linearization of the crucial identity again:
$$\begin{align}
d_g \Phi_p(X_\eta^L(g)) &= 
d_g \Phi_p(d_1 L_g(\eta)) \\
&= d_p \rho(g)(d_1 \Phi_p(\eta))\\
&= d_p \rho(g)(\eta_M(p)).
 \end{align}
$$
$~$
Hence $\tilde \Phi_p$ is an immersion, and
$$
T_p (G \cdot p) = \{ \eta_M(p) : \eta \in \fg \} \approx \fg/\fg_p.
$$

---

## Quotient spaces and orbits

Given an action $\rho$ of a Lie group $G$ on a manifold $M$, define 
$$
M/G := M/\! \sim, \qquad \text{where}\quad p \sim q \ \ \Longleftrightarrow \ \ q \in G \cdot p. 
$$
$M/G$ has the quotient topology: $U \subset M/G$ is open $\ \Longleftrightarrow\  \pi^{-1}(U)\ {}$ is open in $M$.
$~$
***Example of a non-Hausdorff quotient:***

$G = \R^+$, $M = \R$, and $g \cdot p = g \, p$.
$$
M/G = \{[-1], [0], [1]\},
$$
with open sets 
$$
\emptyset, \{[-1]\},\{[1]\}, \{[-1],[1]\}, M/G.
$$
The only open set containing $[0]$ is $M/G$, so $M/G$ isn't Hausdorff.

---

***Claim:*** If
$$
\setdef R {(p, g \cdot p)} {M \times M} {p \in M, g \in G}
$$
is closed, then the quotient topology on $M/G$ is Hausdorff. 

*Verify:* Given $p, \tilde p \in M$, if $\{ V_j\}$ and $\{ \tilde V_j \}$ are nested bases of nbhds of $p$ and $\tilde p$, then
$$
U_j := \pi(V_j) \sands $\tilde U_j := \pi(\tilde V_j)
$$
are nested bases of nbhds of $[p]$ and $[\tilde p]$. NTS that
$$
U_j \cap \tilde U_j \neq \emptyset \quad \forall \ j \qquad \Longrightarrow \qquad [p] = [\tilde p].
$$

$U_j \cap \tilde U_j \neq \emptyset \ \Longrightarrow \ \exists \ m_j \in V_j, \tilde m_j \in \tilde V_j, \ \text{and} \ g_j, \tilde g_j \in G\ {}$ satisfying
$$
g_j \cdot m_j = \tilde g_j \cdot \tilde m_j,
$$ 
and hence
$$
(m_j, \tilde m_j) = (m_j, (\tilde g_j^{-1} g_j) \cdot p_j) \in R.
$$

---

$R$ closed $\ \Longrightarrow$
$$
(p, \tilde p) = \lim_{j \to \infty}(m_j, \tilde m_j) \in R,
$$
so $\exists \ g \in G\ {}$ such that $\ \tilde p = g \cdot p, \ {}$ and hence $\ [\tilde p] = [p]$.
$~$

***Claim:*** $M/G$ has a smooth manifold structure such that $\ \pi: M \to M/G \ {}$ is a submersion $\ \Longleftrightarrow \ R\ {}$ is a closed submanifold of $\ M \times M$. 

See, e.g., Theorem 4.1.20 in the *Foundations of Mechanics* excerpt for the proof. 
$~$

***Special case:*** If $H$ is a closed subgroup of $G$, then $G/H$ is a smooth manifold and the projection is a submersion.
$~$
$~$
$~$

---

### Free, effective, and proper actions

An action is *free* $\ \Longleftrightarrow \ {}$ for every $p \in M$ the map $\Phi_p: G \to M$ given by
$$\Phi_p(g) := g \cdot p
$$
is injective, i.e. $G_p$ is trivial for all $p \in M$.
$~$
An action is *effective* (or *faithful*) $\ \Longleftrightarrow \ {}$ it is injective, i.e. if 
$$\rho(g) = \text{id}_M \qquad \Longleftrightarrow \qquad g = 1.$$
$~$
An action is *proper* $\ \Longleftrightarrow \ {}$ the map 
$$\eqa{
\Psi: G \times M &\to M \times M \\
(g, p) &\mapsto (p, g \cdot p)
}
$$
is proper, i.e. preimages of compact sets are compact.

---

If $G$ acts freely and properly on $M$, then 
- $𝜋:𝑀→𝑀/𝐺 \ {}$ is smooth.
- For any manifold $N$ and map $𝑓:𝑀/𝐺→𝑁, \ f \circ \pi$ smooth $\ \Longrightarrow \ f$ smooth.

$~$
$~$
$~$
$~$
$~$
$~$
$~$
$~$
$~$

