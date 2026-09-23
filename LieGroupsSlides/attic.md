### HIDE/DELETE: The classical matrix groups are groups

Given a multilinear function $\Phi: F^n \times \cdots \times F^n \to F$, set
$$
G_\Phi := \{ A \in GL(n, F) : A \ \ \text{preserves} \ \ \Phi \}.
$$
- ***Identity element***. The identity matrix fixes all vectors, so $\idm \in G_\Phi.$ 

- ***Closure under multiplication***. $A$ and $B \in G_\Phi \ \ \Longrightarrow$ 
$$
\eqa{
\Phi((AB) \xv_1, \ldots, (AB) \xv_k) &= \Phi(A (B \xv_1), \ldots, A (B \xv_k)) \\
&= \Phi(B \xv_1, \ldots, B \xv_k) \\
&= \Phi(\xv_1, \ldots, \xv_k).
}
$$

- ***Closure under inversion***. $A \in G_\Phi \ \ \Longrightarrow$ 
$$
\eqa{
\Phi(\xv_1, \ldots, \xv_k) &= \Phi((A A^{-1}) \xv_1, \ldots, (A A^{-1}) \xv_k)\\
&= \Phi(A (A^{-1} \xv_1), \ldots, A (A^{-1} \xv_k)) \\
&= \Phi(A^{-1} \xv_1, \ldots, A^{-1} \xv_k).}
$$
$\Longrightarrow \ \ G_\Phi$ is a subgroup of $GL(n, F)$.

We now need to show that these subgroups are smooth manifolds, and that the group operations are smooth.

We'll show that they're level sets of regular values, and invoke the relevant theorems. 

$~$
Let $f:X\to Y$ be a smooth map between manifolds. $\ y \in Y$ is a *regular value* of $f$ if 
$$
 x\in f^{-1}(y) \qquad \Longrightarrow \qquad d_x f:T_{x}X\to T_{y}Y \ \text{is surjective.}
$$

---

FIX: This is implying the invariance wrt pullback result to left and right invariant vfs. Right place for this?

Given $g_0 \in G$, if we define $g: I \to G$ by
$$
g(t) := g_0 \gamma_\xi(t)),
$$
then
$$
\eqa{
g'(t) &= d_{\gamma(t)} L_{g_0}(d_1L_{\gamma(t)}(\xi) )\\
&= d_1 (L_{g_0} \circ L_{\gamma(t)})(\xi)\\
&= d_1 L_{g_0  \gamma(t)} (\xi)\\
&= d_1 L_{g(t)} (\xi)\\
&= X_\xi^L(g(t)).
%g'(t) &= d_{\gamma(t)} \lozenge_{g_0}(d_1\lozenge_{\gamma(t)}(\xi) )\\
%&= d_1 (\lozenge_{g_0} \circ \lozenge_{\gamma(t)})(\xi)\\
%&= d_1 \lozenge_{\lozenge_{g_0}(\gamma(t))} (\xi)\\
%&= d_1 \lozenge_{g(t)} (\xi)\\
%&= X_\xi^\lozenge(g(t)).
}$$

***Non-standard notation alert:***
Much of what's coming up is defined entirely analogously for both left and right multiplication on $G$, so I'm going to use the symbol $\ \lozenge \ {}$ to indicate 
"L or R, as long as you're consistent", and.

---

### Special case: $G$ a subgroup of $GL(n, F)$

$$
\gamma_\xi(t) = \exp(t \, \xi) = \sum_{j = 0}^\infty \smallfrac 1 {j!} (t \, \xi)^j,
$$ 
since for $\ \xi \in F^{n \times n}$
$$
\eqa{
\ddt {\textstyle \sum_{j = 0}^\infty} \smallfrac 1 {j!} (t \, \xi)^j 
&= {\textstyle \sum_{j = 1}^\infty} \smallfrac {t^{j - 1}} {(j - 1)!} \xi^j \\
&= \lp {\textstyle \sum_{j = 1}^\infty} \smallfrac {t^{j - 1}} {(j - 1)!} \xi^{j - 1} \rp \xi \\
&= \exp(t \, \xi) \xi  \\
&= X^L_\xi(\gamma_\xi(t)).
}
$$

Factoring $\xi$ out on the left, rather than the right, yields
$$
\ddt \exp(t \, \xi) = \xi \exp(t \, \xi) = X^R_\xi(\gamma_\xi(t)).
$$

---

### The matrix exponential is an exponential map

More generally, the series expansion for the exponential can be used to calculate the exponential map for the general linear group of a vector space $V$:
$$
\setdef {GL(V)} \fv {L(V, V)} {\fv \ \text{invertible}}.
$$

Here matrix multiplication is replaced by composition of (linear) maps:
$$
\fv^2 = \fv \circ \fv, \qquad \fv^3 = \fv \circ \fv \circ \fv, \qquad \text{etc.}
$$

*Example:* The exponential of a nilpotent map can be directly calculated from the series expansion: If $\fv: V \to V$ satisfies $\ \fv^k = {\mathbf 0}\ {}$ for some $k \in {\mathbb N}, \ {}$ then
$$
\exp(\fv)  = \sum_{j = 0}^{k - 1} \smallfrac 1 {j!} \fv^j.
$$

Calculations involving the exponential map usually invoke properties developed from
- local existence and uniqueness of solutions of IVPs, and 
- $\lozenge$ invariance.

---

## Properties and uses of the exponential map

$h(t) := \exp(t \, \xi)\ {}$ is the unique homomorphism from $(\R, +)$ to $G$ with $\ h'(0) = \xi$.

*Verify:* 
$$
h(t) = \exp(t \, \xi) = \calF_{t \, \xi}^\lozenge(1, 1) = \calF_{\xi}^\lozenge(1, t),
$$
since $\xi \to X_\xi^\lozenge$ is linear. (Use change of variables to rescale time.)
Hence 
$$
h'(t) = X_\xi^\lozenge(h(t)) = d_1 \lozenge_{h(t)}(\xi), 
$$
so $\ h(0) = 1 \ \Longrightarrow \ h'(0) = \xi$.

Uniqueness of $h$ follows from uniqueness of solutions of IVPs. 
$~$

$h(\R)$ is called the *one parameter subgroup* of $G$ correponding to $\xi \in \fg$.
