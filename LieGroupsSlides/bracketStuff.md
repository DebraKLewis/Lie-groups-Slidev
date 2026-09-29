---
routeAlias: LR-invariant-vector-fields
---
## Relationships between the algebra structures of $\fg$ and $\calX(G)$ 
<Spacer size="5px"/>

Naturality with respect to pullback of the [Lie bracket on $\calX(G)$](algebra-vector-fields-dynamic) <br/> $\quad \Longrightarrow \ \ {}$ the Lie bracket of two $\lozenge$-invariant vector fields $X$ and $Y$ is $\lozenge$-invariant:
$$
\lozenge_g^* [X, Y] = [\lozenge_g^* X, \lozenge_g^* Y ] = [X, Y].
$$

Hence the $\lozenge$-invariant vector fields on $G$, $\{ X_\xi^\lozenge \, : \, \xi \in \fg \}$,
form a Lie subalgebra of $\calX(G)$.
<Spacer />

***Claim:*** $\xi \mapsto X_\xi^L\ {}$ (resp. $X_\xi^R$) is a Lie algebra homomorphism (resp. anti-homomorphism), i.e.
$$
[X_\xi^L, X_\eta^L]_{\calX(G)} = X^L_{[\xi, \eta]_{\fg}}
\sands
[X_\xi^R, X_\eta^R]_{\calX(G)} = - X^R_{[\xi, \eta]_{\fg}}.
$$
<Spacer />

***Heads up!*** When using the other sign convention for the [Lie bracket on $\calX(G)$](algebra-vector-fields-algebraic), the L/R (anti)homomorphisms are swapped.

---

#### Proof that $\xi \mapsto X^L_\xi$ is an algebra homomorphism (first of three slides)

Given $\xi \in \fg$, let
$$
\gamma(t) := \exp(t \, \xi) \sands \phi_t := \lp \calF_\xi^L \rp_t = R_{\gamma(t)},
$$
and compute $\ [X_\xi^L, X_\eta^L]\ {}$ using the [dynamic formulation](algebra-vector-fields-dynamic)
$$
[X, Y] = \dep {\calF_\epsilon^* Y}.
$$
<Spacer size="5px"/>

Evaluating the definitions of the pullback and the left invariant vector field, then regrouping, gives
$$
\eqa{
\phi_t^* X_\eta^L(g) &= {\color{red}d_{\phi_t(g)}\phi_t^{-1}} \lp{\color{blue} X_\eta^L(\phi_t(g))}\rp \phantom{\sum} \\
&={\color{red}d_{\phi_t(g)}\phi_t^{-1}} \lp {\color{blue}d_1 L_{\phi_t(g)}(\eta)} \rp \phantom{\int} \\
&= d_1 \lp {\color{red}\phi_t^{-1}} \circ {\color{blue}L_{\phi_t(g)}} \rp({\color{blue}\eta}).
}
$$

---

#### Second slide of the proof that $\xi \mapsto X^L_\xi$ is an algebra homomorphism
<Spacer size="5px"/>

$$
\eqa{
{\color{red}\phi_t^{-1}} \circ {\color{blue}L_{\phi_t(g)}} &= {\color{red}R_{\gamma(t)}^{-1}} \circ {\color{blue}L_{R_{\gamma(t)}(g)}} \phantom{\sum} \\
&= {\color{red}R_{\gamma(t)^{-1}}} \circ \lp {\color{blue} L_g \circ L_{\gamma(t)}} \rp \phantom{\int} \\
&= {\color{blue}L_g} \circ \lp {\color{red}R_{\gamma(t)^{-1}}} \circ{\color{blue}L_{\gamma(t)}} \rp.
}
$$
<Spacer size="2px"/>

Linearizing ${\color{red}\phi_t^{-1}} \circ {\color{blue}L_{\phi_t(g)}}: G \to G$ at the identity thus yields
$$
d_1 \lp {\color{red}\phi_t^{-1}} \circ {\color{blue}L_{\phi_t(g)}} \rp
= d_1 {\color{blue}L_g} \circ d_1 \lp {\color{red}R_{\gamma(t)^{-1}}} \circ {\color{blue}L_{\gamma(t)}} \rp
= d_1 {\color{blue}L_g} \circ {\color{purple}\Ad_{\gamma(t)}},
$$
so
$$
\eqa{
\phi_t^* X_\eta^L(g) &= d_1 \lp {\color{red}\phi_t^{-1}} \circ {\color{blue}L_{\phi_t(g)}} \rp({\color{blue}\eta}) \phantom{\sum} \\
&= d_1 {\color{blue}L_g}({\color{purple}\Ad_{\gamma(t)}}(\eta))\phantom{\int}  \\
&= X^L_{\Ad_{\gamma(t)}(\eta)}(g).
}
$$

---

#### Third slide of the verification that $\xi \mapsto X^L_\xi$ is an algebra homomorphism

$\gamma(t) := \exp(t \, \xi)\ \ \Longrightarrow$
$$
\dep {\Ad_{\gamma(\epsilon)}(\eta)} = \ad_\xi(\eta) = [\xi, \eta]_\fg.
$$

Linearity of $\ \xi \mapsto X^L_\xi\ \ \Longrightarrow$
$$
[X_\xi^L, X_\eta^L] = \dep {X^L_{\Ad_{\gamma(\epsilon)}(\eta)}} = X^L_{[\xi, \eta]_\fg}.
$$
<Spacer />

Exchanging the roles of left and right multiplication gives 
$$
L_{\gamma(t)}^* X_\eta^R = X^R_{\Ad_{\gamma(t)^{-1}}(\eta)},
$$
so the corresponding result for right invariant vector fields follows from
$$
\gamma(t)^{-1} = \exp(t \, \xi)^{-1} = \exp(- t \, \xi).
$$

---

## Actions, infinitesimal generators, orbits, and stabilizers

A $G$-action on a manifold $M$ is a group homorphism $\rho: G \to \text{Diff}(M)$. 

$\text{Diff}(M)$ isn't a Lie group, but many of our results and constructions for Lie group homomorphisms and the action of $G$ on itself by left/right multiplication have natural analogs for more general actions.
<Spacer size="5px" />

### Infinitesimal generators

An action $\rho$ determines a subalgebra of $\calX(M)$ of *infinitesimal generators*: Given $\xi \in \fg$ and $p \in M$,  

$$
\xi_M(p) := \dep {\rho(\exp(\epsilon \, \xi))(p)}.
$$
<Spacer />

***A classic example:*** $M = \R^3$, $G = SO(3, \R)$, and $\rho(A)(\xv) = A \, \xv$.

Using the Lie algebra homomorphism $\hat {\ } : \R^3 \to {\mathfrak so}(3, \R)$ to describe the infinitesimal generators gives
$$
\xi_{\R^3}(\xv) = \dep{\exp(\epsilon \, \hat \xi) \xv} 
= \dep{(\idm + \epsilon \, \hat \xi + \cdots ) \xv} = \hat \xi \xv = \xi \times \xv.
$$


---

#### More examples: infinitesimal multiplication on $G$ and the infinitesimal adjoint action on $\fg$

If $M = G$ and $\rho(g) = \lozenge_g$, then 
$$
\xi_G = X_\xi^\blacklozenge,
$$ 
where $\blacklozenge = R$ if $\lozenge = L$ and vice versa.

*Verify:* $\lozenge_g(h) = \blacklozenge_h(g) \ \ \Longrightarrow$ 

$$
\eqa{
\xi_G(g) &= \dep {\lozenge_{\exp(\epsilon \, \xi)}(g)} \phantom{\sum}\\
&= \dep {\blacklozenge_g (\exp(\epsilon \, \xi))} \phantom{\sum}\\
&= d_1 \blacklozenge_g(\xi) \phantom{\sum}\\
&= X_\xi^\blacklozenge(g).
}
$$

<Spacer />
Infinitesimal generators of the adjoint action: 
If $M = \fg$ and $\rho(g) = \Ad_g$, then $\ \xi_G = \ad_\xi$. 

---

## Orbits

Given $p \in M$, if we define $\Phi_p: G \to M$ by
$$
\Phi_p(g) := g \cdot p = \rho(g)(p),
$$
then the *orbit* $\mathcal{O}_p$ (AKA $\, G \cdot p$) of $p$ is
$$
\mathcal{O}_p := \Phi_p(G) = \{g \cdot p : g \in G\}.
$$
<Spacer size="1px"/>

***Claim:*** $\ T_p \mathcal{O}_p = \{ \xi_M(p) \, : \, \xi \in \fg \}$. 

*Verify:* We can express a parametrized curve through $p$ in $\mathcal{O}_p$ as the image under $\Phi_p$ of a curve $\gamma: I \to G$<br/> with $\gamma(0) = 1$. If $\xi := \gamma'(0)$, then

$$
\eqa{
\dep {\Phi_p(\gamma(\epsilon))} &= d_1 \Phi_p(\xi) \phantom{\sum}\\
&= \dep {\exp(\epsilon \, \xi) \cdot p} \phantom{\sum}\\
&= \xi_M(p).
}
$$

---

### The tangent bundle of $\mathcal{O}_p$

Taking the directional derivative of both sides of the identity 
$$
\Phi_p \circ L_g = \rho(g) \circ \Phi_p
$$
in the direction of $\xi$ gives
$$
d_g \Phi_p(d_1 L_g(\xi)) 
= d_p \rho(g)(d_1 \Phi_p(\xi)).
$$
Using 
$$
X^L_\xi(g) = d_1 L_g(\xi) \sands \xi_M(p) = d_1 \Phi_p(\xi),
$$
we obtain
$$
d_g \Phi_p(X^L_\xi(g)) = d_p \rho(g)(\xi_M(p)).
$$

Since $T_g G = \{X^L_\xi(g) \, : \, \xi \in \fg \}$, we have 
$$
T_{g \cdot p} \mathcal{O}_p = d_p \rho(g) (T_p \mathcal{O}_p) .
$$ 

---
routeAlias: stabilizers
---

### Stabilizers and isotropy

Given an action $\rho$ of a Lie group $G$ on a manifold $M$, the *stabilizer (isotropy subgroup)* of a point $p \in M$ is
$$
G_p := \Phi_p^{-1}(p) = \{g \in G : g \cdot p = p \}.
$$
<Spacer />

***Claim:*** $G_p$ is a closed Lie subgroup of $G$, with 
$$
T_g G_p = \ker d_g \Phi_p = d_1 L_g(\fg_p),
$$
where
$$
\setdef{\fg_p} \xi \fg {\xi_M(p) = 0}.
$$  
<Spacer />

*Verify*: $G_p$ is a subgroup of $G$. <br/>
The action is smooth with respect to both $G$ and $M$, so $G_p = \Phi_p^{-1}(p)$ is closed, and 
[Cartan's closed subgroup theorem](Cartan-closed-subgroup) implies $G_p$ is a closed Lie subgroup of $G$. 

---

### Orbits ignore isotropy subgroups

If $h \in G_p$, then for any $g \in G$, 
$$
\Phi_p({g h}) = (g h) \cdot p = g \cdot (h \cdot p) = g \cdot p,
$$
so $\Phi_p$ drops to a map $\, \tilde \Phi_p: G/G_p \to M$:
$$
\tilde \Phi_p([g]) := \Phi_p(g) = g \cdot p. 
$$

$\tilde \Phi_p$ is injective,  since 
$$
\eqa{
\tilde \Phi_p([g_1]) = \tilde \Phi_p([g_2]) \quad &\Longleftrightarrow \quad g_1 \cdot p = g_2 \cdot p \\
&\Longleftrightarrow \quad g_1^{-1} g_2 \in G_p\\
&\Longleftrightarrow \quad [g_1] = [g_2],
}
$$
with image $\mathcal{O}_p$. Hence $\tilde \Phi_p$ is an immersion, and $\mathcal{O}_p$ is an immersed submanifold of $M$ with
$$
T_p \mathcal{O}_p = %\{ \eta_M(p) : \eta \in \fg \} 
d_p \Phi_p(\fg) \approx \fg/\fg_p.
$$

---

### Kernels and images of Lie group morphisms

***Claim:*** Let $f : G_1 → G_2$ be a morphism of Lie groups. Then 
- $\ker f$ is a closed Lie subgroup of $G_1$ with Lie algebra $\ker d_{1_{G_1}}f$

- $f$ determines an injective immersion from $G_1/\ker f$ to $G_2$, and

- $\text{im} \, f$ is a Lie subgroup of $G_2$. 

If $\text{im} \, f$ is a closed Lie subgroup of $G_2$, it is isomorphic to $G_1/\ker f$.

*Verify*: $f$ determines an action of $G_1$ on $G_2$:
$$
g_1 \cdot g_2 := f(g_1) g_2.
$$

$\ker f$ is the stabilizer of $1_{G_2}$ with respect to this action, and $\text{im} \, f = \mathcal{O}_{1_{G_2}}$, so the three bullet points follow immediately from our previous results for [stabilizers](stabilizers).

If $\text{im} \,  f$ is an embedded submanifold of $G_2$, the induced map from $G_1/\ker f$ to $\text{im} \,  f$ is a diffeomorphism.


---

### Quotient spaces and orbits

Given an action $\rho$ of a Lie group $G$ on a manifold $M$, let $M/G$ denote the quotient of $M$ with respect to the equivalence relation
$$
p \equiv q \quad \Longleftrightarrow \quad q \in \mathcal{O}_p,
$$
with the quotient topology: $U \subset M/G$ is open $\ \Longleftrightarrow\  \pi^{-1}(U)\ {}$ is open in $M$.
<Spacer/>

***Example of a non-Hausdorff quotient by a group action:***

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

#### A sufficient condition for a Hausdorff quotient

***Claim:*** If
$$
\setdef R {(p, g \cdot p)} {M \times M} {p \in M, g \in G}
$$
is closed, then the quotient topology on $M/G$ is Hausdorff. 

*[Proof](Hausdoff-quotient-condition) in Appendix B.*
<Spacer/>

***Claim:*** $M/G$ has a smooth manifold structure such that $\ \pi: M \to M/G \ {}$ is a submersion $\ \Longleftrightarrow \ R\ {}$ is a closed submanifold of $\ M \times M$. 

See, e.g., Theorem 4.1.20 in *Foundations of Mechanics* for the proof. 
<Spacer/>

***Special case:*** If $H$ is a closed subgroup of $G$, then $G/H$ is a smooth manifold and the projection is a submersion.


---

## Free, effective, and proper actions

An action is *free* $\ \Longleftrightarrow \ {}$ for every $p \in M$ the map $\Phi_p: G \to M$ 
is injective, i.e. $G_p$ is trivial for all $p \in M$.

An action $\rho: G \to \diffM$ is *effective* (or *faithful*) $\ \Longleftrightarrow \ \rho$  is injective, i.e. if 
$$\rho(g) = \text{id}_M \qquad \Longleftrightarrow \qquad g = 1.$$

An action  is *proper* $\ \Longleftrightarrow \ {}$ the map 
$$
\eqa{
\Psi: G \times M &\to M \times M \\
(g, p) &\mapsto (p, g \cdot p)
}
$$
is proper, i.e. preimages of compact sets are compact.
<Spacer size="5px"/>

***Claim:*** If $G$ acts freely and properly on $M$, then 
$𝜋:𝑀→𝑀/𝐺 \ {}$ is smooth, and
for any manifold $N$ and map $𝑓:𝑀/𝐺→𝑁, \ f \circ \pi$ smooth $\ \Longrightarrow \ f$ smooth.

See, e.g. *Foundations of Mechanics*, R. Abraham and J.E. Marsden, for the proof.