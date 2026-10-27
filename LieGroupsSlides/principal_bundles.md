### Principal bundles

A smooth  *principal $G$-bundle* is a [fiber bundle](fiber-bundle) $p : E → B$ with fiber $G$ satisfying

- $G$ is a Lie group with a free right action on $E$, with 
$$G \cdot z = p^{-1}(p(z)) \qquad \qquad \forall \ z \in E,$$ 
&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; and free and transitive induced $G$ actions 
$\rho_b$ on the fibers $p^{−1}(b) \,{}$ for all $\,b \in B$.
- $\exist\,$ equivariant local trivializations $\, ψ : p^{−1}(U) \xrightarrow{\simeq} U \times G, \, {}$ i.e.
$$
\eqa{
p^{−1}(U) \times G & \xrightarrow{\ ψ \times \rm{id}_G\ } U \times G \times G \\
µ \downarrow\ & \qquad \qquad \downarrow {\scriptsize \rm{id}_U \times \rm{mult}} \\ 
p^{−1}(U)& \xrightarrow{\quad ψ\quad } U \times G
}
$$
<Spacer size="5px"/>

*Trivial example:* 
A direct product $\, p: E = G \times B \to B$, where $p$ is projection onto the second factor and $G$ acts by right multiplication on the first factor, is a trivial principal bundle.

---

### Quotients by "nice" group actions determine principal bundles

If $E$ is a smooth manifold and $G$ is a compact Lie group acting [freely](free-proper-actions) and smoothly on $E$, then the projection $\, p : E → E/G\,{}$ is a principal $G$-bundle.

Sketch of verification in the [Appendix](quotient-free-proper-principal-bundle).
<Spacer size="2px"/>

*Special case:* If $G$ is a compact subgroup of a Lie group $H$, $\, p : H → H/G\,{}$  is a principal $G$-bundle.


*Example:* The QR factorization. <br/>
$G = SO(3, \R)$ and $H = GL(3, \R)$, with $U \in SO(3, \R)$ acting by left multiplication by $U^{-1}$. $H/G \approx UT^+(3, \R)$, the matrix group of upper triangular matrices with strictly positive diagonal entries, and $p$ is projection onto the second factor of the QR factorization.
<Spacer size="2px"/>

If $G$ acts [properly](free-proper-actions) on $M$, the map $\Phi_m: G \to M$ given by $\Phi_m(g) = g \cdot m$ determines a principal $G_m$-bundle $\Phi_m: G \to \mathcal{O}_m$.

*Example:* The [Hopf fibration](Hopf-fibration).<br/>
$p\, : S^3 \to S^2 \, {}$ is a principal $SO(2)$-bundle, where we identify $S^1$ with rotations about a given axis.

<!--
- $E = \text{Emb}(M, \R^3)$, the manifold of embeddings of a closed, bounded region $M \subset \R^3$ into $\R^3$, $G = SO(3)$ acting by 
$(A \cdot \varphi)(m)= A^T \varphi(m)$
-->

---

### Principal $G$-connections

An *principal $G$-connection* on a principal bundle $E$ is a $G$-equivariant $\fg$-valued 1-form $\phi$ satisfying
$$
\iota_{\xi_E} \phi = \xi 
$$
for any $\xi \in \fg$.

Here $G$-equivariance means
$$
\rho(g)^*\phi = \Ad_g \circ \phi \qquad \forall \ g \in G.
$$
<Spacer size="5px"/>

The *vertical subspace* of $T_z E$ is simply the tangent space at $z$ to the orbit of $M$
$$
\{ \xi_E(z) \, : \, \xi \in \fg \} = d_1 \Phi_z(\fg),
$$
where $\Phi_z: G \to E$ is given by $\Phi_z(g) = g \cdot z$. 

A principal $G$-connection $\phi$ determines a complementary *horizontal subspace*, the kernel of $\phi(z)$, in $T_zE$.

---

### The curvature form 

The *curvature form* of a principal $G$ connection is the $\fg$-valued 2-form 

$$
\Omega = {\ed}\phi + \half [\phi \wedge \phi ],
$$
i.e.
$$
\Omega(z)(v_z, w_z) = {\ed}\phi(z) (v_z, w_z) + \half [\phi(z)(v_z),\phi(z)(w_z)]
\qquad \forall \ \ v_z, w_z \in T_zE.
$$
<Spacer size="5px"/>

A principal $G$-connection connection with zero curvature is *flat*.