---
routeAlias: isotropy-subgroups-closed
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