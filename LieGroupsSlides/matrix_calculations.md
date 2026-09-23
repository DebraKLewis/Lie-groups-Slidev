# Appendix C. Some representative calculations

- Directional derivatives of the determinant

---

## Derivative of the determinant of an invertible matrix

Express the fiber $T_g G$ over $g$ of the tangent bundle $TG$ as the left or right translation of $T_1 G$. 

Exploit $\ \text{det} \, (AB) = (\text{det} \, A)(\text{det} \, B)$ by working with a curve through $A$ of the form 
$$
A(\epsilon) = A (\idm + \epsilon \, C + \cdots ), \qquad \text{or} \qquad A(\epsilon) = (\idm + \epsilon \, C + \cdots) A,
$$
where $C \in T_1 G$. 

$$
\text{det} \, A(\epsilon) = (\text{det} \, A) \text{det} (\idm + \epsilon \, C + \cdots)
$$
$\Longrightarrow$ 
$$
d_A \text{det}(A C) = (\text{det} \, A)\, d_1 \text{det}(C) = d_A \text{det}(C A), 
$$
so we only need to compute derivatives of the determinant at the identity.

Multilinearity of the determinant $\ \ \Longrightarrow\ \ {}$
$$
\text{det} (\idm + \epsilon \, C + \text{higher order terms})
= \text{det} (\idm + \epsilon \, C) + \text{higher order terms}.
$$

---

### Calculation of derivative of the determinant at the identity

One possible approach is to use the characteristic polynomial: If $C \in F^{n \times n}$,
$$
\chi_C(\lambda) = \text{det} (\lambda\, \idm - C) = \lambda^n - (\text{tr} \, C) \lambda^{n - 1} + \cdots + (-1)^n \text{det} \, C.
$$

Setting $\lambda = \frac 1 \epsilon$, we have
$$
\eqa{
\text{det} (\idm + \epsilon \, C) &= \epsilon^n \text{det} (\textstyle{\frac 1 \epsilon} \idm - (- C)) \\
&= \epsilon^n \lp \epsilon^{-n} + (\text{tr} \, C) \epsilon^{1 - n}  + \cdots + \text{det} \, C \rp \\
&= 1 + \epsilon \, \text{tr} \, C + \text{higher order terms},
}
$$
and hence
$$
\dep {\text{det} (\idm + \epsilon \, C + \text{higher order terms})} = 
\dep {\text{det} (\idm + \epsilon \, C)} = \text{tr} \, C.
$$

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