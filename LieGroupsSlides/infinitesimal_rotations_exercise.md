## Infinitesimal rotations (an exercise for the second exercise set)

Let $M = \R^3$, $G = SO(3, \R)$, and $\rho(A)(\pv) = A \pv$.

- Show that there is a Lie algebra homomorphism between 
$$
\setdef {\fg} B {\R^{3 \times 3}} {B + B^T = 0}, \qquad \text{with} \qquad [B, C] = B C - C B,
$$
$\qquad{}$and $\ \R^3, \ {}$ with 
$$[\xv, \yv]_{\R^3} = \xv \times \yv.$$
- Use this homomorphism to describe the infinitesimal generators in terms of classical/traditional infinitesimal rotations.
- Show that the representation of $SO(3, \R)$ on $\R^3$ induced by the adjoint action on $\fg$ is the standard matrix-vector product. I.e., if $U \in SO(3, \R), \xv \in \R^3$, and $\ \widehat \xv \in \fg \ {}$ is the associated skew-symmetric matrix, show that
$$
\Ad_U(\widehat \xv) = \widehat{U \xv}.
$$

---

You don't need to show that $\ (\R^3, \times)\ {}$ is a Lie algebra.
$~$
***Suggestions:***

Use the *triple product*
$$
\xv \times \yv \cdot \zv = \det [\xv \ \yv \ \zv],
$$
where $\ [\xv \ \yv \ \zv]\ {}$ denotes the matrix with columns $\xv$, $\yv$, and $\zv$. (Rows works, too.)

When showing that the representation on $\R^3$ induced by the adjoint action on $\fg$, consider making judicious use of the invertibility of elements of $SO(3, \R)$. If you're working with any arbitrary vectors, would the calculations tidy up if your arbitrary vectors had the form $U$ times an arbitrary vector?

If you consult Wikipedia's [Infinitesimal rotation matrix](https://en.wikipedia.org/wiki/Infinitesimal_rotation_matrix) article (which is what turned up first when I searched on infinitesimal rotations&mdash;there are probably better resources further down the search results), skip down to the **Generators of rotations** subsection.
