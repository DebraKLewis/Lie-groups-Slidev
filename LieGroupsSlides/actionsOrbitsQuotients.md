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
$$
\eqa{
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
$$
\beqa{
d_g \Phi_p(X_\eta^L(g)) &= 
d_g \Phi_p(d_1 L_g(\eta)) \\
&= d_p \rho(g)(d_1 \Phi_p(\eta))\\
&= d_p \rho(g)(\eta_M(p)).
}
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
