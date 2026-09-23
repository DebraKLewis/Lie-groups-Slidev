### Recap: Tangent vectors and derivations

If we define a tangent vector $v_p$ to a manifold $M$ at a point $p$ as an equivalence class of smooth curves <br/>$\gamma: (-\epsilon, \epsilon) \to M$ with the equivalence relation 
$$
\gamma \approx \tilde \gamma \qquad \Longleftrightarrow \qquad \gamma(0) = \tilde \gamma(0) \quad \text{and} \quad \gamma'(0) = \tilde \gamma'(0),
$$
we can evaluate the directional derivative of a map $f: M \to N$ in the direction of $v_p$ as
$$
v_p(f) := \dep {f(\gamma(\epsilon)) } 
$$
for some representative $\gamma$ of the equivalence class.

Alternatively, we can define a tangent vector at $p$ as a *derivation* at $p$, i.e. a linear map <br/>$D_p: \mathcal{C}^\infty(M) \to \mathcal{C}^\infty(M)$ satisfying 
$$
D_p(f \, g) = D_p(f) g(p) + f(p) D_p(g).
$$
These two characterizations are equivalent.

---

### Recap continued: the Lie algebra $\calX(M)$ of smooth vector fields on $M$

The *Lie derivative* $\, \calL_X: \mathcal{C}^\infty(M) \to \mathcal{C}^\infty(M)$ associated to a smooth vector field $V$ is given by
$$
\calL_X f(p) = X(p)(f) \qquad \qquad \forall \ p \in M.
$$
<Spacer/>

#### Algebraic description of the Lie bracket on $\calX(M)$

The Lie bracket $\ [X, Y]\ {}$ of vector fields $X$ and $Y$ is the unique vector field such that 
$$
\calL_{[X, Y]} = [\calL_X, \calL_Y] = \calL_X Y.
$$
<Spacer/>

***Heads up!*** The Lie bracket of vector fields is also commonly defined with the opposite sign convention. There are sound arguments in favor of both options. 

---

#### Dynamics description of the Lie bracket

If $\mathcal{F}$ denotes the flow of $X$, and $\bm{t}$ is a tensor on $M$, then
$$
{\textstyle \frac {d\ }{d \epsilon}} \mathcal{F}_\epsilon^* \bm{t} = \mathcal{F}_\epsilon^*(\calL_X \bm{t}).
$$
In particular,
$$
\dep {\mathcal{F}_\epsilon^* Y} = \calL_X Y = [X, Y].
$$
<Spacer/>

The algebraic and dynamics descriptions are equivalent.
Each have their advantages!
<Spacer/>

#### Naturality with respect to push-forward

If $\varphi: M \to N$ is a diffeomorphism and $X, Y \in \calX(M)$,
$$
\varphi_*[X, Y]_M = [\varphi_* X, \varphi_*Y]_N.
$$

---

## Relationships between the algebra structures of $\fg$ and $\calX(G)$

Naturality w.r.t. push-forward of the Lie bracket on $\calX(G) \ \ \Longrightarrow \ \ {}$ the Lie bracket of two $\lozenge$-invariant vector fields is $\lozenge$-invariant.

Hence $\lozenge$-invariant vector fields on $G$ form a Lie subalgebra of $\calX(G)$.
<Spacer />

***Claim:*** $\xi \mapsto X_\xi^L\ {}$ (resp. $X_\xi^R$) is a Lie algebra homomorphism (resp. anti-homomorphism), i.e.
$$
[X_\xi^L, X_\eta^L] = X^L_{[\xi, \eta]_{\fg}}
\sands
[X_\xi^R, X_\eta^R] = - X^R_{[\xi, \eta]_{\fg}}.
$$
<Spacer />

***Heads up!*** When using the other sign convention for the Lie bracket on $\calX(G)$, the L/R (anti)homomorphisms are swapped.

---

#### Verification that $\xi \mapsto X^L_\xi$ is an algebra homomorphism (first slide)

Given $\xi \in \fg$, let
$$
\gamma(t) := \exp(t \, \xi) \sands \phi_t := \lp \calF_\xi^L \rp_t = R_{\gamma(t)},
$$
and compute $\ [X_\xi^L, X_\eta^L]\ {}$ using the "dynamic formulation"
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

#### Second slide of the verification that $\xi \mapsto X^L_\xi$ is an algebra homomorphism
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

Recall that a $G$-action on a manifold $M$ is a homorphism $\rho: G \to \text{Diff}(M)$. 

$\text{Diff}(M)$ isn't a Lie group, but many of our results and constructions for Lie group homomorphisms and the action of $G$ on itself by left/right multiplication have natural analogs for more general actions.
<Spacer size="5px" />

### Infinitesimal generators

An action $\rho$ determines a subalgebra of $\calX(M)$ consisting of *infinitesimal generators*: Given $\xi \in \fg$,  

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

### Orbits

Given $p \in M$, if we define $\Phi_p: G \to M$ by
$$
\Phi_p(g) := g \cdot p,
$$
then the *orbit* of $p$ is
$$
\mathcal{O}_p := \Phi_p(G) = \{g \cdot p : g \in G\}.
$$
$G \cdot p$ is another common notation for the orbit of $p$. 
<Spacer size="5px"/>

Evaluations of infinitesimal generators at $p$ are elements of $T_p \mathcal{O}_p$:
$$
\eqa{
\xi_M(p) &= \dep {\exp(\epsilon \, \xi) \cdot p \,} \phantom{\sum} \\
&= \dep {\Phi_p(\exp(\epsilon \, \xi))} \phantom{\sum} \\
&= d_1 \Phi_p(\xi).
}
$$

---

#### The tangent bundle of $\mathcal{O}_p$

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
T_{g \cdot p} \mathcal{O}_p = d_p \rho(g) \lp \{ \xi_M(p) \, : \, \xi \in \fg \} \rp.
$$ 

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

*Proof*: See <Link to="isotropy-subgroups-closed">Appendix C</Link> for proof that $G_p$ is closed. 

---

### Orbits ignore isotropy subgroups

If $h \in G_p = \{ g \in G: g \cdot p = p \}$, then for any $g \in G$, 
$$
\Phi_p({g h}) = (g h) \cdot p = g \cdot (h \cdot p) = g \cdot p,
$$
so $\Phi_p$ determines a map 
$$\eqa{
\tilde \Phi_p: G/G_p &\to M \\
\tilde \Phi_p([g]) &:= g \cdot p, 
}
$$

$\tilde \Phi_p$ is injective, with image $G \cdot p$, since 
$$
\tilde \Phi_p([g]) = \tilde \Phi_p([h]) \ \Longleftrightarrow \
g \cdot p = h \cdot p \ \Longleftrightarrow \
g^{-1} h \in G_p\ \Longleftrightarrow \ [g] = [h].

Hence $\tilde \Phi_p$ is an immersion, and
$$
T_p (G \cdot p) = \{ \eta_M(p) : \eta \in \fg \} \approx \fg/\fg_p.
$$

---

### Quotient spaces and orbits

Given an action $\rho$ of a Lie group $G$ on a manifold $M$, let $M/G$ denote the quotient of $M$ with respect to the equivalence relation
$$
p \equiv q \qquad \Longleftrightarrow q \in G \cdot p.
$$
$M/G$ has the quotient topology: $U \subset M/G$ is open $\ \Longleftrightarrow\  \pi^{-1}(U)\ {}$ is open in $M$.
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

If
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

#### Second slide of proof of the sufficient condition for $M/G$ to be Hausdorff

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

## Free, effective, and proper actions

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

If $G$ acts freely and properly on $M$, then 
- $𝜋:𝑀→𝑀/𝐺 \ {}$ is smooth.
- For any manifold $N$ and map $𝑓:𝑀/𝐺→𝑁, \ f \circ \pi$ smooth $\ \Longrightarrow \ f$ smooth.