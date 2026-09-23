## Appendix C. Some proofs

---

### Sketch of proof that flows inherit invariance w.r.t. pullback 

By definition of the flow, $\calF_t(\varphi(p))$ is the solution of the IVP determined by $V$ with initial data $\varphi(p)$.

$\ \varphi^* V = V \qquad \Longrightarrow$
$$
\eqa{
\ddt \varphi(\calF_t(p)) &= d_{\calF_t(p)} \varphi \lp \ddt \calF_t(p) \rp \\
&= d_{\calF_t(p)} \varphi(V(\calF_t(p))) \\
&= V(\varphi(\calF_t(p)).
}
$$
Hence $\varphi(\calF_t(p))$ also satisfies the IVP determined by $V$ with initial $\varphi(p)$.

Uniqueness of solutions implies $\ \calF_t(\varphi(p)) = \varphi(\calF_t(p))$.
$~$

Letting $\varphi = \lozenge_g$, it follows from the that the  flows of left (resp. right) invariant vector fields commute with left (resp. right) multiplication.

---

$h(t) := \exp(t \, \xi)$ is the unique homomorphism from $(\R, +)$ to $G$ satisfying $h'(0) = \xi$. <br/>
See the Appendix for the proof.

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

---