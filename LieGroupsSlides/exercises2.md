## Frobenius exercise #1.

Let $M = \R^3$. For each point $\pv \in \R^3$, define 
$$
{\cal D}_\pv := \pv^\perp = \{ \xv \in \R^3: \langle \xv, \pv \rangle = 0 \},
$$
where $\langle \ , \ \rangle $ denotes the Euclidean inner product. (I'm avoiding using the usual dot product dot in hopes of avoiding confusion with group action notation.)
- Show that the assignment of ${\cal D}_\pv$ to $\pv$ defines a (smooth) distribution ${\cal D}$ on $M$. 
- Show that the distribution ${\cal D}$ is invariant with respect to the usual action of $SO(3, \R)$ on $\R^3$. 
- Determine/contruct all maximal integral manifolds of ${\cal D}$. More or less rigorous justify your answer.
$~$

***Frobenius exercise #2.*** 
(Lifted with minor modifications from a [Differential Geometry exercise set](https://www.math.toronto.edu/laithy/3672021/367ps6.pdf) by Ahmed Ellithy, U Toronto.)

Let $U \subset \R^2$ be an open set containing the origin. Consider the following (very simple!) overdetermined system of first order linear PDEs: find a neighborhood $U_0 \subseteq U$ containing $0$ and a smooth function $f: U_0 \to \R$ satisfying
$$
\smallfrac {∂f}{∂x} = g_1, \qquad \smallfrac {∂f}{∂y} = g_2, \sands f(0, 0) = c
$$
for given smooth functions $g_j: U \to \R$ and $c \in \R$. 

If solutions exist with a common $U_0$ for all choices of $c ∈ \R$, what "obvious" necessary condition is satisfied by $g_1$ and $g_2$? 

Continuing with the assumption that solutions with a common domain $U_0$ exist for all $c \in \R$, find/construct an involutive distribution ${\cal D}$, determined by $g_1$ and $g_2$, such that if $f_c: U_0 \to \R$ denotes the solution satisfying $f(0, 0) = c$, the graphs
$$
\Gamma_c := \{ (x, y, f_c(x, y)): (x, y) \in U_0 \}
$$
are all integral manifolds of ${\cal D}$.

## Correction to, comments on, and possible approach to the Frobenius exercise #1

${\cal D}_0$ should have been defined as $\{0 \}$, not as $0^\perp$. My heartfelt apologies for not recognizing that in trying to hide the underlying construction, I'd botched the specification at the origin. I'd actually typed "${\cal D}_0$ is trivial, so" in these notes before it clicked that I hadn't defined it that way. Sorry to have been all "It's OK that the rank changes" without understanding that you were (probably) telling me that it was changing in the wrong direction.

Full credit to all on this problem!

With the correct ${\cal D}_0$, this exercise is at heart Part 2 of the infinitesimal rotations exercise.

I identify $T_{\mathbf{p}} \mathbb{R}^3$ with $\mathbb{R}^3$ throughout, including using usual matrix multiplication notation for tangent versions of matrix multiplication. 

For any basis $\ \{ \mathbf{v}_1, \mathbf{v}_2, \mathbf{v}_3 \}, \, {}$ of $\mathbb{R}^3$: the smooth vector fields
$$
X_j(\mathbf{p}) := \mathbf{v}_j \times \mathbf{p}
$$
span ${\cal D}$, i.e.
$$
{\cal D}_{\mathbf{p}} = \text{span}\{X_1(\mathbf{p}), X_2(\mathbf{p}), X_3(\mathbf{p})\}
\qquad \forall \ \mathbf{p} \in \mathbb{R}^3.
$$
If you opt for the regular distribution approach: On a sufficiently small neighborhood of a nonzero $\mathbf{p}$, at least two of the vector fields will be everywhere nonzero.

Given $U \in SO(3, \mathbb{R})$ and $\mathbf{p} \in \mathbb{R}^3$, 
$$
(\rho(U)_*X_j)(\mathbf{p}) = U(X_j(U^{-1}\mathbf{p})) = U(\mathbf{v}_j \times U^{-1} \mathbf{p}) = (U\mathbf{v}_j) \times (U U^{-1}\mathbf{p}) = (U\mathbf{v}_j) \times \mathbf{p} \in {\cal D}_{\mathbf{p}},
$$
so ${\cal D} = \text{span}\{X_1, X_2, X_3\}$ is $SO(3, \mathbb{R})$-invariant.

The maximal integral manifolds are the spheres centered at the origin, and the origin if you include the origin in the domain. <br>
*Justification:* If $\mathbf{p} \neq 0$, the tangent space to the sphere containing $\mathbf{p}$ is ${\cal D}_{\mathbf{p}}$, so the spheres are integral manifolds of ${\cal D}$. 
These integral manifolds can't be extended, since any extension would involve multiple spheres, and thus would allow movement across spheres, and there's no radial component to ${\cal D}$. 
If ${\cal D}_0$ is defined to be trivial, then the origin is a 0-dimensional integral manifold.

***Side comment:***
Using the identification of $\mathbb{R}^3$ with the algebra $so(3, \mathbb{R})$ of $SO(3, \mathbb{R})$, the spheres in this case can be regarded as the orbits under the adjoint action on $so(3, \mathbb{R})$.

This construction generalizes to other Lie groups, with the (not necessarily regular) distribution ${\cal D}$ on $\mathfrak{g}$  given by
$$
{\cal D}_\xi = \text{ad}_\xi(\mathfrak{g})= \{ [\xi, \eta] : \eta \in \mathfrak{g} \} \qquad \forall \ \xi \in \mathfrak{g}.
$$
If $G$ is connected, the maximal integral manifolds are $G \cdot \xi = \{ \text{Ad}_g(\xi) : g \in G \}$. 

This example can also be regarded as a special case of orbits under the ***co***adjoint action on $so(3, \mathbb{R})^*$. Coadjoint actions are very important in geometric Hamiltonian and Langrangian dynamics with symmetries (related to conversation of momentum). 
Changes in the dimensions of the orbits (corresponding to singular distributions) can be an analytic headache and/or require handling of multiple cases, but those changes reflect crucial symmetry-breaking in the systems being studied. 

### One approach to the adjoint action of $SO(3, \mathbb{R})$ exercise on the handout

Use $\ 
 \langle \mathbf{x} \times \mathbf{y}, \mathbf{z} \rangle = \text{det} [\mathbf{x} \ \mathbf{y} \ \mathbf{z}], \ {}$ where $[\mathbf{x} \ \mathbf{y} \ \mathbf{z}]$ denotes the matrix with columns $\mathbf{x}, \mathbf{y}, \mathbf{z}. \ {}$ If $U \in SO(3, \mathbb{R})$, then
$$
\langle U \mathbf{x} \times U \mathbf{y}, U \mathbf{z} \rangle = \text{det} [U \mathbf{x}\ \ U \mathbf{y}\ \ U \mathbf{z}] 
= (\text{det} U) \text{det} [\mathbf{x} \ \mathbf{y} \ \mathbf{z}] = \langle \mathbf{x} \times \mathbf{y}, \mathbf{z} \rangle,
$$
for all $\mathbf{x}, \mathbf{y}, \mathbf{z}$ implies that 
$$
\widehat {\mathbf{x}} \mathbf{y} = \mathbf{x} \times \mathbf{y} = U^{-1}(U \mathbf{x} \times U \mathbf{y}) 
= U^{-1} \widehat {U \mathbf{x}} U \mathbf{y}
$$
for all $\mathbf{x}, \mathbf{y}$, and hence $
U \widehat {\mathbf{x}}  U^{-1} = \widehat {U \mathbf{x}}.$

### Comments on (1.7) from Duistermat and Kolk

Lie's third theorem says that a finite dimensional Lie algebra is isomorphic to the algebra of some connected, simply connected Lie group (we didn't prove the hard part of that theorem). I think that algebraists define the group of inner automorphisms directly through the exponentials of ad_x's (specifically, the group generated by exponentials of ad's of nilpotent algebra elements), while groupy folk use Lie's theorem to say that it's got to be somebody's algebra. Theorems 2.6 and 2.7 in Kirillov describe the relationships between Lie groups and connected simply-connected Lie groups.  