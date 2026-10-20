# Appendix B. Some proofs 

- Induced representations on vector fields and one forms

<!-- - Isotropy subgroups are closed Lie subgroups -->

---
routeAlias: representation-via-pushforward
---

### Induced representations on vector fields 

The action $\rho$ also induces representations via pushforward on ${\cal X}(M)$ and ${\cal X}^*(M)$, 
the spaces of smooth vector fields and one forms on $M$.
$~$
$$
\eqa{
g \cdot X &= (\rho(g)^* X)(m) \\
&= d_{\rho(g)^{-1}(m)} \rho(g)(X(\rho(g)^{-1}(m)) \\
% &= d_{g^{−1} \cdot m} \rho(g)(X(g^{−1} \cdot m)) 
&=\underbrace{d_{g^{−1} \cdot m} \rho(g)(\underbrace{X(g^{−1} \cdot m)}_{\in \, T_{g^{−1} \cdot m} M}) }_{\in \, T_m M} \, 
\qquad \qquad  \forall \ m \in M.
}
$$
$~$

Since pushforward by a composition of maps equals the corresponding composition of pushforwards, we have 
$$
(g \, h) \cdot X = \rho(g \, h)^* X 
= (\rho(g)\circ \rho(h))^* X
= \rho(g)^* (\rho(h)^* X) = g \cdot (h \cdot X).
$$

---

### Induced representations on one forms

Analogously, for any $\alpha \in {\cal X}^*(M)$ and $v_m \in T_m M,\phantom{\int^\int}$ 
$$
\eqa{
(g \cdot \alpha)(m)(v_m) &= (\rho(g)^* \alpha)(m)(v_m) \\
&= \lp d_m \rho(g)^{−1} \rp^* \alpha(g^{−1} \cdot m)(v_m) \\
&= \underbrace{\alpha(g^{−1} \cdot m)}_{\in \, T^*_{g^{−1} \cdot m} M}(\underbrace{d_m \rho(g)^{−1})(v_m)}_{\in \, T_{g^{−1} \cdot m} M}
}
$$
and $\ (g \, h) \cdot \alpha = g \cdot (h \cdot \alpha).$
$~$

These pushforward representations fit together:
$$
\iota_{g \cdot X} (g \cdot \alpha) = g \cdot (\iota_X \alpha),
$$
where
$$
\iota_X \alpha(m) := \alpha(m)(X(m))\qquad \qquad  \forall \ m \in M. 
$$

<!--

---
routeAlias: isotropy-subgroups-closed
---

### Proof (three slides): $G_p$ is a closed Lie subgroup of $G$ 

If we define 
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

#### Second slide in the proof that $G_p$ is a closed Lie subgroup of $G$ 

For any $g \in G$,
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

#### Third slide in the proof that $G_p$ is a closed Lie subgroup of $G$ 

General case: Given $v_g \in \ker d_g \Phi_p$, if we set
$$
\xi := d_gL_{g^{-1}}(v_g) \in \fg, \sands \gamma(\epsilon) := g \, \exp(\epsilon \, \xi),
$$
then
$$
\gamma'(0) = d_1 L_g(\xi) = d_1 L_g(d_gL_{g^{-1}}(v_g)) = d_1 (L_g \circ L_{g^{-1}})(v_g) = v_g,
$$
and
$$
\eqa{
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

-->

---
routeAlias: Hausdoff-quotient-condition
---

*Proof that if*
$$
\setdef R {(p, g \cdot p)} {M \times M} {p \in M, g \in G}
$$
*is closed, then the quotient topology on $M/G$ is Hausdorff.* 

Given $p, \tilde p \in M$, if $\{ V_j\}$ and $\{ \tilde V_j \}$ are nested bases of nbhds of $p$ and $\tilde p$, then
$$
U_j := \pi(V_j) \sands \tilde U_j := \pi(\tilde V_j)
$$
are nested bases of nbhds of $[p]$ and $[\tilde p]$. 

We need to show that
$$
U_j \cap \tilde U_j \neq \emptyset \quad \forall \ j \qquad \Longrightarrow \qquad [p] = [\tilde p].
$$
<Spacer size="5px"/>

$U_j \cap \tilde U_j \neq \emptyset \quad \Longrightarrow \quad \exists \ m_j \in V_j, \tilde m_j \in \tilde V_j, \ \text{and} \ g_j, \tilde g_j \in G\ {}$ satisfying
$$
g_j \cdot m_j = \tilde g_j \cdot \tilde m_j,
$$ 

---

#### Second slide of proof of the sufficient condition for $M/G$ to be Hausdorff
<Spacer size="5px"/>

and hence
$$
(m_j, \tilde m_j) = (m_j, (\tilde g_j^{-1} g_j) \cdot p_j) \in R.
$$
<Spacer size="5px"/>

$R$ closed $\ \Longrightarrow$
$$
(p, \tilde p) = \lim_{j \to \infty}(m_j, \tilde m_j) \in R,
$$
so $\exists \ g \in G\ {}$ such that $\ \tilde p = g \cdot p, \ {}$ and hence $\ [\tilde p] = [p]$.


---
routeAlias: induced-representations
---

### Induced representations on vector fields 

The action $\rho$ also induces representations via pushforward on ${\cal X}(M)$ and ${\cal X}^*(M)$, 
the spaces of smooth vector fields and one forms on $M$.
$~$
$$
\eqa{
g \cdot X &= (\rho(g)^* X)(m) \\
&= d_{\rho(g)^{-1}(m)} \rho(g)(X(\rho(g)^{-1}(m)) \\
% &= d_{g^{−1} \cdot m} \rho(g)(X(g^{−1} \cdot m)) 
&=\underbrace{d_{g^{−1} \cdot m} \rho(g)(\underbrace{X(g^{−1} \cdot m)}_{\in \, T_{g^{−1} \cdot m} M}) }_{\in \, T_m M} \, 
\qquad \qquad  \forall \ m \in M.
}
$$
$~$

Since pushforward by a composition of maps equals the corresponding composition of pushforwards, we have 
$$
(g \, h) \cdot X = \rho(g \, h)^* X 
= (\rho(g)\circ \rho(h))^* X
= \rho(g)^* (\rho(h)^* X) = g \cdot (h \cdot X).
$$

---

### Induced representations on one forms

Analogously, for any $\alpha \in {\cal X}^*(M)$ and $v_m \in T_m M,\phantom{\int^\int}$ 
$$
\eqa{
(g \cdot \alpha)(m)(v_m) &= (\rho(g)^* \alpha)(m)(v_m) \\
&= \lp d_m \rho(g)^{−1} \rp^* \alpha(g^{−1} \cdot m)(v_m) \\
&= \underbrace{\alpha(g^{−1} \cdot m)}_{\in \, T^*_{g^{−1} \cdot m} M}(\underbrace{d_m \rho(g)^{−1})(v_m)}_{\in \, T_{g^{−1} \cdot m} M}
}
$$
and $\ (g \, h) \cdot \alpha = g \cdot (h \cdot \alpha).$
$~$

These pushforward representations fit together:
$$
\iota_{g \cdot X} (g \cdot \alpha) = g \cdot (\iota_X \alpha),
$$
where
$$
\iota_X \alpha(m) := \alpha(m)(X(m))\qquad \qquad  \forall \ m \in M. 
$$


---
routeAlias: coadjoint-action-is-Poisson
---

### Proof that the coadjoint action is a Poisson action

Given $g \in G$ and $\mu, \nu \in \fg^*$, 
linearity of the coadjoint action $\ \ \Longrightarrow$
$$
\eqa{
\nu\lp \fd {\ }\mu (f \circ \Ad^*_{g})(\mu) \rp 
&= \dep {f(\Ad^*_{g}(\mu + \epsilon \, \nu))} \\
&= df(\Ad^*_{g}\mu)(\Ad^*_{g}\nu) \\
&= \Ad^*_{g}\nu \lp \fd f \mu(\Ad^*_{g}\mu) \rp  \\
&= \nu \lp \Ad_{g}\lp \fd f \mu(\Ad^*_{g}\mu) \rp \rp
}
$$
$\Longrightarrow$
$$
\fd {\ }\mu (f \circ \Ad^*_{g})(\mu) = \Ad_{g}\lp \fd f \mu(\Ad^*_{g}\mu)\rp .
$$

To reduce notational clutter, set
$$
\xi := \fd f \mu(\Ad^*_{g}\mu)
\sands
\eta := \fd h \mu(\Ad^*_{g}\mu).
$$

---

#### Second slide of proof that the coadjoint action is a Poisson action

The calculations on the previous slide $\ \ \Longrightarrow$
$$
\left \{f \circ \Ad^*_{g}, h \circ \Ad^*_{g} \right \}(\mu)
%= \mu \lp \left [ \Ad_{g}\fd f \mu(\Ad^*_{g}\mu), \Ad_{g}\fd h \mu(\Ad^*_{g}\mu) \right ].
= \mu \lp [\Ad_{g}\xi, \Ad_{g}\eta] \rp.
$$

On the other hand,
$$
\lp \{f, h \} \circ \Ad^*_{g} \rp(\mu) 
%= \Ad^*_{g}\mu \lp \left [ \fd f \mu(\Ad^*_{g}\mu), \fd h \mu(\Ad^*_{g}\mu) \right ]
= \Ad^*_{g}\mu([\xi, \eta])
= \mu(\Ad_{g}[\xi, \eta]).
$$
<Spacer size="5px"/>

Since the adjoint action preserves the Lie bracket,
$$
[\Ad_{g}\xi, \Ad_{g}\eta] = \Ad_{g}[\xi, \eta],
$$
and hence
$$
\left \{f \circ \Ad^*_{g}, h \circ \Ad^*_{g} \right \} = \{f, h \} \circ \Ad^*_{g}.
$$

---
routeAlias: Lie-Poisson-flows-preserve-coadjoint-orbits
---

### Lie-Poisson flows preserve coadjoint orbits

The *coadjoint action* of $G$ on $\fg^*$ is
$$
g \cdot \mu = \Ad_{g^{-1}}^* \mu.
$$
$g^{-1}, \ {}$ rather than $g$ is needed for a left action, because of the dual map.
$~$
Identifying $T_\mu \fg^*$ with $\fg^*, \ {}$ the associated infinitesimal generators are determined by
$$
\eqa{
(\xi_{\fg^*}(\mu))(\eta) &= \dep{\Ad_{\exp(\epsilon \, \xi)^{-1}}^* \mu(\eta)} \\
&= \dep{\mu\lp \Ad_{\exp(- \epsilon \, \xi)}\eta \rp} \\
&= - \mu(\ad_\xi\eta) \\
&= (- \ad_\xi^* \mu)(\eta),
}
$$
so $\xi_{\fg^*}(\mu) = - \ad_\xi^* \mu$.

---

Hence 
$$
T_\mu (G \cdot \mu) = \{ \xi_{\fg^*}(\mu) : \xi \in \fg \} = \{ \ad_\xi^* \mu : \xi \in \fg \},
$$
and the Hamiltonian vector fields
$$
X_h(\mu) = \mp \ad^*_{\fd h \mu(\mu)} \mu
$$ 
determined by the Lie-Poisson bracket take values in $T_\mu (G \cdot \mu)$. 

Hence the flows of the Hamiltonian vector fields preserve the coadjoint orbits.
$~$

***Example:*** $G = SO(3, \R)$, with $\mathfrak{so}(3, \R) \approx (\R^3, \times)$.

$\Ad_{g^{-1}}(\mu) = g \, \mu$, so the coadjoint orbits are spheres centered at the origin. 

$$
X_h(\mu) = \pm \mu \times \nabla h(\mu). 
$$

---
routeAlias: Ad-invariant-inner-product-Casimir-Lie-Poisson-flows
---

### An $\Ad$-invariant inner product on $\fg$ determines a Casimir of the Lie-Poisson bracket.

An inner product $\, \langle \ \, , \ \rangle_\fg\, {}$ on $\fg$ induces an isomorphism $\, I: \fg \to \fg^*$
$$
(I \xi)(\eta) = \langle \xi , \eta \rangle \qquad \forall \ \xi, \eta \in \fg,
$$

and an associated inner product $\, \langle \ \,, \ \rangle_{\fg^*}\, {}$ on $\fg^*$,
$$
\langle \mu , \nu \rangle_{\fg^*} = \langle I^{-1} \mu, I^{-1} \nu \rangle_{\fg}
= \mu(I^{-1} \nu).
$$

$\, \langle \ , \ \rangle_\fg\, {}$ $\Ad$-invariant $\ \Longrightarrow$
$$\eqa{
(\Ad^*_g I \Ad_g(\xi))(\eta) &=  (I \Ad_g(\xi))(\Ad_g \eta) \\
&= \langle \Ad_g(\xi), \Ad_g \eta \rangle_\fg \\
&=  \langle \xi, \eta \rangle_\fg \\
&= (I \xi)(\eta)}\phantom{x_{\int_\int}}
$$

---

$\Longrightarrow\qquad \Ad^*_g \, I \, \Ad_g = I$ 

$
%\Ad^*_g \, I \, \Ad_g = I, \qquad \text{and hence} \qquad 
\Longrightarrow \qquad \Ad_g \, I^{-1} \, \Ad^*_g = I^{-1}
\qquad \forall \ g \in G. \phantom{x^{\int^\int}}
$
$~$
Hence
$$\eqa{
\langle \Ad_g^* \mu , \Ad_g^* \nu \rangle_{\fg^*}
&= \Ad_g^* \mu(I^{-1} \, \Ad^*_g \nu) \\
&= \mu(I^{-1} \nu)\\
&= \langle \mu , \nu \rangle_{\fg^*}.
}
$$

It follows that $\ \langle \ \, , \ \rangle_{\fg^*}\ {}$ is $\ad$-invariant, i.e.
$$
0  =\langle \ad_\xi^* \mu , \nu \rangle_{\fg^*} + \langle  \mu , \ad_\xi^*\nu \rangle_{\fg^*} 
%= \nu (I^{-1} \ad_\xi^* \mu + \ad_\xi I^{-1} \mu)
$$
for all $\ \xi \in \fg, \ \mu, \nu \in \fg^*.\ {}$ 

---

Taking $\ \nu = \mu\ {}$ gives
$$\eqa{
0 &= \langle \ad_\xi^* \mu , \mu \rangle_{\fg^*}\\
&= \ad_\xi^* \mu(I^{-1}\mu) \\
&= - \ad_{I^{-1}\mu}^* \mu(\xi) 
}
$$
for all $\xi \in \fg,\ {}$ so $\ \ \ad_{I^{-1}\mu}^* \mu = 0.$
$~$
Finally, let
$$
C(\mu) =  \smallfrac 1 2 ||\mu||_{\fg^*}^2 = \smallfrac 1 2 \mu(I^{-1} \mu).
$$
$~$
$$
\fd C \mu(\mu) = I^{-1} \mu \qquad \Longrightarrow \qquad
\mp X_C(\mu) =  \ad^*_{\fd C \mu(\mu)} \mu = 0.
$$

---
routeAlias: symplectic-induces-Poisson
---

### A symplectic structure determines a Poisson bracket

$\omega$ determines a Poisson bracket 
$$
\{ f, h \} := \omega(X_f, X_h) = {\cal L}_{X_h} f.
%[ \alpha, \beta ]_{\dcXM} := \omega(\alpha^\sharp, \beta^\sharp) = \alpha(\beta^\sharp),
$$
and the Hamiltonian vector fields determined by this Poisson structure equal those determined by $\omega$.

*Verify:*

$\{·, h\}\, {}$ is a derivation, and the Hamiltonian vector fields determined by $\,\omega\,$ and $\, \{·, ·\}\, {}$ 
are equal, since
$$
X_h(f) = \iota_{X_h} df = \iota_{X_h}\iota_{X_f}\omega = \{f,h\}  
$$
for all $\, f, h \in C^\infty(M)$.
<Spacer size="5px"/>

To show that $\, \{·, ·\}\, {}$ satisfies the Jacobi identity, we'll introduce another bracket.

---

#### Second slide of construction of a Poisson bracket from a symplectic structure 

$\omega$ determines a Lie bracket on the space $\, {\cal X^*}(M) \, {}$ of smooth 1-forms:
$$
[ \alpha, \beta ]_{{\cal X^*}(M)} := - [\alpha^\sharp, \beta^\sharp]^\flat.
$$

- The space $\, {\cal X}^*_C(M)\, {}$ of closed 1-forms is a Lie subalgebra of ${\cal X^*}(M)$, and 
- The derived algebra of $\,  {\cal X}^*_C(M)\, {}$ is contained in the subalgebra $\,  {\cal X}^*_E(M)\, {}$ 
of exact 1-forms.

Setting $\, \alpha = df \, {}$ and $\, \beta = dh\,{}$ gives
$$
\eqa{
[ df, dh ]_{{\cal X^*}(M)} &= d \iota_{dh^\sharp}\iota_{df^\sharp}\omega \\
&= d \iota_{X_h}\iota_{X_f}\omega \\
 &= d \{f, h \}.
}
$$

Applying ${}^\sharp\,{}$ to both sides of the previous equality gives
$$
[ df, dh ]_{{\cal X^*}(M)}^\sharp
= \lp d \{f, h \} \rp^\sharp 
= X_{\{f, h \}}.
$$ 

---

#### Third slide of construction of a Poisson bracket from a symplectic structure 

Hence 
$$
X_{\{f, h \}} = [ df, dh ]_{{\cal X^*}(M)}^\sharp = [X_f, X_h].
$$ 
<Spacer size="5px"/>

We showed that $\, \{·, ·\}\, {}$ satisfies the Jacobi identity $\quad  \Longleftrightarrow$
$$
[X_f , X_h] = X_{\{f,h\}} \qquad \qquad \forall\ f, h \in C^\infty(M),
$$
so $\, \{·, ·\}\, {}$ is a Poisson bracket.

---
routeAlias: canonical-symplectic-in-terms-of-1-form
---

### Local trivialization of the canonical symplectic structure on a cotangent bundle 

The map  $\hat \beta_q : T_q Q \times T_q^* Q \to T_{\beta(q)} T^* Q$ given by
$$
\hat \beta_q(v_q, p_q) := d_q \beta(v_q) + \text{vert}_{\beta(q)}(p_q)
$$
is an isomorphism and
$$
\omega_0(\beta(q))(\hat \beta_q(v_q, p_q), \hat \beta_q(\tilde v_q, \tilde p_q)) = 
\tilde p_q(v_q) - p_q(\tilde v_q) -  \ed \beta(q)(v_q, \tilde v_q).
$$ 

*Verify:* 

Bilinearity of $\omega_0 \ \ \Longrightarrow \ \ {}$ we can work term by term.

$$
\eqa{
\omega_0(\beta(q))(d_q \beta(v_q), d_q \beta(\tilde v_q))& = \beta^* \omega_0(q)(v_q, \tilde v_q)\\
&= - \ed \beta(q)(v_q, \tilde v_q).}
$$ 

We now show that
$$
\omega_0(z_q)(\text{vert}_{z_q}(p_q), w_{z_q}) = - p_q(d_{z_q} \pi(w_{z_q})),% \qquad 
%\forall \ q \in Q, z_q, p_q \in T_q^*Q, \ w_{z_q} \in T_{z_q}T^* Q, 
$$

---

#### Second slide: canonical symplectic structure on a cotangent bundle with respect to a 1-form $\beta$

and hence 
$$
\omega_0(z_q)(\text{vert}_{z_q}(p_q),  d_q \beta(\tilde v_q)) = 
- p_q(d_{z_q} (\pi \circ \beta)(\tilde v_q) = - p_q(\tilde v_q)
$$
and 
$$
\omega_0(z_q)(\text{vert}_{z_q}(p_q),  \text{vert}_{z_q}(\tilde p_q)) = 0.
$$

Let $\alpha \in \calX^*(Q)$ be a 1-form satisfying $\, \alpha(q) = p_q, \ {}$ and define $X_\alpha \in \calX(T^*Q)\,{}$ by
$$
\eqa{
X_\alpha(\tilde z_{\tilde q}) :=& \ \text{vert}_{\tilde z_{\tilde q}}(\alpha(\tilde q)) \\
=&  
\ \dep{(\tilde z_{\tilde q} + \epsilon \, \alpha(\tilde q))} }
$$

$\forall \ \tilde z_{\tilde q} \in T^*Q,\ {}$ with flow
$$
{\cal F}_t = \text{id}_{T^*Q} + t \, \alpha \circ \pi.
$$



---

#### Third slide: canonical symplectic structure on a cotangent bundle with respect to a 1-form $\beta$

$$
\eqa{
\iota_{X_\alpha}\omega_0 &= - \iota_{X_\alpha} \ed \theta_0 \\
&= - \underbrace{\calL_{X_\alpha} \theta_0}_{\dep{\calF_\epsilon^* \theta_0}} + \ed \underbrace{\iota_{X_\alpha} \theta_0}_{0}.
}
$$

$$
\eqa{
(\calF_\epsilon^* \theta_0)(z_q)(w_{z_q})
&= \theta_0(\calF_\epsilon(z_q))(d_{\calF_\epsilon(z_q)} \pi(d_{z_q} \calF_\epsilon(w_{z_q}))\\
&= \theta_0(z_q + \epsilon \, \alpha(q))((d_{z_q}(\underbrace{\pi \circ \calF_\epsilon}_{\pi})(w_{z_q}))\\
&= (z_q + \epsilon \, \alpha(q))(d_{z_q} \pi(w_{z_q}))
}
$$

$\Longrightarrow$
$$
\eqa{
\omega_0(z_q)(\text{vert}_{z_q}(p_q), w_{z_q}) 
&= 
\iota_{X_\alpha}\omega_0(z_q)(w_{z_q}) \\
&= - \smallfrac {d\ }{d \epsilon} (z_q + \epsilon \, \alpha(q))(d_{z_q} \pi(w_{z_q})) |_{\epsilon = 0}\\
&= - \underbrace{\alpha(q)}_{p_q}(d_{z_q} \pi(w_{z_q})).
}
$$

---
routeAlias: momentum-map-cotangent-bundle
---

### Momentum map of $M = T^*Q$ with a lifted $G$ action

An action $\rho$ of $G$ on $Q$ induces an action $P$ on $T^*Q$ called the *cotangent lifted action*:
$$
g \cdot z_q = P(g)(z_q) := (d_{g \cdot q}\rho(g^{-1}))^* z_q \in T_{g \cdot q}^*Q.
$$

***Claim:*** $\theta_0$ and $\omega_0$ are $G$-invariant, and 
$$
J_\xi(z_q) := z_q(\xi_Q(q)) 
$$
determines an *equivariant* momentum map $J$ on $T^*Q$, i.e.
$$
J(g \cdot z_q) = \Ad^*_{g^{-1}} J(z_q).
$$
<Spacer size="1px"/>

*Verify:* 
$$
\eqa{
(P(g)^*\theta_0)(z_q)(w_{z_q}) 
&= (g  \cdot z_q)(d_{g  \cdot z_q} \pi( d_{z_q} P(g)(w_{z_q})) \phantom{\sum}\\
&= (g \cdot z_q)( d_{z_q} (\pi \circ P(g))(w_{z_q})).
}
$$


---

#### Second slide of $M = T^*Q$ with a lifted $G$ action

$\pi \circ P(g) = \rho(g) \circ \pi \quad \Longrightarrow$

$$
\eqa{
(g \cdot z_q)( d_{z_q} (\pi \circ P(g))(w_{z_q})
&= \lp (d_{g \cdot q}\rho(g^{-1}))^* z_q \rp \lp d_{z_q}(\rho(g) \circ \pi)(w_{z_q}) \rp\\
&= z_q (\underbrace{d_{g \cdot q}\rho(g^{-1}) d_{z_q}(\rho(g) \circ \pi)}_{d_{z_q} \lp \rho(g^{-1}) \circ \rho(g) \circ \pi \rp\, = \, d_{z_q} \pi}(w_{z_q}))\\
&= z_q(d_{z_q} \pi(w_{z_q}))\\
&= \theta_0(z_q)(w_{z_q}).
}
$$

Hence $\theta_0$ is $G$-invariant.

$$
\eqa{
P(g)^*\omega_0 &= - P(g)^*(\ed \theta_0) \\
&= - \ed (P(g)^*\theta_0) \\
&= - \ed \theta_0 \\
&= \omega_0
}
$$
$\Longrightarrow \ \omega_0$ is $G$-invariant, too.

---

#### Third slide of $M = T^*Q$ with a lifted $G$ action

$G$-invariance of $\theta_0 \ \ \Longrightarrow$
$$
\mathcal{L}_{\xi_{T^*Q}} \theta_0 = \dep{P(\exp(\epsilon \, \xi))^* \theta_0} 
= \dep {\theta_0} = 0.
$$

$\pi \circ P(g) = \rho(g) \circ \pi \quad \Longrightarrow$

$$
d_{z_q} \pi( \xi_{T^*Q}(z_q)) = \xi_Q(q)
$$
$\Longrightarrow \quad j_\xi = \iota_{\xi_{T^*Q}} \theta_0$

$\Longrightarrow$
$$
\eqa{
d j_\xi &= d \iota_{\xi_{T^*Q}} \theta_0 \\
&= {\cal L}_{\xi_{T^*Q}} \theta_0 - \iota_{\xi_{T^*Q}} \ed \theta_0\\
&= \iota_{\xi_{T^*Q}} \omega_0
}
$$
$\Longrightarrow \quad X_{j_\xi} = \xi_{T^*Q}$, so $J$ is a momentum map. 

---

#### Equivariance of the momentum map determined by a cotngent lifted action

$$
J(g \cdot z_q) = \Ad_{g^{-1}}^* J(z_q) \qquad \qquad \forall \ g \in G, \ z_q \in T^*Q.
$$

*Verify:*
$$
\eqa{
J(g \cdot z_q)(\xi) &= J_\xi(g \cdot z_q) \phantom{\sum}\\
&= (g \cdot z_q)(\xi_Q(\pi((g \cdot z_q))))\phantom{\sum}\\
&= z_q (d_{g \cdot q}\rho(g^{-1})(\xi_Q(g \cdot q)))\phantom{\sum}\\
&= z_q (\underbrace{\rho(g)^*\xi_Q}_{(\Ad_{g^{-1}} \xi)_Q}(q))\phantom{\sum}\\
&= J_{\Ad_{g^{-1}} \xi}(z_q) \phantom{\sum}\\
&= \Ad_{g^{-1}}^* J(z_q)(\xi)
}
$$
$\Longrightarrow \ J$ is $G$-equivariant.