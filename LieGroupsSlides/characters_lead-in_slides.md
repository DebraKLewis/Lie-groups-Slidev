## Back to matrix coefficients for compact groups

Given a representation $V$ of a compact Lie group $G$, we can define a map $\ \varphi: V^∗⊗V →C^∞(G,\C)\ {}$ by
$$
\varphi(\beta ⊗ v)(g) := \beta(g \cdot v) \qquad \quad \forall \ g \in G.
$$
Any function of the form $\varphi(\beta ⊗ v)$ is called a *matrix coefficient*.
$~$

We can choose an orthonormal basis ${\cal B}$ of $V$ and define an inner product on $V^*$ by declaring that the basis dual to ${\cal B}$ is orthonormal. 

This pair of inner products determines in turn an inner product on $\ V^∗ ⊗ V, \ {}$ namely
$$
\langle \beta ⊗ v, \tilde \beta ⊗ \tilde v \rangle_{V^* ⊗ V} = \frac {\langle v, \tilde v \rangle_V \langle \beta , \tilde \beta \rangle_{V^*}} {\dim \ V} .
$$

***Claim:*** $\varphi$ respects the inner products,and hence is injective. 

---

*Verify:* Recall that a homomorphism $\phi: V \to W$ between isomorphic irreducible representations satisfies
$$
\int_G \rho_W(g) \circ \phi \circ \rho_V(g^{-1}) dg = \frac{ \text{trace}\ \phi}{\dim V} \text{id}_V.
$$
$~$
If $\{v_1, \ldots, v_n \}$ is an orthonormal basis of $V$ and $\{\beta_1, \ldots, \beta_n \}$ is the dual basis, 
and we define $\ \phi_{ij} : V \to V \ {}$ by
$$
\phi_{ij}(v) := \beta_j(v) v_i,
$$
then 
$$\eqa{
\text{trace} \, \phi_{ij} &= \textstyle{\sum_k} \beta_k(\phi_{ij}(v_k)) \\
&= \textstyle{\sum_k} \beta_j(v_k) \beta_k(v_i) \\
&= \textstyle{\sum_k}\delta_{jk} \delta_{ki}\\
&= \delta_{ij}.
}$$

---


$$\eqa{
\langle \varphi(\beta_k ⊗ v_i), \varphi(\beta_\ell ⊗ v_j) \rangle_{L_2(G)}
&= \int_G \beta_k(g \cdot v_i) \overline{\beta_\ell(g \cdot v_j)} dg \\
&= \beta_k \lp \int_G \beta_j(g^{-1} \cdot v_\ell) g \cdot v_i  dg \rp \\
&= \beta_k \lp \int_G g \cdot \phi_{ij}(g^{-1} \cdot v_\ell) dg \rp \\
&= \beta_k \lp \int_G \rho(g) \circ \phi_{i j} \circ \rho(g^{-1})) dg  \, v_\ell \rp \\
&= \beta_k \lp \frac {\delta_{ij}}{\dim V} v_\ell \rp \\
&= \frac {\delta_{ij} \delta_{k \ell}}{\dim V} \\
&= \frac {\langle v_i, v_j \rangle_V \langle \beta_k, \beta_\ell \rangle_{V^*}}{\dim V} \\
&= \langle \beta_k ⊗ v_i, \beta_\ell ⊗ v_j \rangle_{V^* ⊗ V }.
}
$$