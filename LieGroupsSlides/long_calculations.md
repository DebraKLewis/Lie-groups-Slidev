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
routeAlias: symplectic-induces-Poisson
---

***Claim:*** $\omega$ determines a Poisson bracket 
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

To show that $\, \{·, ·\}\, {}$ satisfies the Jacobi identity, we'll introduce another bracket.
$~$
$\omega$ also determines a Lie bracket on the space $\, \dcXM \, {}$ of smooth 1-forms:
$$
[ \alpha, \beta ]_{\dcXM} := - [\alpha^\sharp, \beta^\sharp]^\flat.
$$

- The space $\, {\cal X^*_C}(M)\, {}$ of closed 1-forms is a Lie subalgebra, and 
- The derived algebra of $\,  {\cal X^*_C}(M)\, {}$ is contained in the subalgebra $\,  {\cal X^*_E}(M)\, {}$ 
of exact 1-forms.

---

Setting $\, \alpha = df \, {}$ and $\, \beta = dh\,{}$ gives
$$\eqa{
[ df, dh ]_{\dcXM} &= d \iota_{dh^\sharp}\iota_{df^\sharp}\omega \\
&= d \iota_{X_h}\iota_{X_f}\omega \\
 &= d \{f, h \}.
}
$$

Applying ${}^\sharp\,{}$ to both sides of the previous equality gives
$$\eqa{
[X_f, X_h] &= [ df, dh ]_{\dcXM}^\sharp\\ 
&= \lp d \{f, h \} \rp^\sharp \\
&= X_{\{f, h \}}.
}
$$ 

$\, \{·, ·\}\, {}$ satisfies the Jacobi identity $\quad  \Longleftrightarrow$
$$
[X_f , X_h] = X_{\{f,h\}} \qquad \qquad \forall\ f, h \in C^\infty(M),
$$
so $\, \{·, ·\}\, {}$ is a Poisson bracket.