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