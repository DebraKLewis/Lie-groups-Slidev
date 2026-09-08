## Appendix: More symplectic results

*Verify that $\ [ \ , \ ]_{\dcXM)} \ {}$ satisfies the Jacobi identity:*

$$
\lp [ \alpha, \beta ]_{\dcXM} \rp^\sharp = \lp  [\alpha^\sharp, \beta^\sharp]^\flat \rp^\sharp = [\alpha^\sharp, \beta^\sharp]
$$
$\Longrightarrow$
$$
[[ \alpha, \beta ]_{\dcXM}, \gamma]_{\dcXM} = [[\alpha^\sharp, \beta^\sharp], \gamma^\sharp]^\flat.
$$
Hence $\ [\ , \ ]\ {}$ a Lie bracket $\ \Longrightarrow\ [ \ , \ ]_{\dcXM)}\ {}$ satisfies the Jacobi identity.
$~$
Preliminary to proving that $\ \{ \ , \ \}_{C^\infty(M)} \ {}$ satisfies the Jacobi identity, show that:
$$
d \{ f, h \}_{C^\infty(M)} = [df, dh]_{\dcXM}
$$
$~$
Invoke the following identity from the cheat sheet, applied to $\omega$ and $X, Y, Z \in \cXM$:
$$
\eqa{
\ed \omega(X, Y, Z) &= X(\omega(Y, Z)) - \omega(Y, [X, Z]) \\
&\qquad + \text{cyclic permutations of } X, Y, Z.
}
$$

---

Let $X = \alpha^\sharp$ and $Y = \beta^\sharp$.

$$
\eqa{
\alpha^\sharp(\omega(\beta^\sharp, Z)) 
&= \alpha^\sharp(\beta(Z)) \\
&= (\calL_{\alpha^\sharp}\beta)(Z) + \beta([\alpha^\sharp, Z]) \\
&= (\calL_{\alpha^\sharp}\beta)(Z) + \omega(\beta^\sharp, [\alpha^\sharp, Z]) 
}
$$
$\ \Longrightarrow$
$$
X(\omega(Y, Z)) - \omega(Y, [X, Z]) = (\calL_{\alpha^\sharp}\beta)(Z).
$$
Analogously,
$$
\eqa{
Y(\omega(Z, X)) - \omega(X, [Z, Y])&= - (Y(\omega(X, Z)) - \omega(X, [Y, Z]))  \\
&= - (\calL_{\beta^\sharp}\alpha)(Z).
}
$$

Finally,
$$
\eqa{
Z(\omega(X, Y)) - \omega(Z, [Y, X]) &= Z(\omega(\alpha^\sharp, \beta^\sharp)) + \omega([\alpha^\sharp, \beta^\sharp], Z)\\
&= \lp d(\omega(\alpha^\sharp, \beta^\sharp))+ [ \alpha , \beta ]_{\dcXM} \rp(Z).
}
$$

---

$\omega\, {}$ closed $\ \Longrightarrow \ \ed \omega(\alpha^\sharp, \beta^\sharp, Z) = 0. \quad$ 

Putting it all together, dropping $Z$, and rearranging terms gives
$$
[ \alpha , \beta ]_{\dcXM} = \calL_{\beta^\sharp}\alpha - \calL_{\alpha^\sharp}\beta - d(\omega(\alpha^\sharp, \beta^\sharp)).
$$
$~$
***Bonus/side result:*** 
- The space $\, \calX^*_C(M)\, {}$ of closed 1-forms is a Lie subalgebra, and 
- The derived algebra of $\,  \calX^*_C(M)\, {}$ is contained in the subalgebra $\,  \calX^*_E(M)\, {}$ 
of exact 1-forms.
$~$

*Verify:* The identity
$$
\calL_X \alpha = \iota_X \ed \alpha + \ed \iota_X \alpha
$$
$\ \Longrightarrow\ {}$ Lie derivatives of closed forms are exact. 

---

If $\alpha$ is a closed 1-form,
$$
\omega(\alpha^\sharp, \beta^\sharp) = \alpha(\beta^\sharp) 
\qquad \Longrightarrow\qquad \calL_{\beta^\sharp} \alpha = \ed \iota_{\beta^\sharp} \alpha 
= d \iota_{\beta^\sharp}\iota_{\alpha^\sharp}\omega.
$$

$\alpha\, {}$ and $\, \beta \, {}$ closed $\ \Longrightarrow\ {}$
$$\eqa{
[ \alpha , \beta ]_{\dcXM} &= \calL_{\beta^\sharp}\alpha - \calL_{\alpha^\sharp}\beta - d\iota_{\beta^\sharp}\iota_{\alpha^\sharp}\omega \\
&= - d \iota_{\beta^\sharp}\iota_{\alpha^\sharp}\omega.
}
$$
$~$

### Relationships between $[\ \,, \ ], \ [\ \,, \ ]_{\calX^*_E}(M), \ {}$ and $\ \{·, ·\}$

Setting $\, \alpha = df \, {}$ and $\, \beta = dh\,{}$ gives
$$\eqa{
[ df, dh ]_{\dcXM} &= d \iota_{dh^\sharp}\iota_{df^\sharp}\omega \\
&= d \iota_{X_h}\iota_{X_f}\omega \\
 &= d \{f, h \}.
}
$$

---

Applying ${}^\sharp\,{}$ to both sides of the previous equality gives
$$
\eqa{
[X_f, X_h] &= [ df, dh ]_{\dcXM}^\sharp\\ 
&= \lp d \{f, h \} \rp^\sharp \\
&= X_{\{f, h \}}.
}
$$ 
$~$
$\{·, h\}\, {}$ is a derivation, and the Hamiltonian vector fields determined by $\,\omega\,$ and $\, \{·, ·\}\, {}$ 
are equal, since
$$
X_h(f) = \iota_{X_h} df = \iota_{X_h}\iota_{X_f}\omega = \{f,h\}  
$$
for all $\, f, h \in C^\infty(M)$.

$\, \{·, ·\}\, {}$ satisfies the Jacobi identity $\quad  \Longleftrightarrow$
$$
[X_f , X_h] = X_{\{f,h\}} \qquad \qquad \forall\ f, h \in C^\infty(M),
$$
so $\, \{·, ·\}\, {}$ is a Poisson bracket.

---

*Verify:* 
$$
d_{z_q} \pi(d_q \beta(T_q Q)) = d_q (\pi \circ \beta)(T_q Q) = T_q Q
$$
$\Longrightarrow \ d_q \beta\ {}$ is injective.

$$
\pi(z_q + \epsilon  \, p_q) = q \quad \Longrightarrow \quad
d_{z_q} \pi(\text{vert}_{z_q}(p_q) = \dep{\pi(z_q + \epsilon  \, p_q)} 
 = 0
$$

$\Longrightarrow \ \text{vert}_{z_q}(T_q^*Q) \subseteq \ker \, d_{z_q} \pi$.

$\text{vert}_{z_q}\, {}$ is injective, so in finite dimensions, the dimension counts 
$$
\dim \, Q = \text{rank} \, d_q(\pi \circ \beta) \leq \text{rank} \, d_q \pi,
$$
and hence
$$
\dim \, \ker \, d_{z_q} \pi = \dim \, T^* Q -\text{rank} \, d_q \pi 
\leq \dim \, Q = \dim \, \text{vert}_{z_q}(T_q^*Q),
$$
suffice to show $\ \text{vert}_{z_q}(T_q^*Q)\, {}$ is an isomorphism.

Injectivity of $d_q \beta \Longrightarrow \ \hat \beta {}$ is an isomorphism. 

### Recap: the canonical symplectic structure on a cotangent bundle

If $\, \pi: T^* Q \to Q\, {}$ denotes the projection to the base
$$
\pi(z_q) = q \qquad \quad \forall \ z_g \in T^*_q Q, \ q \in Q,
$$
the *canonical 1-form* $\, \theta_0\, {}$ on $\, T^*Q\, {}$ is given by
$$
\theta_0(w_{z_p}) := z_p(d_{z_p} \pi(w_{z_p})) \qquad \quad \forall \ w_{z_p} \in T_{z_p} T^* Q, \ z_p \in T^* Q.
$$
$~$
The *canonical symplectic structure* on $T^*Q$ is 
$$
\omega_0 := - \ed \theta_0.
$$
$~$
If $\,\beta\, {}$ is a 1-form on $\,Q,\ {}$ then 
$$
\beta^*\theta_0 = \beta \qquad \text{and hence}\qquad \beta^*\omega_0 = - \ed \beta.
$$

---

$$
\eqa{
\text{vert}_{z_q}: T_q^*Q &\to \ker \, d_{z_q} \pi \\
p_q & \mapsto \dep{(z_q + \epsilon  \, p_q)}
}
$$
and
$$
\eqa{
    \hat \beta_q : T_q Q \times T_q^* Q &\to T_{\beta(q)} T^* Q \\
(v_q, p_q) &\mapsto d_q \beta(v_q) + \text{vert}_{\beta(q)}(p_q)
}
$$
are isomorphisms, and
$$
\omega_0(\beta(q))(\hat \beta_q(v_q, p_q), \hat \beta_q(\tilde v_q, \tilde p_q)) = 
\tilde p_q(v_q) - p_q(\tilde v_q) -  \ed \beta(q)(v_q, \tilde v_q).
$$ 
$~$
*Verify:* 

Bilinearity of $\omega_0 \ \Longrightarrow \ {}$ we can work term by term.

$$
\eqa{
\omega_0(\beta(q))(d_q \beta(v_q), d_q \beta(\tilde v_q))& = \beta^* \omega_0(q)(v_q, \tilde v_q)\\
&= - \ed \beta(q)(v_q, \tilde v_q).}
$$ 

---

We now show that
$$
\omega_0(z_q)(\text{vert}_{z_q}(p_q), w_{z_q}) = - p_q(d_{z_q} \pi(w_{z_q})),% \qquad 
%\forall \ q \in Q, z_q, p_q \in T_q^*Q, \ w_{z_q} \in T_{z_q}T^* Q, 
$$

and hence 
$$
\omega_0(z_q)(\text{vert}_{z_q}(p_q),  d_q \beta(\tilde v_q)) = 
- p_q(d_{z_q} (\pi \circ \beta)(\tilde v_q) = - p_q(\tilde v_q)
$$
and 
$$
\omega_0(z_q)(\text{vert}_{z_q}(p_q),  \text{vert}_{z_q}(\tilde p_q)) = 0.
$$
$~$
Let $\alpha \in {\cal X}^*(Q)$ be a 1-form satisfying $\, \alpha(q) = p_q, \ {}$ and define $X_\alpha \in {\cal X}(T^*Q)\,{}$ by
$$
\eqa{
X_\alpha(\tilde z_{\tilde q}) :=& \ \text{vert}_{\tilde z_{\tilde q}}(\alpha(\tilde q)) \\
=&  
 \dep{(\tilde z_{\tilde q} + \epsilon \, \alpha(\tilde q))}
$$

$\forall \ \tilde z_{\tilde q} \in T^*Q,\ {}$ with flow
$$
\calF_t = \text{id}_{T^*Q} + t \, \alpha \circ \pi.
$$

---

$$
\eqa{
\iota_{X_\alpha}\omega_0 &= - \iota_{X_\alpha} \ed \theta_0 \\
&= - \underbrace{\calL_{X_\alpha} \theta_0}_{\dep{\calF_\epsilon^* \theta_0}} + \ed \underbrace{\iota_{X_\alpha} \theta_0}_{0}.
}
$$
and
$$
\eqa{
({\cal F}_\epsilon^* \theta_0)(z_q)(w_{z_q})
&= \theta_0({\cal F}_\epsilon(z_q))(d_{{\cal F}_\epsilon(z_q)} \pi(d_{z_q} {\cal F}_\epsilon(w_{z_q}))\\
&= \theta_0(z_q + \epsilon \, \alpha(q))((d_{z_q}(\underbrace{\pi \circ {\cal F}_\epsilon}_{\pi})(w_{z_q}))\\
&= (z_q + \epsilon \, \alpha(q))(d_{z_q} \pi(w_{z_q}))
}
$$
$\Longrightarrow$
$$
\eqa{
\omega_0(z_q)(\text{vert}_{z_q}(p_q), w_{z_q}) 
&= \iota_{X_\alpha}\omega_0(z_q)(w_{z_q}) \\
&= - \dep{(z_q + \epsilon \, \alpha(q))(d_{z_q} \pi(w_{z_q}))}\\
&= - \underbrace{\alpha(q)}_{p_q}(d_{z_q} \pi(w_{z_q})).
%&= - p_q(d_{z_q} \pi(w_{z_q})).
}
$$
